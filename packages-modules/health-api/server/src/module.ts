import { interfaces } from 'inversify';
import { Feature } from '@common-stack/server-core';

import { TYPES } from './constants';
import { schema, resolver } from './schema';
import { IHealthService } from './interfaces';
import { TaggedType } from '@common-stack/core';
import {  healthNatsModule, healthServerCoreModule } from './containers';

const adminServiceGen = (container: interfaces.Container) => {
    const environment = container.get('Environment');
    if (environment === 'development') {
        return { healthService: container.get<IHealthService>(TYPES.IHeathService) };
    } else {
        return { healthService: container.getNamed<IHealthService>(TYPES.IHeathService, TaggedType.MICROSERVICE) };
    }
};

export default new Feature({
    schema,
    createResolversFunc: resolver,
    createServiceFunc: adminServiceGen,
    createContainerFunc: [healthNatsModule, healthServerCoreModule],
});

