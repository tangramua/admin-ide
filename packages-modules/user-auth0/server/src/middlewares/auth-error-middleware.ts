

import { UnauthorizedError } from '../errors';

export const handleAuthErrors = (error, req, res, next) => {
    if (error instanceof UnauthorizedError) {
        return res.status(error.code).json({
            type: 'UnauthorizedError',
            message: error.message,
        });
    }

    next(error);
};
