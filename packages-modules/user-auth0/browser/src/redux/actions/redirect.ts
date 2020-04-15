import {
    LOGIN_REDIRECT_PATH,
    LOGOUT_REDIRECT_PATH,
} from '../../constants';
const store = require('store');

export type RedirectAction =
    ({
        type: LOGIN_REDIRECT_PATH;
        payload: {
            path: string;
        },
    })
    | ({
        type: LOGOUT_REDIRECT_PATH;
        payload: {
            path: string;
        },
    });

export const setLoginRedirectPath = (path: string): RedirectAction => {
    store.set('login_redirect_path', path);
    return ({
        type: LOGIN_REDIRECT_PATH,
        payload: {
            path,
        },
    });
};

export const setLogoutRedirectPath = (path: string): RedirectAction => {
    return ({
        type: LOGOUT_REDIRECT_PATH,
        payload: {
            path,
        },
    });
};
