import { jwtRs256DecodeAndVerifyToken, Auth0Client } from '../../auth/auth0';
import { AuthenticationError } from 'apollo-server-errors';
import { TokenExpiredError } from 'jsonwebtoken';
import { AuthErrors } from '@adminide-stack/common';
const rp = require('request-promise');
import { logger } from '@cdm-logger/server';

export const userContext = async (req, res) => {
    if (!req) {
        return {};
    }
    // check if user and profile already set then don't need to set.
    if (req.user) {
        logger.trace('(userContex) user or profile already exist in the req so skipping');
        return { user: req.user };
    }
    logger.trace('(userContex) loading user and profile into context ');
    const token = req.headers && req.headers.authorization;
    if (!token || token === '') {
        // Token not available and let the other middleware handle the request
        return {};
    } else {
        const accessToken = token.replace('Bearer ', '');
        try {
            const user: any = await jwtRs256DecodeAndVerifyToken(accessToken);
            const profile = await Auth0Client.Instance.getProfile(user.sub, user.exp);

            return { user, profile };
        } catch (err) {
            logger.error('userContext Error', err);
            if (err instanceof TokenExpiredError) {
                throw new AuthenticationError(AuthErrors.TokenExpired);
            }
        }
    }
};

