

export enum StackType {
    IDE_STACK = 'IDE_STACK',
    CUSTOM_STACK = 'CUSTOM_STACK',
    MONOCULAR_STACK = 'MONOCULAR_STACK',
}

/**
 * Various Source Providers for Projects Source.
 */
export enum ProjectSourceProviders {
    GITHUB = 'GITHUB',
    BITBUCKET = 'BITBUCKET',
    GITLAB = 'GITLAB',
    VSTS = 'VSTS',
    NONE = 'NONE',
}

/**
 * Various types of sources.
 */
export enum ProjectSourceType {
    GIT = 'GIT',
    BLANK = 'BLANK',
    ZIP = 'ZIP',
}

// TODO
export interface IUserProjectDetails {
    privateKey?: string;
    username?: string;
    email?: string;
}

// TODO
export interface IProjectUsersParams {
    usernaame: string;
    email: string;
}

export interface IUserProjectSecrets {
    keys: {
        GLOBAL__KEY?: string;
    };
    tokens: {
        GITHUB_TOKEN?: string;
        GITLAB_TOKEN?: string;
        BITBUCKET_TOKEN?: string;
        VSTS_TOKEN?: string;
    };
}

type GitType = keyof typeof ProjectSourceProviders;

// TODO
export interface IUserProjectResource {
    [key: string]: IUserProjectDetails;
}



export enum InactivityInterval {
    Hour = 60,
    Day = 1440,
    Never = -1,
    Week = 10080,
    HalfHour = 30,
    FourHours = 240,
}


export interface IGiturlCreateRequest {
    gitUrl: string;
}

/**
 * @description
 * WorkspaceStatus: Different status the workspace can be on.
 *
 * @constant
 * WORSPACE_STATUS_DISCONNECTED: When the workspace is disconnected when it was connected prior by the user.
 * @constant
 * WORKSPACE_STATUS_CONNECTED: When the workspace is currently used by the user.
 * @constant
 * WORKSPACE_STATUS_PENDING: Pending state of workspace. Could be anything.
 * @constant
 * WORKSPACE_STATUS_CREATING: Pending state when workspace is being created.
 * @constant
 * WORKSPACE_STATUS_CREATED: A new workspace created.
 */
export enum WorkspaceStatus {
    WORKSPACE_STATUS_DISCONNECTED = 'WORKSPACE_STATUS_DISCONNECTED',
    WORKSPACE_STATUS_CONNECTED = 'WORKSPACE_STATUS_CONNECTED',
    WORKSPACE_STATUS_PENDING = 'WORKSPACE_STATUS_PENDING',
    WORKSPACE_STATUS_CREATING = 'WORKSPACE_STATUS_CREATING',
    WORKSPACE_STATUS_CREATED = 'WORKSPACE_STATUS_CREATED',
    WORKSPACE_STATUS_REMOVING = 'WORKSPACE_STATUS_REMOVING',
    WORKSPACE_STATUS_REMOVED = 'WORKSPACE_STATUS_REMOVED',
    WORKSPACE_STATUS_DISABLED = 'WORKSPACE_STATUS_DISABLED',
    WORKSPACE_STATUS_STOPPING = 'WORKSPACE_STATUS_STOPPING',
    WORKSPACE_STATUS_STOPPED = 'WORKSPACE_STATUS_STOPPED',
    WORKSPACE_STATUS_UPDATING = 'WORKSPACE_STATUS_UPDATING',
    WORKSPACE_STATUS_ACTIVE = 'WORKSPACE_STATUS_ACTIVE',
    WORKSPACE_STATUS_STARTING = 'WORKSPACE_STATUS_STARTING',
    WORKSPACE_STATUS_STARTED = 'WORKSPACE_STATUS_STARTED',
    WORKSPACE_STATUS_ERRORED = 'WORKSPACE_STATUS_ERRORED',
    WORKSPACE_STATUS_FAILURE = 'WORKSPACE_STATUS_FAILURE',
    WORKSPACE_STATUS_ABANDONED = 'WORKSPACE_STATUS_ABANDONED',
    WORKSPACE_STATUS_INACTIVE = 'WORKSPACE_STATUS_INACTIVE',
}

export enum WorkspaceServerEvents {
    WORKSPACE_CREATED_EVENT = 'WORKSPACE_CREATED_EVENT',
    WORKSPACE_REMOVED_EVENT = 'WORKSPACE_REMOVED_EVENT',
    WORKSPACE_STARTED_EVENT = 'WORKSPACE_STARTED_EVENT',
    WORKSPACE_STOPPED_EVENT = 'WORKSPACE_STOPPED_EVENT',
    WORKSPACE_UPDATED_EVENT = 'WORKSPACE_UPDATED_EVENT',
}

export enum WorkspaceDeploymentCommands {
    CREATE_WORKSPACE = 'CREATE_WORKSPACE',
    REMOVE_WORKSPACE = 'REMOVE_WORKSPACE',
    START_WORKSPACE = 'START_WORKSPACE',
    STOP_WORKSPACE = 'STOP_WORKSPACE',
    UPDATE_WORKSPACE = 'UPDATE_WORKSPACE',
}

export enum WorkspaceServiceCommands {
    GET_NAMESPACES = 'GET_NAMESPACES',
    CREATE_WORKSPACE = 'CREATE_WORKSPACE',
    REMOVE_WORKSPACE = 'REMOVE_WORKSPACE',
    START_WORKSPACE = 'START_WORKSPACE',
    STOP_WORKSPACE = 'STOP_WORKSPACE',
    UPDATE_WORKSPACE = 'UPDATE_WORKSPACE',

    ADD_STACKS_TO_WORKSPACE = 'ADD_STACKS_TO_WORKSPACE',
    ADD_PROJECT_TO_WORKSPACE = 'ADD_PROJECT_TO_WORKSPACE',
}
