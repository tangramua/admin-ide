import * as StripeApi from 'stripe';
import { generateMongo } from '@common-stack/store-mongo';
import { logger } from '@cdm-logger/server';
import { config } from './config';
import { SubscriptionRepository } from './store';
// const Subscription = new SubscriptionDAO();
// const User = new UserDAO();

const stripe = new StripeApi(config.STRIPE_SECRET_KEY);
const mongoConnection = generateMongo(config.MONGO_URL);
const subscriptionRepository = new SubscriptionRepository(mongoConnection, logger);
export const webhook = async (req, res) => {
    try {
        const stripeEndpointSecret = config.STRIPE_ENDPOINT_SECRET;
        let event;

        if (stripeEndpointSecret) {
            const sig = req.headers['stripe-signature'];
            event = stripe.webhooks.constructEvent(req.body, sig, stripeEndpointSecret);
        } else {
            event = req.body;
        }

        if (event.type === 'customer.subscription.deleted') {
            const response = event.data.object;
            const subscription = await subscriptionRepository.getSubscriptionByStripeSubscriptionId(response.id);
            if (subscription) {
                // const { userId, stripeCustomerId, stripeSourceId } = subscription;
                // const user = await User.getUser(userId);

                // await stripe.customers.deleteSource(stripeCustomerId, stripeSourceId);
                // await subscriptionRepository.editSubscription({
                //     userId: userId,
                //     subscription: {
                //         active: false,
                //         stripeSourceId: null,
                //         stripeSubscriptionId: null,
                //         expiryMonth: null,
                //         expiryYear: null,
                //         last4: null,
                //         brand: null,
                //     },
                // });

                // const url = `${req.protocol}://${req.get('host')}/subscription`;

                // mailer.sendMail({
                //     from: `${config.APP_NAME} <${process.env.EMAIL_USER}>`,
                //     to: user.email,
                //     subject: 'Subscription Canceled',
                //     html: `Your subscription has been canceled. To resubscribe click here: <a href="${url}">${url}</a>`,
                // });
            }
        }

        if (event.type === 'invoice.payment_failed') {
            // const response = event.data.object;
            // const subscription = await subscriptionRepository.getSubscriptionByStripeCustomerId(response.customer);
            // if (subscription) {
            //     const { userId } = subscription;
            //     const user = await User.getUser(userId);

            //     const url = `${req.protocol}://${req.get('host')}/profile`;

            //     mailer.sendMail({
            //         from: `${config.APP_NAME} <${config.EMAIL_USER}>`,
            //         to: user.email,
            //         subject: 'Charge Failed',
            //         html: `We are having trouble charging your card. Please update your card details here: <a href="${url}">${url}</a>`,
            //     });
            // }
        }

        if (event.type === 'invoice.created') {
            const response = event.data.object;
            const subscription = await subscriptionRepository.getSubscriptionByStripeCustomerId(response.customer);
            subscriptionRepository.editSubscription({
                ...subscription,
                invoices: [...subscription.invoices, response],
            });

        }

        res.json({ success: true });
    } catch (e) {
        console.log('e', e);
        res.status(500).json({ error: e.message });
    }
};
