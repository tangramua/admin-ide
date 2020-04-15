import * as _ from 'lodash';
import { interfaces } from 'inversify';
import { Feature } from '@common-stack/server-core';

import { moduleFunc } from './containers';
import { RegistryService } from './services';
import { createResolversFunc, schema } from './schema';
import { Types } from './constants';

const dockerServiceGen = (container: interfaces.Container) => ({
    dockerRegistry: container.get(Types.UniversalRegistryService),
    dockerRegistryManager: container.get(Types.RegistryManagement),
});

export default new Feature({
    schema,
    createResolversFunc,
    createServiceFunc: dockerServiceGen,
    createDataSourceFunc: () => ({
        registry: new RegistryService,
    }),
    createContainerFunc: [moduleFunc],
});
