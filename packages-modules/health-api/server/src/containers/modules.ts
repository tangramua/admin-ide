import { TaggedType } from '@common-stack/core';
import { ContainerModule, interfaces } from 'inversify';

import { TYPES } from '../constants';
import { IHealthService } from '../interfaces';
import { HealthLocalService, HealthMicroService } from '../services';

export const healthServerCoreModule: (settings: any) => interfaces.ContainerModule =
    (settings: any) => new ContainerModule((bind: interfaces.Bind) => {

        // health service
        bind<IHealthService>(TYPES.IHeathService)
            .to(HealthLocalService)
            .inSingletonScope()
            .whenTargetIsDefault();
    });



export const healthNatsModule: (settings: any) => interfaces.ContainerModule =
    (settings) => new ContainerModule((bind: interfaces.Bind) => {
        bind<IHealthService>(TYPES.IHeathService)
            .to(HealthMicroService)
            .whenTargetNamed(TaggedType.MICROSERVICE);
    });
