import * as _ from 'lodash';
import { ITeam, IInvitation, ITeamMember } from '@adminide-stack/account';
import { Schema, Model, Document, Mongoose, Connection } from 'mongoose';

const generate = require('nanoid/generate');

export interface ITeamModel extends Document, ITeam {
    id: any;
}

const InvitationSchema = new Schema({
    role: { type: String },
    email: { type: String },
    teamId: { type: String },
    updatedAt: { type: Date },
    createdAt: { type: Date },
    acceptedAt: { type: Date },
    fullName: { type: String },
    invitedBy: { type: String },
    inviteCount: { type: Number },
    tokenExpiration: { type: Date },
    sent: { type: Boolean, required: true, default: false },
    active: { type: Boolean, required: true, default: true },
});

InvitationSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

InvitationSchema.set('toJSON', {
    virtuals: true,
});

InvitationSchema.set('toObject', {
    virtuals: true,
});

const WorkspaceRecord = new Schema({
    status: { type: String, required: true },
    workspaceId: { type: String, required: true },
});

const TeamMemberSchema = new Schema({
    role: { type: String },
    email: { type: String },
    userId: { type: String, required: true },
    workspaces: [{ type: WorkspaceRecord, default: [] }],
    connectionId: {
        type: String,
        required: true,
        default: () => generate('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', 15),
}
});

const TeamSchema = new Schema({
    tags: [{ type: String }],
    updatedAt: { type: Date },
    createdAt: { type: Date },
    parentTeam: { type: String },
    name: { type: String, required: true },
    workspaces: [{ type: Schema.Types.ObjectId, default: [], ref: 'workspace' }],
    orgId: { type: String, required: true },
    teamMembers: [{ type: TeamMemberSchema }],
    invitations: [{ type: InvitationSchema }],
    description: { type: String },
    metadata: { type: Schema.Types.Mixed }
});

TeamSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

TeamSchema.virtual('workspaceId').get(function () {
    return _.get(this.metadata, 'workspaceId');
});

TeamSchema.virtual('workspaceStatus').get(function () {
    return _.get(this.metadata, 'workspaceStatus');
});

TeamSchema.set('toJSON', {
    virtuals: true,
});

TeamSchema.set('toObject', {
    virtuals: true,
});

export type TeamModelType = Model<ITeamModel>;
export const TeamModelFunc: (db: Connection) => TeamModelType = (db) =>
    db.model<ITeamModel>('team', TeamSchema);
