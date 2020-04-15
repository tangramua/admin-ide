import fetch from 'node-fetch';
import { GraphQLSchema } from 'graphql';
import { HttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { createApolloFetch } from 'apollo-fetch';
import { setContext } from 'apollo-link-context';
import {
    makeRemoteExecutableSchema,
    introspectSchema,
    mergeSchemas,
    makeExecutableSchema,
} from 'graphql-tools';

export const gitTypeDefs = require('./git-schema.graphql').default;

export async function buildSchema(): Promise<any> {

    // 1. Create apollo Link that's connected to the underlying GraphQL API
    const httpLink = new HttpLink({ uri: 'https://api.github.com/graphql', fetch: fetch as any});

    const link = setContext((request, previousContext) => {
        console.log('GITHUB: CONTEXT;.>>>>>>>>>>>>>', previousContext.graphqlContext);
        if (previousContext.graphqlContext && previousContext.graphqlContext.profile) {
            const { profile: { identities } } = previousContext.graphqlContext;

            const githubProfile = identities.filter(client => client.provider === 'github');
            if (githubProfile === undefined || githubProfile.length < 1) {
                throw new Error('Need to sign in with github account');
            }
            return {
                headers: {
                    'authorization': `Bearer ${githubProfile[0].access_token}`,
                },
            };
        }

        return {
            // when user try to do an search we should use client authentication.
            // create a issue with stackflow
            // https://stackoverflow.com/questions/51456867/oauth2-key-secret-with-github-v4-graphql-endpoint
            headers: {
                'authorization': `Bearer c6243c26f5130f4091f54f5a6a42194336f7f7c4`,
            },
        };
    });


    // 2. Retrieve schema definition of the underlying GraphQL API
    const finderStackSchemaDef = await introspectSchema(link.concat(httpLink));

    // 3. Create the executable schema based on schema definition and Apollo Link
    const gitStackExecutableSchema: any = makeRemoteExecutableSchema({
        schema: finderStackSchemaDef,
        link: ApolloLink.from([link, httpLink]),
    });

    return gitStackExecutableSchema;
}

