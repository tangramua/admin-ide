import { LOGIN_REDIRECT_PATH, LOGOUT_REDIRECT_PATH, LOGIN_REDIRECT_STORAGE_PATH } from '../../constants';

const store = require('store');
import { RedirectAction } from '../actions';

export const initialRedirectState =  {
    loginRedirect: store.get(LOGIN_REDIRECT_STORAGE_PATH) || '/',
    logoutRedirect: '/',
};
export function redirectRoutes(
    redirectState = initialRedirectState,
    action: RedirectAction,
) {
    switch (action.type) {
        case LOGIN_REDIRECT_PATH: return ({ ...redirectState, loginRedirect: action.payload.path });
        case LOGOUT_REDIRECT_PATH: return ({ ...redirectState, logoutRedirect: action.payload.path });
        default:
            return redirectState;
    }

}
