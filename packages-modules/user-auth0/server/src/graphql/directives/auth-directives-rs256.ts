import * as _ from 'lodash';
import { forEachField } from 'graphql-tools';
import { getArgumentValues } from 'graphql/execution/values';
import { IAuthDirectiveOptions } from '../../interfaces';
import { AuthenticationError } from 'apollo-server-errors';
import { AuthErrors } from '@adminide-stack/common';
import { TokenExpiredError } from 'jsonwebtoken';
import { jwtRs256DecodeAndVerifyToken, Auth0Client } from '../../auth/auth0';

const authRS256directive = (options: IAuthDirectiveOptions) => ({
    async isAuthenticated(next, source, args, context) {
        if (context.user) {
            options.logger.debug('(authRS256directive) user already exist');
            return next();
        }
        const token = _.get(context, 'headers.authorization');
        options.logger.trace('(authRS256directive) token: {%s}', token ? '***' : token);
        if (!token) {
            throw new AuthenticationError(AuthErrors.TokenMissing);
        }
        try {
            const decoded = await jwtRs256DecodeAndVerifyToken(
                token.replace('Bearer ', ''),
            );
            context.user = decoded;
            return next();
        } catch (err) {
            options.logger.error(err);
            if (err instanceof TokenExpiredError) {
                options.logger.trace('Token is expired!');
                throw new AuthenticationError(AuthErrors.TokenExpired);
            }
            // token might be invalid
            throw new AuthenticationError(AuthErrors.InvalidToken);
        }
    },
    async hasScope(next, source, args, context) {
        const token = context.headers.authorization;
        const expectedScopes = args.scope;
        if (!token) {
            throw new AuthenticationError(AuthErrors.TokenMissing);
        }
        try {
            const decoded: any = await jwtRs256DecodeAndVerifyToken(
                token.replace('Bearer ', ''),
            );
            const scopes = decoded.scope.split(' ');
            if (expectedScopes.some(scope => scopes.indexOf(scope) !== -1)) {
                return next();
            }
        } catch (err) {
            return Promise.reject(
                new AuthenticationError(`You are not authorized. Expected scopes: ${expectedScopes.join(
                    ', ',
                )}`));
        }
    },

    /**
     * Full Profile of the user to get the access_tokens of IdPs
     * @param next
     * @param source
     * @param args
     * @param context
     */
    async profile(next, source, args, context) {
        if (context.profile) {
            options.logger.debug('(authRS256directive) profile already exist');
            return next();
        }
        const user = context.user;
        options.logger.trace('(authRS256directive) profile for user [%j]', user);
        if (!user) {
            throw new AuthenticationError(AuthErrors.UserExpected);
        }

        try {
            options.logger.trace('(authRS256directive) get user profile with userId: [%s]', user.sub);
            const profile = await Auth0Client.Instance.getProfile(user.sub, user.exp);

            options.logger.trace('(authRS256directive) profile received [%j]', profile);
            context.profile = profile;
            return next();
        } catch (err) {
            options.logger.error(err);
            if (err instanceof TokenExpiredError) {
                options.logger.trace('Token is expired!');
                throw new AuthenticationError(AuthErrors.TokenExpired);
            }
            throw new AuthenticationError(AuthErrors.InvalidToken);
        }
    },
});

export { authRS256directive };

