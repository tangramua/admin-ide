export type AUTH0_NAMESPACE = '@auth0';
export const AUTH0_NAMESPACE: AUTH0_NAMESPACE = '@auth0';

export type CHECKING_OUT_START = '@auth0/CHECKING_OUT_START';
export const CHECKING_OUT_START: CHECKING_OUT_START = '@auth0/CHECKING_OUT_START';

export type CHECKING_OUT_END = '@auth0/CHECKING_OUT_END';
export const CHECKING_OUT_END: CHECKING_OUT_END = '@auth0/CHECKING_OUT_END';

export type PROFILE_FETCHED = '@auth0/PROFILE_FETCHED';
export const PROFILE_FETCHED: PROFILE_FETCHED = '@auth0/PROFILE_FETCHED';

export type PROFILE_FETCH_FAILED = '@auth0/PROFILE_FETCH_FAILED';
export const PROFILE_FETCH_FAILED: PROFILE_FETCH_FAILED = '@auth0/PROFILE_FETCH_FAILED';

export type PROFILE_FETCHING = '@auth0/PROFILE_FETCHING';
export const PROFILE_FETCHING: PROFILE_FETCHING = '@auth0/PROFILE_FETCHING';

export type LOGIN_SUCCESS = '@auth0/LOGIN_SUCCESS';
export const LOGIN_SUCCESS: LOGIN_SUCCESS = '@auth0/LOGIN_SUCCESS';

export type LOGGED_OUT = '@auth0/LOG_OUT';
export const LOGGED_OUT: LOGGED_OUT = '@auth0/LOG_OUT';

export type LOGIN_FAILED = '@auth0/LOGIN_FAILED';
export const LOGIN_FAILED: LOGIN_FAILED = '@auth0/LOGIN_FAILED';

export type AUTH0_LOGIN_SUCCESS = '@auth0/AUTH0_LOGIN_SUCCESS';
export const AUTH0_LOGIN_SUCCESS: AUTH0_LOGIN_SUCCESS = '@auth0/AUTH0_LOGIN_SUCCESS';

export type LOGGING_IN_TO_PROCEED = '@auth0/LOGGING_IN_TO_PROCEED';
export const LOGGING_IN_TO_PROCEED: LOGGING_IN_TO_PROCEED = '@auth0/LOGGING_IN_TO_PROCEED';

export type LOGGING_IN_PROGRESS = '@auth0/LOGGING_IN_PROGRESS';
export const LOGGING_IN_PROGRESS: LOGGING_IN_PROGRESS = '@auth0/LOGGING_IN_PROGRESS';

//Redirects
export type LOGIN_REDIRECT_PATH = '@auth0/LOGIN_REDIRECT_PATH';
export const LOGIN_REDIRECT_PATH: LOGIN_REDIRECT_PATH = '@auth0/LOGIN_REDIRECT_PATH';

export type LOGOUT_REDIRECT_PATH = '@auth0/LOGOUT_REDIRECT_PATH';
export const LOGOUT_REDIRECT_PATH: LOGOUT_REDIRECT_PATH = '@auth0/LOGOUT_REDIRECT_PATH';

export const ID_TOKEN = 'id_token';
export const ACCESS_TOKEN = 'access_token';


// Routes
export enum AUTH0_ROUTES {
    LOGIN = '@auth0/login',
    CALLBACK = '@auth0/callback',
    PROFILE = '@auth0/profile',
    LOGOUT = '@auth0/logout',
}


export const LOGIN_REDIRECT_STORAGE_PATH = 'login_redirect_path';
export const LOGOUT_REDIRECT_STORAGE_PATH = 'logout_redirect_path';

