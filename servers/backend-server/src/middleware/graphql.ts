
import { ApolloServer, gql } from 'apollo-server-express';
import 'isomorphic-fetch';
import { logger } from '@cdm-logger/server';
import * as express from 'express';
import { localSchema, schemas } from '../api/schema';
import modules, { serviceContext } from '../modules';
import { formatError } from 'apollo-errors';
import * as url from 'url';
import { config } from '../config';
const OpentracingExtension = require('apollo-opentracing').default;
import { server as serverTracer, local as localTracer } from './tracer';
import { FederationServices } from '@adminide-stack/user-auth0-server';
import { ApolloGateway } from '@apollo/gateway';

const portfinder = require('portfinder');

let debug: boolean = false;
if (process.env.LOG_LEVEL && process.env.LOG_LEVEL === 'trace' || process.env.LOG_LEVEL === 'debug') {
    debug = true;
}

export const graphqlExpressMiddleware = async () => {
    const { protocol, hostname } = url.parse(config.BACKEND_URL);
    const serviceList = await Promise.all(FederationServices
        .map(async (service: any) => {
            const port = await portfinder.getPortPromise();
            const serviceUrl = url.format({ protocol, port, pathname: '/graphql', hostname });

            await service({ port, config: {} });
            return { name: service.name, url: serviceUrl.toString() };
        }));


    const gateway = new ApolloGateway({ serviceList });

    return new ApolloServer({
        debug,
        gateway,
        schema: localSchema,
        subscriptions: {
            onConnect: async (connectionParams, webSocket) => {
                const context = await modules.createContext(connectionParams, webSocket);
                const contextServices = await serviceContext(connectionParams, webSocket);
                return {
                    ...contextServices,
                    ...context,
                };
            },
        },
        dataSources: () => modules.createDataSource(),
        context: async ({ req, res, connection }) => {
            let context, contextServices;
            try {
                if (connection) {
                    context = connection.context;
                    contextServices = {};
                } else {
                    context = await modules.createContext(req, res);
                    contextServices = await serviceContext(req, res);
                }
            } catch (err) {
                logger.error('adding context to graphql failed due to [%o]', err);
                throw err;
            }

            return {
                ...contextServices,
                ...context,
            };

        },
        extensions: [() => new OpentracingExtension({
            server: serverTracer,
            local: localTracer,
        })],
        formatError,
    });
}

