import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { interval } from 'rxjs';
import { inject, injectable } from 'inversify';
import { TYPES as WorkspacesServerTypes, IWorkspaceService } from '@adminide-stack/workspaces-server';
import { TYPES as ActivityServerTypes, IActivityCollector } from '@adminide-stack/user-activity-server';

import { Types, DEFAULT_INTERVAL, WORKSPACE_RESOURCE_QUERY } from '../constants';
import { IResourceServiceSettings, IResourceService } from '../interfaces';
import { IPrometheusService } from '../interfaces/IPrometheusService';
import { config } from '../config';

@injectable()
export class ResourcesLocalService implements IResourceService {
    public logger: Logger;
    public activity: IActivityCollector;
    public workspaces: IWorkspaceService;
    public prometheus: IPrometheusService;
    public settings: IResourceServiceSettings;

    private tick$ = interval(config.UTILIZATION_INTERVAL || DEFAULT_INTERVAL);

    constructor(
        @inject('Logger') logger: Logger,
        @inject(Types.PrometheusService) prometheus,
        @inject(ActivityServerTypes.ActivityCollector) activityService,
        @inject(WorkspacesServerTypes.IWorkspaceService) workspaceService,
    ) {
        this.prometheus = prometheus;
        this.activity = activityService;
        this.workspaces = workspaceService;

        this.scan = this.scan.bind(this);

        this.logger = logger.child({ className: ResourcesLocalService });

        this.tick$.subscribe(this.scan);
    }

    public async collect(namespace) {
        const response = await this.prometheus.query(WORKSPACE_RESOURCE_QUERY(namespace));
        this.logger.info('Response for %s namespace: [%o]', namespace, response);

        const ok = await this.activity.cluster({ key: namespace, timestamp: Date.now(), payload: response } as any);

        return { namespace, response };
    }

    public async scan() {
        const namespaces = await this.workspaces.getNamespaces();

        this.logger.info('Fetched namespaces: %s', namespaces);

        _.each(namespaces, ns =>
            this.collect(ns).catch(err => this.logger.error('Cannot fetch info for %s: [%o]', ns, err)));

        return true;
    }
}
