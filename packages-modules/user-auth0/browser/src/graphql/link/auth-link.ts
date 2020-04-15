import * as _ from 'lodash';
import { setContext } from 'apollo-link-context';
import { onError } from 'apollo-link-error';
import { Observable } from 'apollo-link';
import { logger } from '@cdm-logger/client';
import { AuthErrors } from '@adminide-stack/common';
import { Auth } from '../../auth';
import { message } from 'antd';

const errorMessage = _.throttle(message.error, 1500);

// enrich with JWT
export const withToken = setContext((root, { headers }) => {
    const token = Auth.Instance.idToken;
    logger.trace('token used for request [%j]', token);
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const resetToken = onError(err => {
    const { networkError, graphQLErrors, operation, forward } = err;
    if (graphQLErrors) {
        logger.trace('[GraphqlError]: %j', graphQLErrors);

        for (let error of graphQLErrors) {
            switch ((error.extensions as { [key: string]: any; }).code) {
                case 'UNAUTHENTICATED':
                    if (error.message === AuthErrors.TokenExpired || error.message === AuthErrors.ContextFailedDueToTokenExpired) {
                        // error code is set to UNAUTHENTICATED
                        // when AuthenticationError thrown in resolver
                        if (Auth.Instance.isTokenExpired) {
                            Auth.Instance.renewToken();
                        }

                        return new Observable(observer => {
                            Promise.resolve(Auth.Instance.renewToken())
                                .then(token => {
                                    const oldHeaders = operation.getContext().headers;
                                    operation.setContext({
                                        headers: {
                                            ...oldHeaders,
                                            authorization: Auth.Instance.idToken,
                                        },
                                    });
                                    return forward(operation).subscribe({
                                        next: observer.next.bind(observer),
                                        error: observer.error.bind(observer),
                                        complete: observer.complete.bind(observer),
                                    });
                                });
                        });
                    } else if (error.message === AuthErrors.InvalidToken) {
                        message.error(`You might not have access to the resource you trying.
                        Try logging off and logging back in few minutes.`);
                    } else {
                        console.log('error', (error.extensions as any).code);
                        message.error('Authorization Errors. Please try again later...');
                    }
                    break;
                case 'INTERNAL_SERVER_ERROR':
                    console.log('error', (error.extensions as any).code);
                    errorMessage('Server Errors. Please try again later...');
                    break;
                default:
                    console.log('error', (error.extensions as any).code);
                    message.error('Unknown Errors. Please try again later...');
            }
        }
    }
    if (networkError) {
        logger.trace('[Network Error]:', networkError);
        if (networkError.message === 'token is expired') {
            Auth.Instance.renewToken();
        } else {
            errorMessage('Network Errors. Please try again later...');
        }
    }
});
export const errorLink = resetToken;
export const authLink = withToken.concat(resetToken);
