

import { ContainerModule, interfaces } from 'inversify';
import { IMongoDBSettings } from '@common-stack/store-mongo';

import { Types } from '../constants';
import { Registry } from '../services/Registry';
import { RegistryManagement } from '../services/RegistryManagement';
import { PublicDockerRegistriesMigration } from '../migrations';

export const moduleFunc: (settings: any, pubsub) => interfaces.ContainerModule =
    (settings: IMongoDBSettings) => new ContainerModule((bind: interfaces.Bind) => {
        // bind<PublicDockerRegistriesMigration>('MongodbMigration')
        //     .to(PublicDockerRegistriesMigration).whenTargetNamed(PublicDockerRegistriesMigration.name);

        bind<any>(Types.UniversalRegistryService).to(Registry);
        bind<any>(Types.RegistryManagement).to(RegistryManagement);
});

