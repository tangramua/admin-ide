

export interface ISubscriptionRepository {
    getSubscription(userId: string);
    getSubscriptionByStripeSubscriptionId(stripeSubscriptionId: string);
    getSubscriptionByStripeCustomerId(stripeCustomerId: string);
    editSubscription({ userId, subscription });
    getCardInfo(userId: string);
}
