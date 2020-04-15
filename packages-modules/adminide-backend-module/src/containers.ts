import { TaggedType } from '@common-stack/core';
import { ContainerModule, interfaces, Container } from 'inversify';

import { Types } from './constants';
import { IResourceService, IPrometheusService } from './interfaces';
import { ResourcesLocalService, ResourcesMicroService, PrometheusLocalService, PrometheusMicroService, WorkspaceWatcher, BillingSchedulerLocalService } from './services';

export const adminideModule: (settings: any, pubsub?) => interfaces.ContainerModule =
    (settings) => new ContainerModule((bind: interfaces.Bind) => {
        bind<IResourceService>(Types.ResourcesService)
            .to(ResourcesLocalService)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<IPrometheusService>(Types.PrometheusService)
            .to(PrometheusLocalService)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<WorkspaceWatcher>(Types.WorkspaceWatcher)
            .to(WorkspaceWatcher)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<any>(Types.BillingWatcher)
            .to(BillingSchedulerLocalService)
            .inSingletonScope()
            .whenTargetIsDefault();
    });

export const adminideModuleNats: (settings: any, pubsub?: any) => interfaces.ContainerModule =
    settings =>
        new ContainerModule((bind: interfaces.Bind) => {
            bind<IResourceService>(Types.ResourcesService)
                .to(ResourcesMicroService)
                .inSingletonScope()
                .whenTargetNamed(TaggedType.MICROSERVICE);

            bind<IPrometheusService>(Types.PrometheusService)
                .to(PrometheusMicroService)
                .inSingletonScope()
                .whenTargetNamed(TaggedType.MICROSERVICE);

            bind<WorkspaceWatcher>(Types.WorkspaceWatcher)
                .to(WorkspaceWatcher)
                .inSingletonScope()
                .whenTargetNamed(TaggedType.MICROSERVICE);

            bind<any>(Types.BillingWatcher)
                .to(BillingSchedulerLocalService)
                .inSingletonScope()
                .whenTargetIsDefault();
        });
