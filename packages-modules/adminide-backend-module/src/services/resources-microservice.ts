import * as _ from 'lodash';
import * as Logger from 'bunyan';
import Hemera from 'nats-hemera';
import { Observable } from 'rxjs';
import { inject, injectable, tagged } from 'inversify';
import { TYPES as WorkspacesServerTypes } from '@adminide-stack/workspaces-server';
import { WorkspaceServiceCommands, NATS_HEMERA_ADMINIDE_WORKSPACE_UPDATER } from '@adminide-stack/core';
import {
    TYPES as ActivityServerTypes,
    HemeraTopics as ActivityHemeraTopics,
    HemeraCommands as ActivityHemeraCommands,
    EActivityScopes,
} from '@adminide-stack/user-activity-server';

import { IResourceServiceSettings, IResourceService } from '../interfaces';
import { Types, DEFAULT_INTERVAL, HemeraTopics, HemeraCmd, WORKSPACE_RESOURCE_QUERY } from '../constants';

@injectable()
export class ResourcesMicroService implements IResourceService {
    public topics: any;
    public logger: Logger;
    public tick$: Observable<number>;
    public settings: IResourceServiceSettings;

    constructor(
        @inject('Logger') logger: Logger,
        @inject('Hemera') private hemera: Hemera<any, any>,
        @inject('Settings') @tagged('microservice', true) settings,
    ) {
        this.topics = {
            Prometheus: `${HemeraTopics.Prometheus}/${settings.subTopic}`,
            Utilization: `${HemeraTopics.Utilization}/${settings.subTopic}`,
            Activity: `${ActivityHemeraTopics.ActivityCollector}/${settings.subTopic}`,
            Workspaces: `${NATS_HEMERA_ADMINIDE_WORKSPACE_UPDATER}/${settings.subTopic}`,
        };
        this.logger = logger.child({ className: ResourcesMicroService });
    }

    public async collect(namespace: string) {
        const { data } = await this.hemera.act({
            cmd: HemeraCmd.Query,
            topic: this.topics.Prometheus,
            query: WORKSPACE_RESOURCE_QUERY(namespace),
        });

        await this.hemera.act({
            key: namespace,
            payload: data,
            timestamp: Date.now(),
            topic: this.topics.Activity,
            scope: EActivityScopes.Cluster,
            cmd: ActivityHemeraCommands.Collect,
        });
    }

    public async scan() {
        const { data } = await this.hemera.act({
            topic: this.topics.Workspaces,
            cmd: WorkspaceServiceCommands.CREATE_WORKSPACE,
        });

        _.map(data, namespace => this.collect(namespace));

        this.logger.info('Fetched namespaces: %s', data);

        return true;
    }
}
