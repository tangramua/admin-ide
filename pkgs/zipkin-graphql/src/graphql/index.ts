import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './typeDefs';
import { createResolvers } from './resolvers';
import { IZipkinClient } from '../interfaces';

export const createSchema = (client: IZipkinClient) => makeExecutableSchema({
    typeDefs,
    resolvers: createResolvers(client),
});
