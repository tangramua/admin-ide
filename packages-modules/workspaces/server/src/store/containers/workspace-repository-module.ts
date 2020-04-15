import { TaggedType } from '@common-stack/core';
import { ContainerModule, interfaces } from 'inversify';
import { IMongoDBSettings } from '@common-stack/store-mongo';

import { TYPES } from '../../constants';
import { WorkspaceRepository, ManagerRepository } from '../repository';
import { IWorkspaceRepository, IManagerRepository } from '../../interfaces';

export const workspaceRepositoryModule: (dbConfig: IMongoDBSettings) => interfaces.ContainerModule =
    (settings: IMongoDBSettings) => new ContainerModule((bind: interfaces.Bind) => {
        bind<IWorkspaceRepository>(TYPES.IWorkspaceRepository)
            .to(WorkspaceRepository);

        bind<IManagerRepository>(TYPES.ManagerRepository)
            .to(ManagerRepository);
    });

