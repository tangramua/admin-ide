
import { logger } from '@cdm-logger/server';

export const authHeaderContext = (req, res) => {
    logger.trace('(authHeaderContext) loading authHeader');
    if (!req) {
        return {};
    }
    const { headers, user, profile } = req;
    return { headers, user, profile };
};
