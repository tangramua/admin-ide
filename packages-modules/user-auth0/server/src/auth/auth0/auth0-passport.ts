

import { pick } from 'lodash';
import passport from 'passport';
import Auth0Strategy from 'passport-auth0';

import { config } from '../../config';

// This will configure Passport to use Auth0
const strategy = new Auth0Strategy(
    {
        domain: config.AUTH0_DOMAIN,
        clientID: config.AUTH0_CLIENT_ID,
        clientSecret: config.AUTH0_CLIENT_SECRET,
        callbackURL: config.AUTH0_CALLBACK_URL || `${config.BACKEND_URL}/auth/auth0/callback`,
    },
    function (accessToken, refreshToken, extraParams, profile, done) {
        return done(null, { ...profile, refreshToken, accessToken, extraParams });
    },
);
passport.use(strategy);

export const middleware = app => {
    app.use(passport.initialize());
    app.get('/auth/auth0',
        function (req, res, next) {
            req.session.returnTo = req.query.redirectUri || '/profile';

            passport.authenticate('auth0', {
                responseType: 'code',
                domain: config.AUTH0_DOMAIN,
                clientID: config.AUTH0_CLIENT_ID,
                audience: 'https://' + config.AUTH0_DOMAIN + '/userinfo',
                scope: 'offline_access openid profile read:current_user',
                redirectUri: config.AUTH0_CALLBACK_URL || `${config.BACKEND_URL}/auth/auth0/callback`,
            }, function (err, user, info) {
                if (err) { return next(err); }
                if (!user) { return res.redirect('/error'); }
                return next();
            })(req, res, next);
        });

    app.get(
        '/auth/auth0/callback',
        passport.authenticate('auth0', { session: false, failureRedirect: '/login' }),
        function (req, res) {
            res.redirect(`http://localhost:3000/callback#access_token=${req.user.accessToken}`);
        },
    );

    app.get('/auth/auth0/failure', function (req, res) {
        let error = req.flash('error');
        let error_description = req.flash('error_description');
        req.logout();
        res.render('falure', {
            error: error[0],
            error_description: error_description[0],
        });
    });
};
