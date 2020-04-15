import { Schema, model, Connection, Model } from 'mongoose';
import * as MongooseTimestamps from 'mongoose-timestamps';

const { Types } = Schema;

const ReportSchema = new Schema({
    refundedAt: { type: String },
    usage: { required: true, type: Number },
    amount: { required: true, type: Number },
    customer: { required: true, type: String },

    fees: { required: true, type: Types.Mixed },
    discount: { required: true, type: Types.Mixed },
    metadata: { required: true, type: Types.Mixed },

});

ReportSchema.plugin(MongooseTimestamps);

export const ReportModelFunc = (connection: Connection): Model<any> =>
    connection.model<any>('BillingReport', ReportSchema);
