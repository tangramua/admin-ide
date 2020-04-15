import { get } from "lodash";
import { Registry } from "../../services/Registry";
import { RegistryManagement } from "../../services/RegistryManagement";

export interface DockerModuleContext { 
    user: any;
    dockerRegistry: Registry;
    dockerRegistryManager: RegistryManagement;
}

export const resolvers = () => ({
    Query: {
        dockerCatalog: (root, args, { dataSources }) =>
            dataSources.registry.registry(),
        imageTags: (root, { image }, { dataSources }) =>
            dataSources.registry.imageTags(image),
        dockerImages: (root, args, { dataSources }) =>
            dataSources.registry.containers(),
        dockerSearch: (root, { request }, { dataSources }) =>
            dataSources.registry.search(request),

        allDockerRegistries: (root, args, context: DockerModuleContext) => {
            const owner_id = get(context.user, 'sub');
            return context.dockerRegistryManager.list(owner_id);
        },

        dockerRegistryImageTags: async (root, { registry, image }, context: DockerModuleContext) => {
            const obj = await context.dockerRegistryManager.find(registry);
            return context.dockerRegistry.imageTags(obj.url, image);
        },

        dockerRegistryCatalog: async (root, { registry }, context: DockerModuleContext) => {
            const obj = await context.dockerRegistryManager.find(registry);
            try {
                return context.dockerRegistry.registry(obj.url);
            } catch (e) {
                console.log('Catch error:', e);
                return { repositories: [] };
            }
        },

        getDockerRegistry: (root, { _id }, context: DockerModuleContext) => {
            return context.dockerRegistryManager.find(_id);
        },

        testDockerRegistry: (root, { payload }, { dockerRegistryManager }: DockerModuleContext) =>
            dockerRegistryManager.test(payload),
    },

    Mutation: {
        createDockerRegistry: (root, { payload }, { dockerRegistry, dockerRegistryManager, user }: DockerModuleContext) =>
            dockerRegistryManager.create({ ...payload, owner_id: user.sub }),
        updateDockerRegistry: (root, { _id, payload }, { dockerRegistry, dockerRegistryManager }: DockerModuleContext) =>
            dockerRegistryManager.update(_id, payload),
        removeDockerRegistry: (root, { _id }, { dockerRegistry, dockerRegistryManager }: DockerModuleContext) =>
            dockerRegistryManager.remove(_id),
    },
});
