import { interfaces } from 'inversify';
import { Feature } from '@common-stack/server-core';
import { TYPES as workspaceTypes } from './constants';
import { IWorkspaceRepository, IWorkspaceService } from './interfaces';
import { WorkspaceLocalservice } from './services';
import { workspaceNatsModule, adminideServerCoreModule } from './containers';
import { schema, resolver, workspaceDirectives } from './graphql';
import { workspaceRepositoryModule } from './store';
import { TaggedType } from '@common-stack/core';

const adminServiceGen = (container: interfaces.Container) => {
    const environment = container.get('Environment');
    if (environment === 'development') {
        return { workspaceService: container.get<IWorkspaceService>(workspaceTypes.IWorkspaceMicroservice) };
    } else {
        return { workspaceService: container.getNamed<IWorkspaceService>(workspaceTypes.IWorkspaceMicroservice, TaggedType.MICROSERVICE) };
    }
};

export default new Feature({
    createDirectivesFunc: workspaceDirectives,
    createContainerFunc: [adminideServerCoreModule, workspaceNatsModule, workspaceRepositoryModule],
    createResolversFunc: resolver,
    schema,
    createServiceFunc: adminServiceGen,
});

