import { IWorkspaceService, IWorkspaceRepository } from '../interfaces';
import {
    IWorkspaceCreate_Input, IWorkspace, IWorkspaceConfigUpdate_Input,
    IWorkspaceUpdate_Input, IWorkspaceRemove_Input, WorkspaceServerEvents,
    WorkspaceStatus, IWorkspaceStart_Input, IWorkspaceStop_Input, IProject_Input, IStack,
} from '@adminide-stack/core';
import { TYPES } from '../constants';
import { injectable, inject } from 'inversify';
import { PubSubEngine } from 'graphql-subscriptions';
import * as ILogger from 'bunyan';

@injectable()
export class WorkspaceLocalservice implements IWorkspaceService {

    private logger: ILogger;

    constructor(
        @inject(TYPES.IWorkspaceService)
        private workspaceService: IWorkspaceService,

        @inject(TYPES.IWorkspacePostService)
        private workspacePostService: IWorkspaceService,

        @inject(TYPES.IWorkspaceRepository)
        private workspaceRepository: IWorkspaceRepository,

        @inject('PubSub')
        private pubsub: PubSubEngine,

        @inject('Logger')
        logger: ILogger,
    ) {
        this.logger = logger.child({ className: WorkspaceLocalservice });
    }


    public async getWorkspace(workspaceId: string) {
        return await this.workspaceService.getWorkspace(workspaceId);
    }

    public async getNamespaces() {
        return await this.workspaceService.getNamespaces();
    }

    public async addProject(workspaceId: string, project: IProject_Input) {
        return await this.workspaceService.addProject(workspaceId, project);
    }

    public async addStacks(workspaceId: string, stacks: IStack[]) {
        return await this.workspaceService.addStacks(workspaceId, stacks);
    }

    public async setEnvVariables(request: any) {
        return await this.workspaceService.setEnvVariables(request);
    }

    public async listWorkspaces(orgId: string) {
        const workspaces = await this.workspaceService.listWorkspaces(orgId);
        return workspaces;
    }

    public async updateWorkspaceConfig(config) {
        // throw new Error('This function need to be implemented');
        return null;
    }
    public async createWorkspace(request: IWorkspaceCreate_Input, userMetadata): Promise<IWorkspace> {
        this.logger.debug('(createWorkspace) request: [%j]', request);
        const workspace: any = await this.workspaceService.createWorkspace(request);
        const createdWorksapce = await this.workspacePostService.createWorkspace(workspace);
        return createdWorksapce;
    }

    public async updateWorkspace(request: IWorkspaceUpdate_Input): Promise<IWorkspace> {
        const workspace = await this.workspaceService.updateWorkspace(request);

        const updatedWorksapce = await this.workspacePostService.updateWorkspace(request);
        return updatedWorksapce;
    }


    public async removeWorkspace(request: IWorkspaceRemove_Input): Promise<any> {
        const res = await this.workspaceService.removeWorkspace(request);

        // deleted workspace
        const result = await this.workspacePostService.removeWorkspace(request);
        return result;
    }

    public async startWorkspace(request: IWorkspaceStart_Input) {
        const workspace = await this.workspaceService.startWorkspace(request);

        const startedWorkspace = await this.workspacePostService.startWorkspace(request);
        return startedWorkspace;
    }

    public async stopWorkspace(request: IWorkspaceStop_Input) {
        const workspace = await this.workspaceService.stopWorkspace(request);

        const stoppedWorkspace = await  this.workspacePostService.stopWorkspace(request);
        return stoppedWorkspace;
    }
}
