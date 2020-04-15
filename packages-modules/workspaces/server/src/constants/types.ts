export const TYPES = {
    ManagerService: Symbol('ManagerService'),
    ManagerRepository: Symbol('ManagerRepository'),

    IWorkspaceService: Symbol('IWorkspaceService'),
    IWorkspaceRepository: Symbol('IWorkspaceRepository'),
    IWorkspacePostService: Symbol('IWorkspacePostService'),
    IWorkspaceMicroservice: Symbol('IWorkspaceMicroservice'),
};

export const DEFAULT_GCE_ZONE = 'us-central1';
export const DEFAULT_GCE_MACHINE = 'n1-standard-1';
