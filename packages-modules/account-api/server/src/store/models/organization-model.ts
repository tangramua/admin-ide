import { Schema, Model, Document, Mongoose, Connection } from 'mongoose';
import { IOrganization } from '@adminide-stack/account';

export interface IOrganizationModel extends Document, IOrganization {
    id: any;
}

const UserOrgSchema = new Schema({
    role: { type: String, enum: ['MEMBER', 'OWNER', 'ADMIN'], default: 'MEMBER' },
    inactive: { type: Boolean, default: false },
    userId: { type: String, required: true },
});

const OrganizationSchema = new Schema({
    name: { type: String },
    picture: { type: String },
    namespace: { type: String, unique: true },
    orgMembers: { type: [UserOrgSchema] },
    tier: { type: String, enum: ['PERSONAL', 'PRO', 'ENTERPRISE'], default: 'PERSONAL' },
    billingLeaders: { type: [String] },
    mainBillingLeader: { type: String },
    periodStart: { type: Date },
    periodStop: { type: Date },
    stripeId: { type: String },
    stripeSubscriptionId: { type: String },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

OrganizationSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
OrganizationSchema.set('toJSON', {
    virtuals: true,
});

OrganizationSchema.set('toObject', {
    virtuals: true,
});

export type OrganizationModelType = Model<IOrganizationModel>;
export const OrganizationModelFunc: (db: Connection) => OrganizationModelType = (db) =>
    db.model<IOrganizationModel>('organization', OrganizationSchema);
