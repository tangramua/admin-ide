import * as _ from 'lodash';
import { Schema, Model, Connection, Document, Mongoose } from 'mongoose';

import { ITemplate, ITemplateModel } from '../../interfaces';

const TemplateSchema = new Schema({
    description: String,
    text: { type: String },
    code: { type: String, unique: true },
    html: { type: String, required: true },
    name: { type: String, required: true },
    subject: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    engine: { type: String, required: true, default: 'ejs' },
});

// Duplicate the ID field.
TemplateSchema.virtual('id').get(function () {
    return this._id.toHexString();
});
// Ensure virutal fields are serialized.
TemplateSchema.set('toJSON', {
    virtuals: true,
});

TemplateSchema.set('toObject', {
    virtuals: true,
});

export type ITemplateModelType = Model<ITemplateModel>;

export const TemplateModelFunc: (db: Connection) => ITemplateModelType = (db) =>
    db.model<ITemplateModel>('EmailTemplate', TemplateSchema);
