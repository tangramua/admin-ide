
import jwtDecode from 'jwt-decode';
import { Cookies } from 'react-cookie';

import {config} from '../config';

import { ID_TOKEN, ACCESS_TOKEN } from '../constants';

let Auth0Lock, Auth0UserProfile, cookie;
if (typeof window !== 'undefined') {
    Auth0Lock = require('auth0-lock').Auth0Lock;
    Auth0UserProfile = require('auth0-js').Auth0UserProfile;
    cookie = document.cookie;
} else {
    Auth0Lock = {};
    Auth0UserProfile = {};
    cookie = new Cookies();
}
export default class AuthService {
    public static lock = (typeof window !== 'undefined') ?
        new Auth0Lock(config.AUTH0_CLIENT_ID, config.AUTH0_DOMAIN, {
            auth: {
                redirectUrl: config.REDIRECT_URL,
                responseType: 'token id_token',
                audience: config.AUTH0_API_AUDIENCE,
                params: {
                    scope: 'openid profile email read:users read:current_user read:user_idp_tokens',
                },
            },
            theme: {
                primaryColor: '',
            },
            languageDictionary: {
                title: 'CDEBase',
            },
        })
        : {};

    public static login() {
        // Call the show method to display the widget.
        // AuthService.lock.on('authenticated', function (authResult: any){ 
        //     console.log('authResult', authResult);
        //     AuthService.setToken(authResult.idToken);
        //     AuthService.setAccessToken(authResult.accessToken);
        // });
        AuthService.lock.show();
    }

    public static setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        cookie.set('access_token', authResult.accessToken);
        cookie.set('id_token', authResult.idToken);
    }

    public static loggedIn() {
        // Checks if there is a saved token and it's still valid
        const token = AuthService.getToken();
        return !!token && !AuthService.isTokenExpired();
    }

    public static logout() {
        // Clear user token and profile data from store
        cookie.remove(ID_TOKEN);
        cookie.remove(ACCESS_TOKEN);
        cookie.remove('profile_token');
        // store.remove('expires_at');
        AuthService.lock.logout({
            returnTo: config.APP_URL,
        });
    }

    public static setAccessToken(accessToken: string) {
        // Saves user token to store
        cookie.set(ACCESS_TOKEN, accessToken, { path: '/' });
    }
    public static setToken(idToken: string) {
        // Saves user token to store
        cookie.set(ID_TOKEN, idToken);
    }

    public static getAccessToken() {
        // Saves user token to store
        return cookie.get(ACCESS_TOKEN);
    }

    public static getToken() {
        // Retrieves the user token from store
        return cookie.get(ID_TOKEN);
    }

    public static getAuth0UserId() {
        const token = AuthService.getToken();
        if (!token || token === 'undefined') {
            return '';
        }
        const decoded = jwtDecode(token);

        return decoded.sub;
    }

    public static getTokenExpirationDate() {
        const token = AuthService.getToken();
        const decoded = jwtDecode(token);
        if (!decoded.exp) {
            return null;
        }

        const date = new Date(0); // The 0 here is the key, which sets the date to the epoch
        date.setUTCSeconds(decoded.exp);
        return date;
    }

    public static isTokenExpired(): boolean {
        const token = AuthService.getToken();
        if (!token || token === 'undefined') {
            return true;
        }
        const date = AuthService.getTokenExpirationDate();
        const offsetSeconds = 0;
        if (date === null) {
            return false;
        }
        return !(date.valueOf() > new Date().valueOf() + offsetSeconds * 1000);
    }

    public static getProfile(): Promise<any> {
        return new Promise((resolve, reject) => {
            // TODO replace getProfile with userInfo as auth0 deprecated getProfile function from v10
            AuthService.lock.getProfile(AuthService.getAccessToken()!, function (
                error: any,
                profile: any,
            ) {
                if (error) {
                    // handle error
                    return reject(error);
                }

                return resolve(profile);
            });
        });
    }
}
