import { setContext } from 'apollo-link-context';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';



// enrich with JWT
export const withToken = setContext((_, { headers }) => {
    // get the authentication token from local store if it exists
    const token = '9231da9aedb863f3c56329ca9d821252b247c9e2';
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : null,
        },
    };
});

const resetToken = onError(({ networkError }) => {
    if (networkError && (networkError as any).statusCode === 401) {
        console.log('network error');
        console.log('Need to write code to handle this error');
    }
});

export const gitLink = withToken.concat(resetToken);
