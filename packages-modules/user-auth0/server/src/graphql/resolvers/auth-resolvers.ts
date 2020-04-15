
import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { PubSub } from 'graphql-subscriptions';
import { IResolverOptions } from '@common-stack/server-core';
import { jwtRs256DecodeAndVerifyToken } from '../../auth/auth0';
import { Auth0Client } from '../../auth/auth0';
import { Promise } from 'bluebird';
import StripeApi from 'stripe';
import { config } from '../../config';
import { ValidationError } from '../../errors';
import { AuthenticationError } from 'apollo-server-errors';
import { AuthErrors } from '@adminide-stack/common';


const stripe = new StripeApi(config.STRIPE_SECRET_KEY);
const createAccount = async (context, options) => {
    const user = await Auth0Client.Instance.managementClient.getUser({ id: context.user.sub || context.user.user_id });

    if (
        _.isEmpty(user.app_metadata)
            || !_.get(user, 'app_metadata.accountId')
            || !(await context.accountService.findAccountById(_.get(user, 'app_metadata.accountId')))
    ) {
        try {
            options.logger.trace('(createAccount) {app_metadata.accountId} does not exist!!');
            options.logger.trace('(createAccount) profile data received is [%j]', context.profile);

            // creating customer's subscription plan
            // default it creates free plan
            const custumer = await stripe.customers.create({ email: context.profile.email });
            const plansList = await stripe.plans.list();

            const freePlan = plansList.data[0];
            const subscription = await stripe.subscriptions.create({
                customer: custumer.id,
                items: [{ plan: (freePlan || {} as any).id }],
            });

            options.logger.trace('(createAccount) strip subscription created with data [%j]', subscription);
            const account = await context.accountService.createDefaultAccount(
                context.user,
                {
                    defaultKey: context.user.sub,
                    stripeCustomerId: custumer.id,
                    stripeSubscriptionId: (subscription || {} as any).id,
                });

            options.logger.trace('(createAccount) a default account is created for customer with id [%s]', account.id);
            await Auth0Client.Instance.managementClient
                .updateAppMetadata({ id: context.user.sub }, _.assign({}, { accountId: account.id }));

            try {
                if (context.sshKeyGenService) {
                    await context.sshKeyGenService.generateKeys({ name: context.user.sub });
                }
            } catch (e) {
                console.error(`Cannot create ssh key: `, e);
            }
        } catch (err) {
            console.error(err);
            throw new Error(err);
        }
    } else {
        // do some asynchronous auditing
    }
    return {};
};

export const resolver: any = (options: IResolverOptions) => ({

    Query: {
        async fetchAuth0User(obj, args, context) {
            const user = await Auth0Client.Instance.managementClient.getUser({ id: context.user.sub || context.user.user_id });

            options.logger.debug('(fetchingAuth0User) from given auth0Id', args.auth0UserId);
            if (!context.profile || !user) {
                throw new Error('User do not have profile');
            }


            if (
                _.isEmpty(user.app_metadata)
                    || !_.get(user, 'app_metadata.accountId')
                    || !(await context.accountService.findAccountById(_.get(user, 'app_metadata.accountId')))
            ) {
                return null;
            }

            return { id: context.user.sub || context.user.user_id };
        },
    },

    Mutation: {
        async createAuth0User(obj, args, context) {
            if (!args.authProvider) {
                throw new AuthenticationError(AuthErrors.TokenMissing);
            }
            options.logger.debug('(createAuth0User) input received', args.authProvider.auth0.idToken ? '*****' : null);
            // get details of the user from idToken
            const decodedToken: any = await jwtRs256DecodeAndVerifyToken(args.authProvider.auth0.idToken);
            options.logger.trace('(createAuth0User) decodedToken: [%j] ', decodedToken);

            try {
                const profile = await Auth0Client.Instance
                    .getProfile(decodedToken.sub, decodedToken.exp);
                const updatedContext = { ...context, user: decodedToken, profile };
                const accountUpdates = await createAccount(updatedContext, options);
            } catch (err) {
                options.logger.error('(createAuth0User) failed due to [%j]', err);
                throw new Error(err);
            }
            return { id: decodedToken.sub };
        },
    },

});
