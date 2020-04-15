import * as _ from 'lodash';
import { interfaces } from 'inversify';
import { TaggedType } from '@common-stack/core';
import { Feature } from '@common-stack/server-core';
import BillingApi from '@adminide-stack/billing-api-server';

import { config } from './config';
import { Types } from './constants';
import { IResourceService } from './interfaces';
import { adminideModule, adminideModuleNats } from './containers';

const createResourcesServiceFunc = (container: interfaces.Container) => {
    const environment = container.get('Environment');
    if (environment === 'development') {
        return {
            billingWatcher: container.get<any>(Types.BillingWatcher),
            workspaceWatcher: container.get<any>(Types.WorkspaceWatcher),
            resourcesService: container.get<IResourceService>(Types.ResourcesService),
        };
    } else {
        return {
            resourcesService: container.getNamed<IResourceService>(Types.ResourcesService, TaggedType.MICROSERVICE),
        };
    }
};


export default new Feature({
    createServiceFunc: createResourcesServiceFunc,
    createContainerFunc: config.isDevelopment
        ? [adminideModule]
        : [adminideModule, adminideModuleNats],
}, BillingApi);
