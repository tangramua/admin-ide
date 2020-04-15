import { IWorkspaceService, IWorkspaceRepository } from '../interfaces';
import {
    IWorkspaceCreate_Input, IWorkspace, IWorkspaceConfigUpdate_Input,
    IWorkspaceUpdate_Input, IWorkspaceRemove_Input, WorkspaceServerEvents,
    WorkspaceStatus, IWorkspaceStop_Input, IWorkspaceStart_Input, IProject_Input, IStack,
} from '@adminide-stack/core';
import { TYPES } from '../constants';
import { injectable, inject } from 'inversify';
import { PubSubEngine } from 'graphql-subscriptions';
import * as ILogger from 'bunyan';

@injectable()
export class WorkspacePostService implements IWorkspaceService {


    private logger: ILogger;

    constructor(
        @inject(TYPES.IWorkspaceService)
        private workspaceService: IWorkspaceService,

        @inject(TYPES.IWorkspaceRepository)
        private workspaceRepository: IWorkspaceRepository,

        @inject('PubSub')
        private pubsub: PubSubEngine,

        @inject('Logger')
        logger: ILogger,

    ) {
        this.logger = logger.child({ className: WorkspacePostService });
    }


    public async getWorkspace(workspaceId: string) {
        return null;
    }

    public async getNamespaces() {
        return [];
    }

    public async setEnvVariables(request: any) {
        return null;
    }

    public async listWorkspaces(orgId: string) {
        return null;
    }

    public async updateWorkspaceConfig(config) {
        // throw new Error('This function need to be implemented');
        return null;
    }
    public async createWorkspace(request: IWorkspaceCreate_Input): Promise<IWorkspace> {
        this.logger.trace('(createWorkspace) updating the workspace status as created');
        const createdWorkspace = await this.workspaceRepository.updateWorkspace({
            id: request.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_CREATED,
        });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_CREATED_EVENT, {
            subscribeToWorkspace: {
                value: createdWorkspace,
                mutation: WorkspaceServerEvents.WORKSPACE_CREATED_EVENT,
            },
        });
        return createdWorkspace;
    }

    public async updateWorkspace(request: IWorkspaceUpdate_Input): Promise<IWorkspace> {
        const updatedWorksapce = await this.workspaceRepository.updateWorkspace({
            id: request.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_CREATED,
        });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT, {
            subscribeToWorkspace: {
                value: updatedWorksapce,
                mutation: WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT,
            },
        });
        return updatedWorksapce;
    }

    public async addProject(workspaceId: string, project: IProject_Input) {
        const updatedWorksapce = await this.workspaceRepository.addProject(workspaceId, project);

        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT, {
            subscribeToWorkspace: {
                value: updatedWorksapce,
                mutation: WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT,
            },
        });
        return updatedWorksapce;
    }

    public async addStacks(workspaceId: string, stacks: IStack[]) {
        const updatedWorksapce = await this.workspaceRepository.addStacks(workspaceId, stacks);

        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT, {
            subscribeToWorkspace: {
                value: updatedWorksapce,
                mutation: WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT,
            },
        });
        return updatedWorksapce;
    }

    public async removeWorkspace(request: IWorkspaceRemove_Input): Promise<any> {
        // deleted workspace
        const restult = await this.workspaceRepository.deleteWorkspace(request);
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_REMOVED_EVENT, {
            subscribeToWorkspace:
                { value: { id: request.id, orgId: request.orgId }, mutation: WorkspaceServerEvents.WORKSPACE_REMOVED_EVENT },
        });
        return restult;
    }

    public async startWorkspace(request: IWorkspaceStart_Input) {
        const startedWorkspace = await this.workspaceRepository.updateWorkspace({
            id: request.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_STARTED,
        });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_STARTED_EVENT, {
            subscribeToWorkspace: {
                value: startedWorkspace,
                mutation: WorkspaceServerEvents.WORKSPACE_STARTED_EVENT,
            },
        });
        return startedWorkspace;
    }

    public async stopWorkspace(request: IWorkspaceStop_Input) {
        const stoppedWorkspace = await this.workspaceRepository.updateWorkspace({
            id: request.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_STOPPED,
        });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_STOPPED_EVENT, {
            subscribeToWorkspace: {
                value: stoppedWorkspace,
                mutation: WorkspaceServerEvents.WORKSPACE_STOPPED_EVENT,
            },
        });
        return stoppedWorkspace;
    }

}
