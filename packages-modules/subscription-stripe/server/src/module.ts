import { interfaces } from 'inversify';
import { Feature } from '@common-stack/server-core';
import { resolver, schema } from './graphql';
import { ISubscriptionRepository } from './interfaces';
import { TYPES } from './constants';
import { organizationModule } from './containers';

const subscriptionGen = (container: interfaces.Container) => {
    return { Subscription: container.get<ISubscriptionRepository>(TYPES.ISubscriptionRepository) };
};

export default new Feature(
    {
        schema: schema,
        createResolversFunc: resolver,
        createServiceFunc: subscriptionGen,
        createContainerFunc: [organizationModule],
    },
);
