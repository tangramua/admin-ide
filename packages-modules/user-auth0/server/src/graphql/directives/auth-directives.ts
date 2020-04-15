import { forEachField } from 'graphql-tools';
import { getArgumentValues } from 'graphql/execution/values';
import { IAuthDirectiveOptions } from '../../interfaces';
import { AuthenticationError } from 'apollo-server-errors';
import * as jwt from 'jsonwebtoken';
import { config } from '../../config';
import { AuthErrors } from '@adminide-stack/common';

const authHS256directive = (options: IAuthDirectiveOptions) => ({
    isAuthenticated(next, source, args, context) {
        const token = context.headers.authorization;
        if (!token) {
            throw new AuthenticationError(AuthErrors.TokenMissing);
        }
        try {
            const decoded = jwt.verify(
                token.replace('Bearer ', ''),
                config.AUTH0_CLIENT_SECRET,
            );
            context.user = decoded;
            return next();
        } catch (err) {
            options.logger.error(err);
            if (err instanceof jwt.TokenExpiredError) {
                options.logger.trace('Token is expired!');
                throw new AuthenticationError(AuthErrors.TokenExpired);
            }
            throw new AuthenticationError('You are not authorized.');
        }
    },
    hasScope(next, source, args, context) {
        const token = context.headers.authorization;
        const expectedScopes = args.scope;
        if (!token) {
            throw new AuthenticationError(AuthErrors.TokenMissing);
        }
        try {
            const decoded = jwt.verify(
                token.replace('Bearer ', ''),
                options.JWT_SECRET,
            ) as any;
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


});

export { authHS256directive };
