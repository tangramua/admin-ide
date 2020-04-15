import * as _ from 'lodash';
import { injectable, inject } from 'inversify';

import { calculate } from '../../utils';
import {
    TMachinePrice, ICalculationUnit,
    ICalculationParameters, IPriceRow,
    IBillingService, IMachineConfigRow, IBillingProcessRequest, IBillingReport,
} from '../../interfaces';


@injectable()
export abstract class BillingAbstractService implements IBillingService {

    public table(params: ICalculationParameters): Promise<IPriceRow[]> {
        throw new Error('Not implemented');
    }

    public async price(input: TMachinePrice): Promise<IPriceRow> {
        throw new Error('Not implemented');
    }

    public async charge(amount: number, customer: string): Promise<any> {
        throw new Error('Not implemented');
    }

    public async process(request: IBillingProcessRequest) {
        let ok, payed = false, metadata = {};
        const amount = await this.calculate(request.hours, request.machine, request.params || ({} as any));

        try {
            if (amount > 0.5) { // Will not charge for amount < $0.5
                metadata = await this.charge(amount, request.customer);
                payed = true;
            }
        } catch (e) {
            ok = false;
            metadata = e;
            payed = false;
        }

        const report: IBillingReport = {
            ok,
            amount,
            payed,
            metadata,
            usage: request.hours,
            createdAt: new Date(),
            updatedAt: new Date(),
            customer: request.customer,
            workspace: request.workspace,
            fees: _.get(request.params, 'fees'),
            discount: _.get(request.params, 'discount'),
        };

        return report;
    }

    public async calculate(hours: number, machine: TMachinePrice, params?: ICalculationParameters) {
        let discount = 0;

        let fees = {
            billing: 0,
            service: 0,
        };

        const price = await this.price(machine);
        if (!price) {
            throw new Error(`Can not fetch price for machine ${JSON.stringify(machine)}`);
        }

        const usage = hours * price.hourly;

        if (params && params.discount) {
            discount = calculate(usage, params.discount);
        }

        if (params && params.fees) {
            fees.service = calculate(usage, params.fees.service);
            fees.billing = calculate(usage, params.fees.billing);
        }

        return usage - discount + (fees.billing + fees.service);
    }
}
