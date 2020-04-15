export const QUERIES = {
    GET_WORKSPACE: require('./queries/workspace.gql'),
    GET_WORKSPACES: require('./queries/workspaces.gql'),
    GET_WORKSPACES_CLIENT: require('./queries/workspaces.client.gql'),
};

export const MUTATIONS = {
    ADD_WORKSPACE: require('./mutations/addWorkspace.gql'),
    STOP_WORKSPACE: require('./mutations/stopWorkspace.gql'),
    ADD_WORKSPACE_STACK: require('./mutations/addStack.gql'),
    START_WORKSPACE: require('./mutations/startWorkspace.gql'),
    ADD_WORKSPACE_PROJECT: require('./mutations/addProject.gql'),
    UDPATE_WORKSPACE: require('./mutations/updateWorkspace.gql'),
    REMOVE_WORKSPACE: require('./mutations/removeWorkspace.gql'),
    SET_WORKSPACE_ENVS: require('./mutations/setEnvVariables.gql'),
};

export const SUBSCRIPTIONS = {
    WORKSPACES_UPDATES: require('./subscriptions/workspaces.gql'),
};
