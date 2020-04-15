import { TaggedType } from '@common-stack/core';
import { ContainerModule, interfaces } from 'inversify';

import { TYPES as workspaceTypes } from '../constants';
import { ManagerService } from '../services/manager-service';
import { IWorkspaceRepository, IWorkspaceService, IManagerService } from '../interfaces';
import { WorkspaceLocalservice, WorkspaceService, WorkspacePostService, WorkspaceMicroservice } from '../services';

export const adminideServerCoreModule: (settings: any) => interfaces.ContainerModule =
    (settings: any) => new ContainerModule((bind: interfaces.Bind) => {

        // workspace
        bind<IWorkspaceService>(workspaceTypes.IWorkspaceMicroservice)
            .to(WorkspaceLocalservice)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<IWorkspaceService>(workspaceTypes.IWorkspaceService)
            .to(WorkspaceService)
            .inSingletonScope();

        bind<IWorkspaceService>(workspaceTypes.IWorkspacePostService)
            .to(WorkspacePostService)
            .inSingletonScope();

        bind<IManagerService>(workspaceTypes.ManagerService)
            .to(ManagerService)
            .inSingletonScope();
    });

export const workspaceNatsModule: (settings: any) => interfaces.ContainerModule =
    (settings) => new ContainerModule((bind: interfaces.Bind) => {
        bind<IWorkspaceService>(workspaceTypes.IWorkspaceMicroservice)
            .to(WorkspaceMicroservice)
            .whenTargetNamed(TaggedType.MICROSERVICE);
    });
