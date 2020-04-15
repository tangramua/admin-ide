import { IWorkspaceService, IWorkspaceRepository } from '../interfaces';
import {
    IWorkspaceCreate_Input, IWorkspace, IWorkspaceConfigUpdate_Input,
    IWorkspaceUpdate_Input, IWorkspaceRemove_Input, WorkspaceServerEvents,
    WorkspaceStatus, IWorkspaceStop_Input, IWorkspaceStart_Input, IProject_Input, IStack,
} from '@adminide-stack/core';
import { TYPES } from '../constants';

import * as ILogger from 'bunyan';
import { injectable, inject } from 'inversify';
import { PubSubEngine } from 'graphql-subscriptions';

@injectable()
export class WorkspaceService implements IWorkspaceService {

    private logger: ILogger;

    constructor(
        @inject(TYPES.IWorkspaceRepository)
        private workspaceRepository: IWorkspaceRepository,

        @inject('Logger')
        logger: ILogger,
    ) {
        this.logger = logger.child({ className: WorkspaceService });
    }


    public async getWorkspace(workspaceId: string) {
        return await this.workspaceRepository.findWorkspaceById(workspaceId);
    }

    public async getNamespaces() {
        return await this.workspaceRepository.getNamespaces();
    }

    public async setEnvVariables(request: any) {
        return await this.workspaceRepository.setWorkspaceEnvVariables(request);
    }

    public async listWorkspaces(orgId: string) {
        const workspaces = this.workspaceRepository.list(orgId);
        return workspaces;
    }

    public async addProject(workspaceId: string, project: IProject_Input) {
        this.logger.info(`adding project %o to workspace %s`, project, workspaceId);
        const ok = await this.workspaceRepository.addProject(workspaceId, project);
        this.logger.info(`operation result %o`, ok);
        return ok;
    }

    public async addStacks(workspaceId: string, stacks: IStack[]) {
        return this.workspaceRepository.addStacks(workspaceId, stacks);
    }

    public async updateWorkspaceConfig(config) {
        // throw new Error('This function need to be implemented');
        return null;
    }
    public async createWorkspace(request: IWorkspaceCreate_Input): Promise<IWorkspace> {
        this.logger.debug('createWorksapce request: [%j]', request);
        const workspace = await this.workspaceRepository.createWorkspace(request);
        return workspace;
    }

    public async updateWorkspace(request: IWorkspaceUpdate_Input): Promise<IWorkspace> {
        const workspace = await this.workspaceRepository.updateWorkspace(request);
        return workspace;
    }

    public async removeWorkspace(request: IWorkspaceRemove_Input): Promise<any> {
        const workspace = await this.workspaceRepository.updateWorkspace({
            id: request.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_REMOVING,
        } as any);
        return workspace;
    }

    public async startWorkspace(request: IWorkspaceStart_Input) {
        const workspace = await this.workspaceRepository.updateWorkspace({
            id: request.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_STARTING,
        });
        return workspace;
    }

    public async stopWorkspace(request: IWorkspaceStop_Input) {
        const workspace = await this.workspaceRepository.updateWorkspace({
            id: request.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_STOPPING,
        });
        return workspace;
    }

}
