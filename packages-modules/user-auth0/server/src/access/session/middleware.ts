import { config } from '../../config';
import { readSession, createSession } from './sessions';
import { AuthenticationError } from 'apollo-server-errors';
import { AuthErrors } from '@adminide-stack/common';

export const attachSession = req => {
    if (req) {
        req.session = readSession(req);
        if (!req.session) {
            req.session = createSession(req);
        } else {
            if (req.path === config.BACKEND_URL) {
                if (req.universalCookies.get('x-token') !== req.session.csrfToken) {
                    req.session = createSession(req);
                    throw new AuthenticationError(AuthErrors.CSRFValidationFailed);
                }
            }
        }
    }
};
