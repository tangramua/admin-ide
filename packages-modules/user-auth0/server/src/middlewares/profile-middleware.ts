import { Auth0Client } from '../auth/auth0';

export const profileMiddleware = async (req, res, next) => {
    if (req.user) {
        try {
            req.profile = await Auth0Client.Instance.getProfile(req.user.sub, req.user.exp);
            return next();
        } catch (err) {
            return err => next(err);
        }
    } else {
        return next();
    }
};
