import { createError } from 'apollo-errors';

const AuthorizationError = createError('AuthorizationError', {
    data: {
        code: 401,
    },
    message: 'You are not authorized.',
});

export { AuthorizationError };
