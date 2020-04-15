import * as crypto from 'crypto';
import { encryptSession, decryptSession } from './crypto';
import { config } from '../../config';

export const createSession = req => {
    const session = writeSession(req, { csrfToken: crypto.randomBytes(16).toString('hex') });
    return session;
};

export const readSession = req => {
    let session = decryptSession(req.universalCookies.get('session', { doNotParse: true }));
    if (req.headers.session) {
        session = decryptSession(req.headers.session);
    }
    if (config.isDev) {
        console.log('read session', session);
    }
    return session;
};


export const writeSession = (req, session) => {
    const cookieParams = {
        httpOnly: true,
        secure: !config.isDev,
        maxAge: 7 * 24 * 3600,
        path: '/',
    };
    req.universalCookies.set('session', encryptSession(session), cookieParams);
    req.universalCookies.set('x-token', session.csrfToken, cookieParams);
    if (config.isDev) {
        console.log('write session', session);
    }
    return session;
};

