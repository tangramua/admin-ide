import { GraphQLSchema } from 'graphql';
import {
  makeExecutableSchema, addMockFunctionsToSchema, addErrorLoggingToSchema,
  makeRemoteExecutableSchema, introspectSchema, mergeSchemas,
} from 'graphql-tools';
import * as _ from 'lodash';
import { createApolloFetch } from 'apollo-fetch';
import { logger } from '@cdm-logger/server';
import { createHttpLink } from 'apollo-link-http';
import { createSchema, ZipkinClient } from '@adminide-stack/zipkin-graphql';
import { IResolverOptions, IDirectiveOptions } from '@common-stack/server-core';

import { local as localTracer, server as serverTracer } from '../middleware/tracer';

const localSchema: GraphQLSchema = createSchema(
  new ZipkinClient({ uri: process.env.ZIPKIN_URI || 'http://zipkin-main-system.blancboard.com'}) as any
) as any;

// export { schema };
export { localSchema };
