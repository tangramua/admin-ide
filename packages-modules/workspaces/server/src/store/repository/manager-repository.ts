import * as _ from 'lodash';
import * as Logger from 'bunyan';
import * as mongoose from 'mongoose';
import { injectable, inject, optional } from 'inversify';
import { IMongoOptions } from '@common-stack/store-mongo';
import { IStack, IWorkspace } from '@adminide-stack/core';

import { WorkspaceModelFunc, IWorkspaceModel, WorkspaceModelType } from '../models';
import { IWorkspaceRepository, IManagerRepository, IWorkspacesListQuery, EWorkspaceManagementQProps } from '../../interfaces';

@injectable()
export class ManagerRepository implements IManagerRepository {
    private logger: Logger;
    private options: IMongoOptions;
    private model: WorkspaceModelType;

    constructor(
        @inject('Logger') logger: Logger,
        @inject('MongoDBConnection') db: mongoose.Connection,
        @inject('IMongoOptions') @optional() options?: IMongoOptions,
    ) {
        this.model = WorkspaceModelFunc(db);
        this.logger = logger.child({ className: ManagerRepository });
    }

    public static query(q: IWorkspacesListQuery = {}) {
        return _
            .map(q, (value, key) => ({ key, q: { $in: value } }))
            .reduce((acc, record) => ({ ...acc, [record.key]: record.q }), {});
    }

    public static props(props: EWorkspaceManagementQProps[] = []) {
        return _.reduce(props, (acc, prop) => ({ ...acc, [prop]: 1 }), {});
    }

    public async list(q?: IWorkspacesListQuery) {
        return this.model.find(ManagerRepository.query(q));
    }

    public async fetch(q?: IWorkspacesListQuery, props?: EWorkspaceManagementQProps[]) {
        const result = await this.model.find(ManagerRepository.query(q), ManagerRepository.props(props));

        if (props.length === 1) {
            return _.map(result, props[0]);
        }

        return result;
    }
}
