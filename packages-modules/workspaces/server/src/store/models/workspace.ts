import * as _ from 'lodash';
import { Schema, Model, Document, Mongoose, Connection } from 'mongoose';
import {
    WorkspaceStatus, IWorkspace,
    IWorkspaceConfig, IWorkspacePorts,
    DEFAULT_RAM, DEFAULT_HDD, DEFAULT_CPU,
    InactivityInterval,
} from '@adminide-stack/core';

import { DEFAULT_GCE_MACHINE, DEFAULT_GCE_ZONE } from '../../constants';

// import * as Timestamps from 'mongoose-timestamps';

export interface IWorkspaceModel extends Document, IWorkspace {
    id: any;
}
const SpecSchema = new Schema({
    ram: { type: Number, default: DEFAULT_RAM },
    hdd: { type: Number, default: DEFAULT_HDD },
    cpu: { type: Number, default: DEFAULT_CPU },
    zone: { type: String, default: DEFAULT_GCE_ZONE },
    machine: { type: String, default: DEFAULT_GCE_MACHINE },
    inactivity: { type: Number, default: InactivityInterval.HalfHour },
});

const PortsSchema = new Schema({
    worker: { type: Number },
    management: { type: Number },
    application: { type: Number },
});

const EnvVariables = new Schema({
    secured: { type: Boolean },
    field: { type: String, required: true },
    value: { type: String, required: true },
});

const WorkspaceMetaInfo = new Schema({
    domainName: { type: String },
});

const ConfigSchema = new Schema({
    dnsId: { type: String },
    dnsName: { type: String },
    containerId: { type: String },
    globalVariables: { type: [EnvVariables] },
    ports: { type: PortsSchema, default: { application: 8000, worker: 8080, management: 4444 } },
    metaInfo: WorkspaceMetaInfo,
});



const ProjectSchema = new Schema({
    name: { type: String },
    description: { type: String },
    path: { type: String },
    source: {
        location: { type: String },
        type: {
            type: String, enum: ['GIT', 'BLANK', 'ZIP'],
        },
        parameters: {
            branch: {
                type: String,
            },
            httpsUrl: {
                type: String,
            },
            isPrivate: {
                type: Boolean,
            },
        },
        providers: {
            type: String,
            default: 'NONE',
            enum: ['GITHUB', 'BITBUCKET', 'GITLAB', 'VSTS', 'NONE'],
        },
        language: {
            type: [String],
        },
    },
    problems: { type: [String] },
});

const StackSchema = new Schema({

});

const WorkspaceSchema = new Schema({
    name: { type: String, required: true },
    language: String,
    description: String,
    status: { type: String, default: WorkspaceStatus.WORKSPACE_STATUS_DISABLED },
    spec: { type: SpecSchema, default: { ram: DEFAULT_RAM, cpu: DEFAULT_CPU, hdd: DEFAULT_HDD } },
    iconUrl: String,
    config: { type: ConfigSchema },
    token: { type: String },
    url: { type: String },
    orgId: { type: String },
    teamId: { type: Schema.Types.ObjectId, ref: 'team' },
    namespace: { type: String },
    temporary: { type: Boolean },
    projects: { type: [ProjectSchema] },
    stacks: { type: [Schema.Types.Mixed] },
}, { timestamps: true });

WorkspaceSchema.virtual('team', {
    ref: 'team',
    justOne: true,
    localField: '_id',
    foreignField: 'workspaces',
  });


// Duplicate the ID field.
WorkspaceSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
// Ensure virutal fields are serialized.
WorkspaceSchema.set('toJSON', {
    virtuals: true,
});

WorkspaceSchema.set('toObject', {
    virtuals: true,
});


export type WorkspaceModelType = Model<IWorkspaceModel>;
export const WorkspaceModelFunc: (db: Connection) => WorkspaceModelType = (db) =>
    db.model<IWorkspaceModel>('workspace', WorkspaceSchema);
