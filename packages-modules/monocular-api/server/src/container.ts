import { TaggedType } from '@common-stack/core';
import { ContainerModule, interfaces } from 'inversify';

import { IMonocularService } from './interfaces';
import { TYPES as MonocularTypes } from './constants';
import { LocalMonocularApi, MicroserviceMonocularApi, RegistryManagement, Monocular } from './services';
import { PublicMonocularRegistriesMigration } from './migrations/PublicRegistries';

export const monocularServerCoreModule: (settings: any) => interfaces.ContainerModule =
    (settings: any) => new ContainerModule((bind: interfaces.Bind) => {
        bind<PublicMonocularRegistriesMigration>('MongodbMigration')
            .to(PublicMonocularRegistriesMigration).whenTargetNamed(PublicMonocularRegistriesMigration.name);

        bind<any>(MonocularTypes.UniversalMonocularRegistryService).to(Monocular);
        bind<any>(MonocularTypes.MonocularRegistryManagement).to(RegistryManagement);

        // Monocular
        bind<IMonocularService>(MonocularTypes.IMonocularService)
            .to(LocalMonocularApi)
            .inSingletonScope()
            .whenTargetIsDefault();
    });

export const monocularNatsModule: (settings: any) => interfaces.ContainerModule =
    (settings) => new ContainerModule((bind: interfaces.Bind) => {
        bind<IMonocularService>(MonocularTypes.IMonocularService)
            .to(MicroserviceMonocularApi)
            .whenTargetNamed(TaggedType.MICROSERVICE);
    });
