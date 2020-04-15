import Hemera from 'nats-hemera';
import { injectable, inject, tagged, named } from 'inversify';
import { IWorkspaceRepository, IWorkspaceService } from '../interfaces';
import { TYPES } from '../constants';
import {
    IWorkspaceCreate_Input, IWorkspace, IWorkspaceConfigUpdate_Input,
    IWorkspaceUpdate_Input, IWorkspaceRemove_Input, WorkspaceServerEvents,
    WorkspaceStatus, WorkspaceDeploymentCommands, NATS_HEMERA_ADMINIDE_WORKSPACE,
    IWorkspaceStart_Input, IWorkspaceStop_Input, IProject_Input, IStack,
} from '@adminide-stack/core';
import { config } from '../config';
import * as Logger from 'bunyan';
import { IAdminSettings } from '../interfaces';
import { PubSubEngine } from 'graphql-subscriptions';

@injectable()
export class WorkspaceMicroservice implements IWorkspaceService {

    private logger: Logger;

    constructor(
        @inject('Hemera')
        private hemera: Hemera<any, any>,

        @inject(TYPES.IWorkspaceRepository)
        private repository: IWorkspaceRepository,

        @inject(TYPES.IWorkspaceService)
        private service: IWorkspaceService,

        @inject('PubSub')
        private pubsub: PubSubEngine,

        @inject('Logger')
        logger: Logger,

        @inject('Settings')
        @tagged('microservice', true)
        private settings: IAdminSettings,
    ) {
        this.logger = logger.child({ className: WorkspaceMicroservice });
    }

    private brigadeTopic = `${NATS_HEMERA_ADMINIDE_WORKSPACE}/${this.settings.brigadeSupTopic}`;


