import StripeApi from 'stripe';
import { ApolloServer, gql } from 'apollo-server';
const { buildFederatedSchema } = require('@apollo/federation');

import { config } from '../config';
import { Auth0Client, jwtRs256DecodeAndVerifyToken } from '../auth/auth0';

const getUpdatedContext = async (args, context): Promise<any> => {
    const decodedToken: any =
        await jwtRs256DecodeAndVerifyToken(args.authProvider.auth0.idToken);

    const profile = await Auth0Client.Instance
        .getProfile(decodedToken.sub, decodedToken.exp);

    const stripe = new StripeApi(config.STRIPE_SECRET_KEY);

    return Object.assign(context, { user: decodedToken, profile, stripe });
};

const start = async (typeDefs, resolvers, options) => {
    const server = new ApolloServer({
        ...options.config,
        schema: await buildFederatedSchema([
            { typeDefs, resolvers },
        ]),
    });


    return server.listen({ port: options.port });
};

export async function ssh(options) {
    const typeDefs = gql`
        extend type Mutation {
            createSshKey(authProvider: AuthProvider): Boolean
        }
    `;
    const resolvers = {
        createSshKey: async (root, args, context) => {
            const ctx = await getUpdatedContext(args, context);
            return context.sshKeyGenService.generateKeys({ name: ctx.user.sub });
        },
    };

    return start(typeDefs, resolvers, options);
}

export async function stripe(options) {
    const typeDefs = gql`
        extend type Mutation {
            createStripeSubscription(authProvider: AuthProvider): Boolean
        }
    `;
    const resolvers = {
        createStripeSubscription: async (root, args, context) => {
            const ctx = await getUpdatedContext(args, context);

            const custumer = await ctx.stripe.customers.create({ email: context.profile.email });
            const plansList = await ctx.stripe.plans.list();
            const freePlan = plansList.data[0];

            const subscription = await ctx.stripe.subscriptions.create({
                customer: custumer.id,
                items: [{ plan: (freePlan || {} as any).id }],
            });

            const account = await context.accountService.createDefaultAccount(
                context.user, {
                    defaultKey: context.user.sub,
                    stripeCustomerId: custumer.id,
                    stripeSubscriptionId: (subscription || {} as any).id,
            });

            return Auth0Client.Instance.managementClient
                .updateAppMetadata(
                    { id: context.user.sub },
                    Object.assign({}, { accountId: account.id }),
                );
        },
    };

    return start(typeDefs, resolvers, options);
}
