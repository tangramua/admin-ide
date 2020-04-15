export const queries = {
    IMAGE_TAGS: require('./registry/imageTags.gql'),
    REGISTRY_CATALOG: require('./registry.gql'),

    REGISTRY_IMAGE_TAGS: require('./registry/imageTags.gql'),
    ALL_REGISTRY_IMAGES: require('./registry/registryImages.gql'),
    ALL_DOCKER_REGISTRIES: require('./registry/allRegistries.gql'),
};

export const mutations = {
    REMOVE_DOCKER_REGISTRY: require('./registry/removeDockerRegistry.gql'),
    CREATE_DOCKER_REGISTRY: require('./registry/createDockerRegistry.gql'),
    UPDATE_DOCKER_REGISTRY: require('./registry/updateDockerRegistry.gql'),
};
