import * as jwt from 'jsonwebtoken';
const jwksRsa = require('jwks-rsa');
const { promisify } = require('util'); //NodeJS 8: util.promisify()
import { logger } from '@cdm-logger/server';
import { AuthenticationError } from 'apollo-server-errors';
import { AuthErrors } from '@adminide-stack/common';
import { config } from '../../config';

export const jwksClient = jwksRsa({
    cache: true,
    rateLimit: false,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`,
});

export const validateTokenHeader = (token) => {
    if (!token || !token.header ||
        token.header.typ !== 'JWT' || token.header.alg !== 'RS256') {
        throw new AuthenticationError(AuthErrors.InvalidToken);
    }

    return token;
};

export const getSigningKey = async (keyId) =>
    await promisify(jwksClient.getSigningKey)(keyId);

export const getTokenRequestOptions = () => ({
    method: 'POST',
    url: `https://${config.AUTH0_DOMAIN}/oauth/token`,
    headers: { 'content-type': 'application/json' },
    body: {
        username: ``, // TODO
        password: ``, // TODO
        scope: 'openid',
        client_id: `${config.AUTH0_CLIENT_ID}`,
        client_secret: `${config.AUTH0_CLIENT_SECRET}`,
        grant_type: 'password',
    },
    json: true,
});

/**
 * @deprecated
 * To get profile, directly pull from the `Autho's usermanagement`.
 */
// export const getClientCredentialsRequestOptions = () => ({
//     method: 'POST',
//     url: `https://${config.AUTH0_DOMAIN}/oauth/token`,
//     headers: { 'content-type': 'application/json' },
//     body: {
//         client_id: `${config.AUTH0_CLIENT_ID}`,
//         client_secret: `${config.AUTH0_CLIENT_SECRET}`,
//         audience: `${config.AUTH0_API_AUDIENCE}`,
//         grant_type: 'client_credentials',
//     },
//     json: true,
// });

export const jwtRs256DecodeAndVerifyToken = async (token) => {
    logger.trace('(jwtRs256DecodeAndVerifyToken) validating token on [%j] ', token ? '*********' : token);
    const { header: { kid: kidId } }: any = await jwt.decode(token, { complete: true });
    const { publicKey, rsaPublicKey } = await getSigningKey(kidId);
    const decoded = jwt.verify(token, (publicKey || rsaPublicKey), {
        algorithms: ['RS256'],
        // due to bug we changed from `audience` to `aud`
        // https://github.com/auth0/express-jwt/issues/171
        aud: config.AUTH0_API_AUDIENCE,
        issuer: `https://${config.AUTH0_DOMAIN}/`,
    } as any);
    return decoded;
};

export const patchUserId = (profile) => {
    if (profile && profile.user_id) {
        profile.user_id = profile.user_id.replace(/^auth0\|/i, '');
    }
    return profile;
};

/**
 * @deprecated
 * To get profile, directly pull from the `Autho's usermanagement`.
 */
// export const getUserProfileRequestOptions = (userId, token) => ({
//     method: 'GET',
//     url: `${config.AUTH0_API_AUDIENCE}users/${userId}`,
//     headers: {
//         'content-type': 'application/json',
//         authorization: 'Bearer ' + token,
//     },
//     json: true,
// });


export const jwtRs256RefreshAToken = async (token) => {
    const { header: { kid: kidId }, payload }: any = await jwt.decode(token, { complete: true });
    const { exp, ...payloadWithouExp } = payload;
    const { publicKey, rsaPublicKey } = await getSigningKey(kidId);
    return jwt.sign({ payload: { ...payloadWithouExp, iat: Math.floor(Date.now() / 1000) - 2 } }, (publicKey || rsaPublicKey),
        {
            algorithm: 'RS256',
            expiresIn: config.AUTH_TOKEN_EXPIRY_IN_SEC,
            audience: config.AUTH0_API_AUDIENCE,
            issuer: `https://${config.AUTH0_DOMAIN}/`,
        });
};

