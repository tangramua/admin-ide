import jwt from 'jsonwebtoken';
import { config } from '../../config';
import { AuthenticationError } from 'apollo-server-errors';
import { AuthErrors } from '@adminide-stack/common';

const checkAuthAndResolve = (context, controller) => {
    const token = context.headers.authorization;
    if (!token) {
        throw new AuthenticationError(AuthErrors.TokenMissing);
    }
    const decoded = jwt.verify(
        token.replace('Bearer ', ''),
        config.AUTH0_CLIENT_SECRET,
    );
    return controller.apply(this, [decoded]);
};

const checkScopesAndResolve = (
    context,
    expectedScopes,
    controller,
    // ...params,
) => {
    const token = context.headers.authorization;
    if (!token) {
        throw new AuthenticationError(AuthErrors.TokenMissing);
    }
    const decoded: any = jwt.verify(
        token.replace('Bearer ', ''),
        config.AUTH0_CLIENT_SECRET,
    );
    const scopes = decoded.scope;
    if (!scopes) {
        throw new AuthenticationError(AuthErrors.ScopeExpected);
    }
    if (scopes && expectedScopes.some(scope => scopes.indexOf(scope) !== -1)) {
        return controller.apply(this.params);
    } else {
        throw new AuthenticationError(`You are not authorized. Expected scopes: ${expectedScopes.join(',')}`);
    }
};

export { checkAuthAndResolve, checkScopesAndResolve };
