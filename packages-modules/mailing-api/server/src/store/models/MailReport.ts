import * as _ from 'lodash';
import { Schema, Model, Connection, Document, Mongoose } from 'mongoose';

import { IMailReportModel } from '../../interfaces';

const MailReportSchema = new Schema({
    variables: Object,
    messageId: String,
    to: { type: String },
    from: { type: String },
    subjet: { type: String },
    envelope: Schema.Types.Mixed,
    templateId: { type: String },
    attachments: [{ type: String }],
    originalMessage: Schema.Types.Mixed,
});

// Duplicate the ID field.
MailReportSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
// Ensure virutal fields are serialized.
MailReportSchema.set('toJSON', {
    virtuals: true,
});

MailReportSchema.set('toObject', {
    virtuals: true,
});

export type IMailReportModelType = Model<IMailReportModel>;

export const MailReportModelFunc: (db: Connection) => IMailReportModelType = (db) =>
    db.model<IMailReportModel>('MailReport', MailReportSchema);
