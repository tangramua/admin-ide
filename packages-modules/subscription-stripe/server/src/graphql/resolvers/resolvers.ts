
import { PubSub } from 'graphql-subscriptions';
import * as Logger from 'bunyan';
import { IResolverOptions } from '@common-stack/server-core';
import { FieldError } from '@common-stack/core';
import { pick } from 'lodash';
import * as StripeApi from 'stripe';
import { config } from '../../config';

const stripe = new StripeApi(config.STRIPE_SECRET_KEY);
export const resolver: any = (options: IResolverOptions) => ({

    Query: {
        async subscriptionData(obj, args, context) {
            const subscriber = await context.Subscription.getSubscriptionByStripeCustomerId(context.workspaceMetadata.stripeCustomerId);
            const invoices = subscriber && subscriber.invoices ? subscriber.invoices : [];
            const customer = await stripe.customers.retrieve(context.workspaceMetadata.stripeCustomerId);
            // const upcomingInvoice = await stripe.invoices.retrieveUpcoming(context.workspaceMetadata.stripeCustomerId);
            const bankAccounts =
                  await stripe.customers.listSources(context.workspaceMetadata.stripeCustomerId, {object: 'bank_account'});

            return {...customer, invoices, upcomingInvoice: [], bankAccounts: bankAccounts.data};
        },
        async subscriptionCards(obj, args, context) {
            try {
                const res = await stripe.customers.listSources(context.workspaceMetadata.stripeCustomerId, { object: 'card' });
                return res.data;
            } catch (e) {
                console.log('e', e);
            }
        },
        subscribersOnlyNumber(obj, args, context) {
            if (!context.subscription.active) {
                return;
            }
            const randomNumber = Math.floor(Math.random() * 10);
            return { number: randomNumber };
        },
        async subscriptionCardInfo(obj, args, context) {
            const { user } = context;
            return !user ? undefined : context.Subscription.getCardInfo(user.id);
        },
        async subscriberPlan(obj, args, context) {
            const subscriber = await stripe.subscriptions.retrieve(context.workspaceMetadata.stripeSubscriptionId);
            return { ...subscriber.plan, itemId: subscriber.items.data[0].id };
        },
        async plansList(obj, args, context) {
            const plans = await stripe.plans.list({ limit: 20 });
            return plans.data;
        },
    },

    Mutation: {
        async changePlan(obj, args, context) {
           // try {
                const userSubscription = await context.Subscription.getSubscription(context.profile.user_id);
                await stripe.subscriptions.update(context.workspaceMetadata.stripeSubscriptionId, {
                    cancel_at_period_end: false,
                    items: [{
                        id: args.oldPlanId,
                        plan: args.planId,
                    }],
                });
                await context.Subscription.editSubscription({
                    ...userSubscription,
                    userId: context.profile.user_id,
                    stripeCustomerId: context.workspaceMetadata.stripeCustomerId,
                    stripeSubscriptionId: context.workspaceMetadata.stripeSubscriptionId,
                    plan: {
                        id: args.planId,
                    },
                });

                return true;
            // } catch (e) {
            //     console.log('e', e);
            //     return false;
            // }
        },
        async addCard(obj, { input }, context) {
            try {
                const userSubscription = await context.Subscription.getSubscription(context.profile.user_id);
                const data = pick(input, ['token', 'expiryMonth', 'expiryYear', 'last4', 'brand']);
                const source = await stripe.customers.createSource(context.workspaceMetadata.stripeCustomerId, {
                    source: data.token,
                });
                const stripeSourceId = source.id;

                await context.Subscription.editSubscription({
                    ...userSubscription,
                    userId: context.profile.user_id,
                    stripeCustomerId: context.workspaceMetadata.stripeCustomerId,
                    stripeSubscriptionId: context.workspaceMetadata.stripeSubscriptionId,
                    source: [{
                        stripeSourceId,
                        expiryMonth: data.expiryMonth,
                        expiryYear: data.expiryYear,
                        last4: data.last4,
                        brand: data.brand,
                    }],
                });

                return true;
            } catch (e) {
                return false;
            }
        },
        async deleteCard(obj, { cardId }, context) {
            try {
                const source = await stripe.customers.deleteSource(context.workspaceMetadata.stripeCustomerId, cardId);
                
                return source.deleted ? true : false;
            } catch (e) {
                console.log(e)
                return false;
            }
        },
        async subscribe(obj, { input }, context) {
            try {
                const data = pick(input, ['token', 'expiryMonth', 'expiryYear', 'last4', 'brand']);
                const user = await context.User.getUserByUsername(context.user.username);
                const { subscription } = context;

                let customerId, stripeSourceId;

                // use existing stripe customer if user has subscribed before
                if (subscription && subscription.stripeCustomerId) {
                    customerId = subscription.stripeCustomerId;
                    const source = await stripe.customers.createSource(customerId, {
                        source: data.token,
                    });
                    stripeSourceId = source.id;
                } else {
                    const customer = await stripe.customers.create({ email: user.email, source: data.token });
                    customerId = customer.id;
                    stripeSourceId = customer.default_source;
                }

                await context.Subscription.editSubscription({
                    userId: user.id,
                    subscription: {
                        stripeCustomerId: customerId,
                        stripeSourceId,
                        expiryMonth: data.expiryMonth,
                        expiryYear: data.expiryYear,
                        last4: data.last4,
                        brand: data.brand,
                    },
                });

                const newSubscription = await stripe.subscriptions.create({
                    customer: customerId,
                    items: [
                        {
                            plan: 'basic',
                        },
                    ],
                });

                await context.Subscription.editSubscription({
                    userId: user.id,
                    subscription: {
                        active: true,
                        stripeSubscriptionId: newSubscription.id,
                    },
                });

                return { active: true, errors: null };
            } catch (e) {
                return { active: false, errors: e };
            }
        },
        async updateCard(obj, { cardId, cardData }, context) {
            try {
                await stripe.customers.updateSource(context.workspaceMetadata.stripeCustomerId, cardId, cardData);
                return true;
            } catch (e) {
                console.log(e);
                return false;
            }
        },
        async cancel(obj, args, context) {
            try {
                const { id } = await context.User.getUserByUsername(context.user.username);
                const { stripeSubscriptionId, stripeCustomerId, stripeSourceId } = context.subscription;

                try {
                    await stripe.subscriptions.del(stripeSubscriptionId);
                    await stripe.customers.deleteSource(stripeCustomerId, stripeSourceId);
                } catch (err) {
                    const e = new FieldError();
                    e.setError('subscription', 'Error cancelling subscription.');
                    e.throwIf();
                }

                await context.Subscription.editSubscription({
                    userId: id,
                    subscription: {
                        active: false,
                        stripeSourceId: null,
                        stripeSubscriptionId: null,
                        expiryMonth: null,
                        expiryYear: null,
                        last4: null,
                        brand: null,
                    },
                });

                return { active: false, errors: null };
            } catch (e) {
                return { active: true, errors: e };
            }
        },
    },
    Subscription: {},
});

