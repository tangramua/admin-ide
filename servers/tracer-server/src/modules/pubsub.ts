import { PubSub } from 'graphql-subscriptions';
import { NatsPubSub } from 'graphql-nats-subscriptions';
import { wrapPubSub } from 'apollo-logger';
import { logger } from '@cdm-logger/server';
import { config } from '../config';
import * as nats from 'nats';

export const client: () => nats.Client = () => nats.connect({
    'url': config.NATS_URL,
    'user': config.NATS_USER,
    'pass': config.NATS_PW as string,
    reconnectTimeWait: 1000,
});

export const pubsub = process.env.NODE_ENV === 'development' ?
config.apolloLogging ? wrapPubSub(new PubSub(), { logger: logger.trace.bind(logger) })
: new PubSub() : new NatsPubSub({ client: client(), logger });
