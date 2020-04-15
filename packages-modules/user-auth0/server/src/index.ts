import { Feature } from '@common-stack/server-core';

export * from './errors';
export * from './interfaces';
export * from './middlewares';
import userAuth from './module';
import { ssh, stripe } from './graphql-services';

export const FederationServices = [ssh, stripe];

export default new Feature(userAuth);
