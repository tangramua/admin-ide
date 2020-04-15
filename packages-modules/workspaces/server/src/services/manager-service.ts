import * as ILogger from 'bunyan';
import {
    WorkspaceStatus, IStack,
    IWorkspace, WorkspaceServerEvents,
} from '@adminide-stack/core';
import { injectable, inject } from 'inversify';
import { PubSubEngine } from 'graphql-subscriptions';

import {
    EWorkspaceManagementQProps,
    IWorkspaceService, IWorkspaceRepository,
    IManagerRepository, IWorkspacesListQuery,
} from '../interfaces';
import { TYPES } from '../constants';

@injectable()
export class ManagerService implements IManagerRepository {
    private logger: ILogger;

    constructor(
        @inject('Logger') logger: ILogger,
        @inject(TYPES.ManagerRepository) private repository: IManagerRepository,
    ) {
        this.logger = logger.child({ className: ManagerService });
    }

    public async fetch(q?: IWorkspacesListQuery, props?: EWorkspaceManagementQProps[]) {
        this.logger.info('Exec %o query with fetching %o props', q, props);
        return this.repository.fetch(q, props);
    }

    public async list(q?: IWorkspacesListQuery) {
        this.logger.info('Qyerying workspaces %o', q);
        return this.repository.list(q);
    }
}
