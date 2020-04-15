import { Schema, Model, Document, Connection } from 'mongoose';

export interface ISubscriptionModel extends Document {
    userId: String;
    stripeCustomerId: String;
    stripeSubscriptionId: String;
    subscription: {
        active: Boolean,
        stripeSubscriptionId: String,
        plan: {
            active: Boolean,
            amount: Number,
            billing_scheme: String,
            currency: String,
            id: String,
            interval: String,
            metadata: {
                description: String,
            },
            nickname: String,
        };
    };
    source: [{
        stripeSourceId: String,
        expiryMonth: String,
        expiryYear: String,
        last4: String,
        brand: String,
    }];
    invoices: [{
        amount_due: Number,
        amount_paid: Number,
        amount_remaining: Number,
        paid: Boolean,
        date: Number,
        due_date: Number,
        number: String,
        currency: String,
    }];
}

const subscriptionSchema = new Schema({
    userId: { type: String },
    stripeCustomerId: { type: String },
    stripeSubscriptionId: { type: String },
    subscription: {
        active: { type: Boolean },
        stripeSubscriptionId: { type: String },
        plan: {
            active: { type: Boolean },
            amount: { type: Number },
            billing_scheme: { type: String },
            currency: { type: String },
            id: { type: String },
            interval: { type: String },
            metadata: {
                description: { type: String },
            },
            nickname: { type: String },
        },
    },
    source: [{
        stripeSourceId: { type: String },
        expiryMonth: { type: String },
        expiryYear: { type: String },
        last4: { type: String },
        brand: { type: String },
    }],
    invoices: [{
        amount_due: { type: Number },
        amount_paid: { type: Number },
        amount_remaining: { type: Number },
        paid: { type: Boolean },
        date: { type: Number },
        due_date: { type: Number },
        number: { type: String },
        currency: { type: String },
    }],
});

// Duplicate the ID field.
subscriptionSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virutal fields are serialized.
subscriptionSchema.set('toJSON', {
    virtuals: true,
});

subscriptionSchema.set('toObject', {
    // virtuals: true,
    getters: true,
    transform: function (doc, ret) {
        delete ret.__v;
    },
});

export type SubscriptionModelType = Model<ISubscriptionModel>;

export const SusbscriptionModelFunc: (db: Connection) => SubscriptionModelType = (db) =>
    db.model<ISubscriptionModel>('subscription', subscriptionSchema);
