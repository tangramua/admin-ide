import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { from, forkJoin } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { inject, injectable } from 'inversify';
import { IWorkspace } from '@adminide-stack/core';
import { ETypes, IBillingService } from '@adminide-stack/billing-api-server';
import { TYPES as AccountTypes, IOrganizationService, IAccountService} from '@adminide-stack/account-api-server';
import { TYPES as ActivityTypes, IActivityCollector, IActivityRecord } from '@adminide-stack/user-activity-server';
import {
    TYPES as WorkspaceTypes,
    EWorkspaceManagementQProps,
    IWorkspaceService, IManagerService,
 } from '@adminide-stack/workspaces-server';

import { config } from '../config';
import { AbstractBillingScheduler } from './billing-scheduler-abstract';

const MANAGER_TICK = 300000; // 5 minutes

export interface IWsManagementRecord {
    spec: any;
    _id: string;
    orgId: string;
    namespace: string;
}

@injectable()
export class BillingSchedulerLocalService extends AbstractBillingScheduler {
    private logger: Logger;

    constructor(
        @inject('Logger') logger: Logger,
        @inject(ETypes.BillingService) private billing: IBillingService,
        @inject(AccountTypes.IAccountService) private accounts: IAccountService,
        @inject(WorkspaceTypes.ManagerService) private workspaces: IManagerService,
        @inject(ActivityTypes.ActivityCollector) private activity: IActivityCollector,
        @inject(AccountTypes.IOrganizationService) private oranizaion: IOrganizationService,
    ) {
        super();
        this.logger = logger.child({ className: BillingSchedulerLocalService });
    }

    public async complete(payed?: boolean): Promise<boolean> {
        if (payed) {
            this.logger.info('Billing processed!');
        }

        return payed;
    }

    private async customer(record: IWsManagementRecord) {
        const organization = await this.oranizaion.getOrganization(record.orgId);
        const account: any = await this.accounts.findAccountByUser(organization.billingLeaders[0]);

        return account.stripeCustomerId;
    }

    private async usage(record: IWsManagementRecord): Promise<number> {
        const activity: IActivityRecord = await this.activity.get(record.namespace);
        this.logger.info(`Fetching activity for %s: %o`, record.namespace, activity);

        return _.get(activity, 'value', 15);
    }

    private machine(record) {
        return record.spec.machine || _.pick(record.spec, ['id', 'ram', 'cpu', 'region', 'hdd']);
    }

    private async __process(record: IWsManagementRecord) {
        let customer, usage;

        try {
            customer = await this.customer(record);
            if (!customer) {
                throw new Error(`Stripe customer for workspace ${record._id} not found!`);
            }

            usage = await this.usage(record);

            if (!usage) {
                throw new Error('Cannot fetch user activity!');
            }

            const result = await this.billing.process({
                customer,
                hours: usage,
                workspace: record._id,
                machine: this.machine(record),
            });

            if (result && result.payed) { // If charged -> clearing worksapce resources usage.
                await this.activity.unset(record.namespace);
                this.logger.debug('Payment processed for %s: %o.', record.namespace, result);
            }

            return result.payed;
        } catch (e) {
            this.logger.error('Could not process payment for %o: %o', record, e);
            throw new Error(e);
        }
    }

    public handler(): any {
        this.logger.info('Billing processing...');
        return forkJoin(
            from(this.workspaces.fetch({}, [
                    EWorkspaceManagementQProps.Id,
                    EWorkspaceManagementQProps.Spec,
                    EWorkspaceManagementQProps.Namespace,
                    EWorkspaceManagementQProps.Organization,
                ]))
                .pipe(flatMap((ws: any[]) => from(ws)))
                .pipe(flatMap((record: any) => this.__process(record))),
        );
    }
}
