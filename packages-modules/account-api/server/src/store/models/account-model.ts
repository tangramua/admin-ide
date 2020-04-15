import { Schema, Model, Document, Mongoose, Connection } from 'mongoose';
import { IUserAccount } from '@adminide-stack/account';

export interface IAccountModel extends Document, IUserAccount {
    id: any;
}





const AccountSchema = new Schema({
    name: { type: String },
    picture: { type: String },
    email: { type: String },
    emailVerified: { type: Boolean },
    notificationEmail: { type: String },
    defaultTeam: { type: String, required: true },
    defaultOrg: { type: String, required: true },
    defaultKey: { type: String, required: true },
    stripeCustomerId: { type: String, required: true },
    stripeSubscriptionId: { type: String, required: true },
    alias: { type: [String] },
    createdAt: { type: Date },
    updatedAt: { type: Date },
});

AccountSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
AccountSchema.set('toJSON', {
    virtuals: true,
});

AccountSchema.set('toObject', {
    virtuals: true,
});


export type AccountModelType = Model<IAccountModel>;
export const AccountModelFunc: (db: Connection) => AccountModelType = (db) =>
    db.model<IAccountModel>('account', AccountSchema);
