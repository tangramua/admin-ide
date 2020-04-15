import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { flatMap } from 'rxjs/operators';
import { interval, from, Subject } from 'rxjs';
import { inject, injectable } from 'inversify';
import { IWorkspace } from '@adminide-stack/core';
import { TYPES as WorkspaceTypes, IWorkspaceService } from '@adminide-stack/workspaces-server';
import { TYPES as AccountTypes, IOrganizationService } from '@adminide-stack/account-api-server';
import { TYPES as ActivityTypes, IActivityCollector, EActivityScopes, IActivityRecord } from '@adminide-stack/user-activity-server';

import { config } from '../config';

const MANAGER_TICK = 300000; // 5 minutes

@injectable()
export class WorkspaceWatcher {
    public logger: Logger;
    private queue$ = new Subject<string>();
    private tick$ = interval(config.WATCHER_INTERVAL || MANAGER_TICK);

    private status$ = this.queue$
        .pipe(
            flatMap(user => this.organizations.getUserOrganizations(user)),
            flatMap(orgs => from(orgs)),
            flatMap(organization => this.workspaceService.listWorkspaces(organization.id)),
            flatMap(workspaces => from(workspaces)),
            flatMap(workspace => this.shutdownd(workspace)),
        );

    constructor(
        @inject('Logger') logger: Logger,

        @inject(WorkspaceTypes.IWorkspaceService)
        private workspaceService: IWorkspaceService,

        @inject(AccountTypes.IOrganizationService)
        private organizations: IOrganizationService,

        @inject(ActivityTypes.ActivityCollector)
        private activityCollector: IActivityCollector,
    ) {
        this.handler = this.handler.bind(this);
        this.shutdownd = this.shutdownd.bind(this);

        this.logger = logger.child({ className: WorkspaceWatcher });

        this.tick$.subscribe(this.handler);
        this.status$.subscribe((data) => console.log('Status tick: ', data));
    }

    public async handler(...args) {
        this.logger.info('Tick: %s', ...args);

        const inactive: IActivityRecord[] = await this.activityCollector.inactive(EActivityScopes.User);

        _.map(inactive, record => this.queue$.next(record.target));
    }

    public async shutdownd(workspace: IWorkspace) {
        this.logger.info('Stopping workspaces %s', workspace.id);
        return this.workspaceService.stopWorkspace({ id: workspace.id, requestedUserId: 'activity' });
    }
}
