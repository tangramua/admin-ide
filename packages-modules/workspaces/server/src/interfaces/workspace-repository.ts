import {
  IWorkspace, IWorkspaceCreate_Input,
  IWorkspaceUpdate_Input, IWorkspaceRemove_Input,
  IWorkspaceConfigUpdate_Input,
  IWorkspaceVariables_Input,
  IProject_Input,
  IStack,
} from '@adminide-stack/core';
/**
 * Repository for Workspace, preferbly No Sql
 */
export interface IWorkspaceRepository {
    /**
     * Creates a new workspace
     */
    createWorkspace(workspace: IWorkspaceCreate_Input): Promise<IWorkspace>;
    /**
     * Get all namespaces
     */
    getNamespaces(): Promise<string[]> | null;
    /**
     * Set environment variables for workspace
     */
    setWorkspaceEnvVariables(request: IWorkspaceVariables_Input): Promise<boolean>;
    /**
     * Updates a existing workspace
     */
    updateWorkspace(workspace: IWorkspaceUpdate_Input): Promise<IWorkspace>;
    /**
     * Updates a existing workspace configuration
     */
    updateWorkspaceConfig(workspace: IWorkspaceConfigUpdate_Input): Promise<IWorkspace>;
    /**
     * Removes a existing workspace
     */
    deleteWorkspace(workspace: IWorkspaceRemove_Input): Promise<boolean>;
    /**
     * Find a workspace
     */
    findWorkspaceById(id: string): Promise<IWorkspace>;
    /**
     * Info of a workspace
     */
    info(id: string): Promise<IWorkspace>;
    /**
     * Sends list of workspaces
     */
    list(ownerId: string): Promise<Array<IWorkspace>>;
    /**
     * Sends top list of workspaces
     */
    top(ownerId: string, limit?: number): Promise<Array<IWorkspace>>;
    /**
     * Sends available workspaces
     */
    available(): Promise<IWorkspace>;
    /**
     * Add Project to workspace
     */
    addProject(workspaceId: string, project: IProject_Input): Promise<IWorkspace>;
    /**
     * Add Stacks to workspace
     */
    addStacks(workspaceId: string, stacks: IStack[]): Promise<IWorkspace>;
}


