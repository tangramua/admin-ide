import { interfaces } from 'inversify';
import { TaggedType } from '@common-stack/core';
import { Feature } from '@common-stack/server-core';

import { ETypes } from './constants';
import { billingStoreModule } from './store';
import { IBillingService } from './interfaces';
import { billingModule, billingModuleNats } from './container';

export * from './constants';
export * from './interfaces';

const billingServicesFunc = (container: interfaces.Container) => {
    const environment = container.get('Environment');
    if (environment === 'development') {
        return { billingService: container.get<IBillingService>(ETypes.BillingService) };
    } else {
        return { billingService: container.getNamed<IBillingService>(ETypes.BillingService, TaggedType.MICROSERVICE) };
    }
};

export default new Feature({
    createServiceFunc: billingServicesFunc,
    createContainerFunc: [billingModule, billingModuleNats, billingStoreModule],
});
