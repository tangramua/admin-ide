import { IWorkspaceRepository } from '../../interfaces';
import {
    IWorkspaceCreate_Input,
    IWorkspaceUpdate_Input,
    IWorkspaceRemove_Input,
    IWorkspaceConfigUpdate_Input,
    IWorkspaceVariables_Input,
    IProject_Input,
    IStack,
} from '@adminide-stack/core';
import { WorkspaceModelFunc, IWorkspaceModel, WorkspaceModelType } from '../models';
import { injectable, inject, optional } from 'inversify';
import * as Logger from 'bunyan';
import * as _ from 'lodash';
import { IMongoOptions } from '@common-stack/store-mongo';
import * as mongoose from 'mongoose';
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';

@injectable()
export class WorkspaceRepository implements IWorkspaceRepository {
    private options: IMongoOptions;
    private logger: Logger;

    // Workbench Model
    private workbenchModel: WorkspaceModelType;

    constructor(
        @inject('MongoDBConnection')
        db: mongoose.Connection,

        @inject('Logger')
        logger: Logger,

        @inject('IMongoOptions')
        @optional()
        options?: IMongoOptions,
    ) {

        this.logger = logger.child({ className: 'WorkspaceRepository' });
        this.workbenchModel = WorkspaceModelFunc(db);

    }

    public async addProject(workspaceId: string, project: IProject_Input) {
        const workspace = await this.findWorkspaceById(workspaceId);
        if (!workspace) {
            throw new Error(`Workspace ${workspaceId} not found!`);
        }

        const ok = await this.workbenchModel.findOneAndUpdate({ _id: workspaceId }, { $push: { projects: project } }).exec();

        return this.findWorkspaceById(workspaceId);
    }

    public async addStacks(workspaceId: string, stacks: IStack[]) {
        const workspace = await this.findWorkspaceById(workspaceId);
        if (!workspace) {
            throw new Error(`Workspace ${workspaceId} not found!`);
        }

        const ok = await this.workbenchModel.findOneAndUpdate({ _id: workspaceId }, { $push: { stacks: { $each: stacks } } }).exec();

        return this.findWorkspaceById(workspaceId);
    }

    public async setWorkspaceEnvVariables(request: IWorkspaceVariables_Input): Promise<boolean> {
        this.logger.trace('set env variables for workspace (%j)', request);
        const workspace = await this.info(request.workspace) as any;

        workspace.config = workspace.config || {};
        workspace.config.ports = request.ports || {};
        workspace.config.globalVariables = request.globalVariables;

        const ok = await workspace.save();

        return true;
    }

    public async createWorkspace(newWorkspace: IWorkspaceCreate_Input) {
        this.logger.trace('(createWorkspace) with params (%j)', newWorkspace);
        return this.workbenchModel.create({ ...newWorkspace });
    }

    public async getNamespaces(...args) {
        this.logger.trace('(namespaces) with params (%j)', ...args);

        const workspaces = await this.workbenchModel.find({}, { namespace: 1 }).exec();

        return _.map(workspaces, 'namespace');
    }

    public async updateWorkspace(payload: IWorkspaceUpdate_Input) {
        const { id, ...updates } = payload;
        this.logger.trace('(updateWorkspace) payload received [%j]', payload);
        await this.workbenchModel.update({ _id: id }, updates);
        return this.workbenchModel.findOne({ _id: id }).exec();
    }

    public async updateWorkspaceConfig(payload: IWorkspaceConfigUpdate_Input) {
        const { dnsId, dnsName, containerId } = payload;
        await this.workbenchModel.update({ _id: payload.id }, { dnsId: dnsId, dnsName: dnsName, containerId: containerId });
        return await this.workbenchModel.findOne({ _id: payload.id }).exec();
    }

    public async deleteWorkspace(payload: IWorkspaceRemove_Input) {
        try {
            await this.workbenchModel.remove({ _id: payload.id }).exec();
            return true;
        } catch (e) {
            this.logger.error('delete workspace with payload (%j) failed due to (%j)', payload, e);
            return false;
        }
    }

    public async findWorkspaceById(id: string) {
        return this.workbenchModel.findOne({ _id: id }).populate('team');
    }

    public async info(_id: string) {
        return await this.workbenchModel.findOne({ _id });
    }

    public async list(orgId: string) {
        // return WorkspaceModel.findOne({ ownerId: ownerId });
        this.logger.trace('(list) pulling workspace for owner (%s)', orgId);
        const workspaces = await this.workbenchModel.find({ orgId });
        return workspaces;
    }

    public async top(ownerId: string) {
        this.logger.info('Top function is not yet implemented');
        return null;
    }

    public async available() {
        return null;
    }
}
