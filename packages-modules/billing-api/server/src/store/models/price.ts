import { Schema, model, Connection, Model } from 'mongoose';
import * as MongooseTimestamps from 'mongoose-timestamps';

const { Types } = Schema;

// Check Google Billing API response
const ResourceSchema = new Schema({
    group: { required: true, type: String },
    family: { required: true, type: String },
});

/** Use for pre-defined machines: e.g. n1-standard-1, n1-highmmem-2, etc.  */
const SpecRowSchema = new Schema({
    unit: { type: String, required: true },
    value: { type: String, required: true },
    resource: { type: String, required: true },
});

/** Pricing info: usage unit, available regions, price  */
const PricingRowSchema = new Schema({
    price: { type: Number, required: true, default: 0 },
    regions: { type: Array, default: ['global'], required: true },
});

const PriceSchema = new Schema({
    spec: [SpecRowSchema],
    type: { type: String }, // Pre-defined machine or resource
    pricings: [PricingRowSchema], // Pricing row for regions this record
    description: { required: true },
    resource: { type: ResourceSchema }, // Information about provided resources
    name: { required: true, type: String },
    gce: { type: Object, default: {}, required: true }, // Meta
    unit: { type: String, required: true, default: 'h' }, // Usage unig, e.g. hours, Gb, Gb/h, etc.
});

PriceSchema.plugin(MongooseTimestamps);

export const PriceModelFunc = (connection: Connection): Model<any> =>
    connection.model<any>('Price', PriceSchema);
