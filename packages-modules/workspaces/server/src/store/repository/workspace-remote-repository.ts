// import { IWorkspaceRepository } from '../../interfaces';
// import {
//   IWorkspaceCreate_Input,
//   IWorkspaceUpdate_Input,
//   IWorkspaceRemove_Input,
//   IWorkspaceConfigUpdate_Input,
//   IWorkspaceVariables_Input,
// } from '@adminide-stack/core';
// import Hemera from 'nats-hemera';
// import HemeraJoi from 'hemera-joi';
// import { injectable, inject } from 'inversify';
// import * as Logger from 'bunyan';
// import * as _ from 'lodash';
// import { IMongoOptions } from '@common-stack/store-mongo';

// @injectable()
// export class WorkspaceRemoteRepository implements IWorkspaceRepository {


//     private options: IMongoOptions;
//     // Db object
//     private db: any;
//     private logger: Logger;

//     private topic = 'mongo-store';
//     private collection = 'adminIde';

//     constructor(@inject('Hemera') private hemera: Hemera<any, any>, @inject('Logger') logger: Logger) {
//         this.logger = logger.child({ className: 'WorkspaceRepository' });
//     }

//     public async setWorkspaceEnvVariables(request: IWorkspaceVariables_Input): Promise<any> {
//       this.logger.trace('set env variables for workspace (%j)', request);
//       const workspace = await this.info(request.workspace);

//       workspace.config.variables  = request.variables;

//       return this.updateWorkspaceConfig(workspace).then(() => true);
//     }

//     public async createWorkspace(newWorkspace: IWorkspaceCreate_Input): Promise<any> {
//         this.logger.trace('createWorkspace with params (%j)', newWorkspace);
//         return await this.hemera.act({
//             topic: this.topic,
//             cmd: 'create',
//             collection: this.collection,
//             data: {
//                 ...newWorkspace,
//             },
//         });
//     }

//     public async updateWorkspace(payload: IWorkspaceUpdate_Input): Promise<any> {
//         return await this.hemera.act({
//             topic: this.topic,
//             cmd: 'updateById',
//             id: payload.id,
//             collection: this.collection,
//             data: {
//                 ...payload,
//             },
//         });
//     }

//     public async updateWorkspaceConfig(payload: IWorkspaceConfigUpdate_Input): Promise<any> {
//         const { workspaceId, ...data } = payload;
//         return await this.hemera.act({
//             topic: this.topic,
//             cmd: 'updateById',
//             id: payload.workspaceId,
//             collection: this.collection,
//             data: {
//                 ...data,
//             },
//         });
//     }

//     public async deleteWorkspace(payload: IWorkspaceRemove_Input): Promise<any> {

//         return await this.hemera.act({
//             topic: this.topic,
//             cmd: 'removeById',
//             id: payload.id,
//             collection: this.collection,
//         });
//     }
//     public async findWorkspaceById(id: string): Promise<any> {

//         return await this.hemera.act({
//             topic: this.topic,
//             cmd: 'findById',
//             id: id,
//             collection: this.collection,
//         });
//     }
//     public async list(ownerId: string): Promise<any> {
//         return await this.hemera.act({
//             topic: this.topic,
//             cmd: 'find',
//             collection: this.collection,
//             query: {},
//         });
//     }

//     public async getNamespaces() {
//         const response = await this.hemera.act({
//             topic: this.topic,
//             cmd: 'find',
//             collection: this.collection,
//             query: {},
//         });

//         return _.map(response.data, 'namespace');
//     }

//     public async info(id: string): Promise<any> {
//         return await this.hemera.act({
//             topic: this.topic,
//             cmd: 'findById',
//             id,
//             collection: this.collection,
//         });
//     }
//     public async top(ownerId: string) {
//         return null;
//     }

//     public async available() {
//         return null;
//     }
// }
