const jwks = require('jwks-rsa');
import * as ExpressJWT from 'express-jwt';

export * from './profile-middleware';
export * from './auth-error-middleware';
export * from './jwt-verify-hs256-middleware';
export * from './jwt-verify-rs256-middleware';
export * from './skip-error-middleware';

import { config } from '../config';
import { Auth0Client } from '../auth/auth0';

// export const jwtMiddleware = ExpressJWT({
//     algorithms: ['RS256'],
//     credentialsRequired: false,
//     secret: jwks.expressJwtSecret({
//         cache: true,
//         rateLimit: true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`,
//     }),
//     getToken: req => {
//         if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
//             return req.headers.authorization.split(' ')[1];
//         } else if (req.query && req.query.token) {
//             return req.query.token;
//         }
//         return null;
//     },
// });


