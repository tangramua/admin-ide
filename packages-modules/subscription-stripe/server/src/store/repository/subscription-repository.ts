import { injectable, inject, optional } from 'inversify';
import { ISubscriptionRepository } from '../../interfaces';
import * as Logger from 'bunyan';
import { SubscriptionModelType, ISubscriptionModel, SusbscriptionModelFunc } from '../models';
import { IMongoOptions } from '@common-stack/store-mongo';
import * as mongoose from 'mongoose';




@injectable()
export class SubscriptionRepository implements ISubscriptionRepository {
    private options: IMongoOptions;
    private logger: Logger;
    private subscriptionModel: SubscriptionModelType;
    constructor(

        @inject('MongoDBConnection')
        db: mongoose.Connection,

        @inject('Logger')
        logger: Logger,

        @inject('IMongoOptions')
        @optional()
        options?: IMongoOptions,
    ) {
        this.subscriptionModel = SusbscriptionModelFunc(db);
    }
    public async getSubscription(userId) {
        const subscription = await this.subscriptionModel.findOne({ userId });
        if (subscription) { return subscription.toObject(); }
        return subscription;
    }
    public async getSubscriptionByStripeSubscriptionId(stripeSubscriptionId) {
        const subscription = this.subscriptionModel.find({ stripeSubscriptionId });
        return subscription;
    }

    public async getSubscriptionByStripeCustomerId(stripeCustomerId) {
        const res = await this.subscriptionModel.findOne({ stripeCustomerId });
        return res ? res.toObject() : null;
    }

    public async editSubscription(subscription) {
        return await this.subscriptionModel.update(
            { userId: subscription.userId },
            { $set: subscription },
            { upsert: true },
        );
    }

    public async editSubscriptionByCustomerId(subscription) {
        return await this.subscriptionModel.update(
            { userId: subscription.stripeCustomerId },
            { $set: subscription },
            { upsert: true },
        );
    }

    public async getCardInfo(userId) {
        const subscription = this.subscriptionModel.find({ userId });
        return subscription;
    }


}
