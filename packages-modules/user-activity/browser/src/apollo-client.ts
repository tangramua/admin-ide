import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { ApolloClient } from 'apollo-client';
import apolloLogger from 'apollo-link-logger';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';

const cache = new InMemoryCache();

export const client = new ApolloClient({
    cache,
    link: ApolloLink.from([
        apolloLogger,
        new HttpLink({ uri: `http://localhost:8081/graphql` }),
    ]),
});
