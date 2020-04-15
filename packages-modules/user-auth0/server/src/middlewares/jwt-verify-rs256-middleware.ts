import { config } from '../config';
import { jwtRs256DecodeAndVerifyToken, jwtRs256RefreshAToken } from '../auth/auth0';
import { UnauthorizedError } from '../errors';
import { logger } from '@cdm-logger/server';
/**
 * Verifies the Token when it is present only.
 * If tokens exist, it validates the token and if validation fails,
 * it caches any errors and pass them along to the `next()`.
 *
 * If the token was expired within 30 days, it will automatically refresh the token.
 *
 * @param req
 * @param res
 * @param next
 */
const jwtVerifyRS256Middleware = async (req, res, next) => {
    const token = req.headers && req.headers.authorization;
    logger.trace('(jwtVerifyRS256Middleware) send to verify token [%j]', token ? '**********' : token);

    if (!token || token === '') {
        next();
    } else {
        const accessToken = token.replace('Bearer ', '');
        try {
            const decoded = await jwtRs256DecodeAndVerifyToken(accessToken);
            req.user = decoded;
            next();
        } catch (err) {
            logger.trace('(jwtVerifyRS256Middleware) token decoding error [%j]', err);
            next();
        }
    }

};

export { jwtVerifyRS256Middleware };
