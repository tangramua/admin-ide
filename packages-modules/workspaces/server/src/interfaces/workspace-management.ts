import { IWorkspace } from '@adminide-stack/core';

export interface IWorkspacesListQuery {
    id?: string[];
    status?: string[];
    namespace?: string[];
    organization?: string[];
}

export enum EWorkspaceManagementQProps {
    Id = '_id',
    Spec = 'spec',
    Status = 'status',
    Organization = 'orgId',
    Namespace = 'namespace',
}

export interface IAbstractWorkspaceManager {
    /** Querying workspaces for activity tracking, billing, administrative management */
    list(query?: IWorkspacesListQuery): Promise<IWorkspace[]>;

    /** Querying needed workspace props - ids, statuses, organizations, namespaces */
    fetch(query?: IWorkspacesListQuery, props?: EWorkspaceManagementQProps[]): Promise<any>;
}

export interface IManagerService extends IAbstractWorkspaceManager {}
export interface IManagerRepository extends IAbstractWorkspaceManager {}
