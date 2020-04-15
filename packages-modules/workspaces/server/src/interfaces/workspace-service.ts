import {
    IWorkspace, IWorkspaceCreate_Input, IWorkspaceRemove_Input,
    IWorkspaceUpdate_Input,
    IWorkspaceConfigUpdate_Input,
    IWorkspaceMetadata,
    IWorkspaceStop_Input,
    IWorkspaceStart_Input,
    IProject_Input,
    IStack,
} from '@adminide-stack/core';

export interface IUserMetadata {
    secrets?: any;
    projects?: any;
}
export interface IWorkspaceService {

    /**
     * Get Workspace
     */
    getWorkspace(workspaceId: string): Promise<IWorkspace> | null;
    /**
     * Get all namespaces
     */
    getNamespaces(): Promise<string[]> | null;
    /**
     * Create workspace
     */
    createWorkspace(workspace: IWorkspaceCreate_Input, userMetadata?: IUserMetadata): Promise<IWorkspace>;
    /**
     * Set environment variables
     */
    setEnvVariables(request: any, userMetadata?: IUserMetadata): Promise<boolean>;
    /**
     * Updates a existing workspace
     */
    updateWorkspace(workspace: IWorkspaceUpdate_Input, userMetadata?: IUserMetadata): Promise<IWorkspace>;
    /**
     * Updates a existing workspace configuration
     */
    updateWorkspaceConfig(workspace: IWorkspaceConfigUpdate_Input, userMetadata?: IUserMetadata): Promise<IWorkspace>;
    /**
     * Removes a existing workspace
     */
    removeWorkspace(workspace: IWorkspaceRemove_Input, userMetadata?: IUserMetadata): Promise<boolean>;
    /**
     * Start workspace
     */
    startWorkspace(request: IWorkspaceStart_Input, userMetadata?: IUserMetadata): Promise<IWorkspace>;
    /**
     * Stop workspace
     */
    stopWorkspace(request: IWorkspaceStop_Input, userMetadata?: IUserMetadata): Promise<IWorkspace>;
    /**
     * List workspaces
     */
    listWorkspaces(orgId: string): Promise<IWorkspace[]> | null;
    /**
     * Add Project to workspace
     */
    addProject(workspaceId: string, project: IProject_Input): Promise<IWorkspace>;
    /**
     * Add Stacks to workspace
     */
    addStacks(workspaceId: string, stacks: IStack[]): Promise<IWorkspace>;
}
