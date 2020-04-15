import { interfaces } from 'inversify';
import { TaggedType } from '@common-stack/core';
import { Feature } from '@common-stack/server-core';

import { schema } from './schema';
import { resolver } from './resolvers';
import { IMonocularService } from './interfaces';
import { TYPES as MonocularTypes } from './constants';
import { MonocularApi } from './data-sources/monocular';
import { LocalMonocularApi } from './services/monocular-localservice';
import { monocularNatsModule, monocularServerCoreModule } from './container';

// const dockerServiceGen = (container: interfaces.Container) => ({
//     dockerRegistry: container.get(Types.UniversalRegistryService),
//     dockerRegistryManager: container.get(Types.RegistryManagement),
// });

const adminServiceGen = (container: interfaces.Container) => {
    const environment = container.get('Environment');
    if (environment === 'development') {
        return {
            monocularRegistry: container.get(MonocularTypes.UniversalMonocularRegistryService),
            monocularService: container.get<IMonocularService>(MonocularTypes.IMonocularService),
            monocularRegistryManager: container.get(MonocularTypes.MonocularRegistryManagement),
        };
    } else {
        return {
            monocularRegistry: container.get(MonocularTypes.UniversalMonocularRegistryService),
            monocularRegistryManager: container.get(MonocularTypes.MonocularRegistryManagement),
            monocularService: container.getNamed<IMonocularService>(MonocularTypes.IMonocularService, TaggedType.MICROSERVICE),
        };
    }
};
export default new Feature({
    schema: schema,
    createContainerFunc: [
        monocularNatsModule,
        monocularServerCoreModule,
    ],
    createDataSourceFunc: () => ({
        monocular: new MonocularApi(),
    }),
    createResolversFunc: resolver,
    createServiceFunc: adminServiceGen,
});
