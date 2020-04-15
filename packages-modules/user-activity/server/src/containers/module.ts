import { TaggedType } from '@common-stack/core';
import { ContainerModule, interfaces, Container } from 'inversify';

import { TYPES } from '../constants';
import { IActivityCollector } from '../interfaces';
import { ActivityService, ActivityZipkinService } from '../services';

import { ZipkinStorage } from '../storage/Zipkin';

export const activityModule: (settings: any, pubsub?) => interfaces.ContainerModule =
    (settings) => new ContainerModule((bind: interfaces.Bind) => {
        bind(TYPES.ActivityStorage).to(ZipkinStorage).inSingletonScope();
        bind(TYPES.ActivityDBConnection).toConstantValue(settings.mongoConnection);

        bind<IActivityCollector>(TYPES.ActivityCollector)
            .to(ActivityZipkinService as any)
            .inSingletonScope()
            .whenTargetIsDefault();
    });

export const activityModuleNats: (settings: any, pubsub?: any) => interfaces.ContainerModule =
    settings =>
    new ContainerModule((bind: interfaces.Bind) => {
        // bind(TYPES.ActivityStorage).to(ZipkinStorage);
        // bind(TYPES.ActivityDBConnection).toConstantValue(settings.mongoConnection);

        bind<IActivityCollector>(TYPES.ActivityCollector)
            .to(ActivityZipkinService as any)
            .inSingletonScope()
            .whenTargetNamed(TaggedType.MICROSERVICE);
    });