    public async getWorkspace(workspaceId: string): Promise<IWorkspace> {
        return await this.service.getWorkspace(workspaceId);
    }
    public async createWorkspace(request: IWorkspaceCreate_Input, userMetadata): Promise<IWorkspace> {
        const workspace = await this.service.createWorkspace(request);
        this.logger.debug('createWorkspace payload : [%j] with metadata', workspace, userMetadata);
        await this.hemera.act({
            topic: this.brigadeTopic,
            cmd: WorkspaceDeploymentCommands.CREATE_WORKSPACE,
            payload: { workspace, userMetadata, subTopic: this.settings.subTopic },
            projectId: config.BRIGADE_PROJECT_ID,
        });
        const createdWorksapce = await this.repository.updateWorkspace({
            id: workspace.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_CREATING,
        });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_CREATED_EVENT, {
            subscribeToWorkspace: {
                value: workspace,
                mutation: WorkspaceServerEvents.WORKSPACE_CREATED_EVENT,
            },
        });
        return workspace;
    }

    public async startWorkspace(request: IWorkspaceStart_Input): Promise<IWorkspace> {
        const workspace: IWorkspace = await this.service.startWorkspace(request);
        this.logger.debug('startWorkspace payload : [%j]', workspace);
        await this.hemera.act({
            topic: this.brigadeTopic,
            cmd: WorkspaceDeploymentCommands.START_WORKSPACE,
            payload: { workspace, subTopic: this.settings.subTopic },
            projectId: config.BRIGADE_PROJECT_ID,
        });

        const startedWorkspace = await this.repository.updateWorkspace(
            { id: request.id, status: WorkspaceStatus.WORKSPACE_STATUS_STARTING });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_STARTED_EVENT, {
            subscribeToWorkspace: {
                value: startedWorkspace,
                mutation: WorkspaceServerEvents.WORKSPACE_STARTED_EVENT,
            },
        });
        return startedWorkspace;
    }

    public async setEnvVariables(request: any) {
        const workspace = await this.service.setEnvVariables(request.id);
        await this.hemera.act({
            topic: this.brigadeTopic,
            cmd: WorkspaceDeploymentCommands.UPDATE_WORKSPACE,
            payload: {
                workspaceId: request.id,
                subTopic: this.settings.subTopic,
            },
            projectId: config.BRIGADE_PROJECT_ID,
        });
        return true;
    }

    public async stopWorkspace(request: IWorkspaceStop_Input): Promise<IWorkspace> {
        const workspace = await this.service.stopWorkspace(request);
        this.logger.debug('stopWorkspace payload : [%j]', workspace);

        await this.hemera.act({
            topic: this.brigadeTopic,
            cmd: WorkspaceDeploymentCommands.STOP_WORKSPACE,
            payload: { workspace, subTopic: this.settings.subTopic },
            projectId: config.BRIGADE_PROJECT_ID,
        });
        const stoppedWorkspace = await this.repository.updateWorkspace(
            { id: request.id, status: WorkspaceStatus.WORKSPACE_STATUS_STOPPING });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_STOPPED_EVENT, {
            subscribeToWorkspace: {
                value: stoppedWorkspace,
                mutation: WorkspaceServerEvents.WORKSPACE_STOPPED_EVENT,
            },
        });
        return stoppedWorkspace;
    }

    public async addProject(workspaceId: string, project: IProject_Input) {
        const workspace = await this.service.addProject(workspaceId, project);
        // TODO: Trigger pubsub for subscribed clients
        // TODO: Trigger deployment command for new project

        return workspace;
    }

    public async addStacks(workspaceId: string, stacks: IStack[]) {
        const workspace = await this.service.addStacks(workspaceId, stacks);
        // TODO: Trigger pubsub for subscribed clients
        // TODO: Trigger deployment for workspace stacks

        return workspace;
    }

    public async removeWorkspace(request: IWorkspaceRemove_Input) {
        const workspace = await this.service.removeWorkspace(request);
        this.logger.debug('removeWorkspace payload : [%j]', workspace);

        await this.hemera.act({
            topic: this.brigadeTopic,
            cmd: WorkspaceDeploymentCommands.REMOVE_WORKSPACE,
            payload: { workspace, subTopic: this.settings.subTopic },
            projectId: config.BRIGADE_PROJECT_ID,
        });

        const res = await this.repository.deleteWorkspace({ id: request.id, orgId: request.orgId });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_REMOVED_EVENT, {
            subscribeToWorkspace:
            {
                value: { id: request.id, orgId: request.orgId, status: WorkspaceStatus.WORKSPACE_STATUS_REMOVING },
                mutation: WorkspaceServerEvents.WORKSPACE_REMOVED_EVENT,
            },
        });
        return res;
    }

    public async updateWorkspace(request: IWorkspaceUpdate_Input): Promise<IWorkspace> {
        const id = request.id;
        const workspace = await this.service.updateWorkspace(request);
        this.logger.debug('updateWorkspace payload : [%j]', workspace);
        await this.hemera.act({
            topic: this.brigadeTopic,
            cmd: WorkspaceDeploymentCommands.UPDATE_WORKSPACE,
            payload: { workspace, subTopic: this.settings.subTopic },
            projectId: config.BRIGADE_PROJECT_ID,
        });
        const updatedWorksapce = await this.repository.updateWorkspace({
            id: workspace.id,
            status: WorkspaceStatus.WORKSPACE_STATUS_UPDATING,
        });
        this.pubsub.publish(WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT, {
            subscribeToWorkspace: {
                value: updatedWorksapce,
                mutation: WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT,
            },
        });
        return updatedWorksapce;
    }

    public async updateWorkspaceConfig(workspaceConfig: any) {
        return null;
    }

    public async listWorkspaces(orgId: string): Promise<IWorkspace[]> {
        this.logger.trace('listWorkspaces for orgId [%s]', orgId);
        return await this.service.listWorkspaces(orgId);
    }

    public async getNamespaces(): Promise<string[]> {
        this.logger.trace('workspace namespaces');
        return await this.service.getNamespaces();
    }
}
