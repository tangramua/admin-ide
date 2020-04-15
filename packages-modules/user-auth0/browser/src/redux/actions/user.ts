import {
    CHECKING_OUT_END,
    CHECKING_OUT_START,
    PROFILE_FETCH_FAILED,
    PROFILE_FETCHED,
    PROFILE_FETCHING,
    LOGIN_FAILED,
    LOGGED_OUT,
    LOGGING_IN_TO_PROCEED,
    LOGIN_SUCCESS,
    LOGGING_IN_PROGRESS,
    AUTH0_LOGIN_SUCCESS,
} from '../../constants';
import { Dispatch } from 'redux';
import { Store } from '../../interfaces';
import { IUserProfile } from '@adminide-stack/user-core';
import { Auth } from '../../auth';
import { logger } from '@cdm-logger/client';

export type AuthAction =
    ({ type: PROFILE_FETCH_FAILED })
    | ({ type: PROFILE_FETCHED; payload: { nickname: string; picture: string; } & IUserProfile; })
    | ({ type: PROFILE_FETCHING; })
    | ({ type: LOGGED_OUT; })
    | ({ type: AUTH0_LOGIN_SUCCESS; payload: { auth0UserId: string; profile: any }; })
    | ({ type: LOGIN_FAILED; payload: { error: any; timestamp: any; }; })
    | ({ type: LOGGING_IN_PROGRESS; })
    | ({ type: LOGGING_IN_TO_PROCEED; })
    | ({ type: CHECKING_OUT_START; })
    | ({ type: CHECKING_OUT_END; })
    | ({ type: LOGIN_SUCCESS; payload: { userId: string; }; });



export const checkingOutStart = (): AuthAction => ({
    type: CHECKING_OUT_START,
});

export const checkingOutEnd = (): AuthAction => ({
    type: CHECKING_OUT_END,
});

export const profileFetched = (profile: any): AuthAction => ({
    type: PROFILE_FETCHED,
    payload: {
        ...profile,
        nickname: profile.nickname,
        picture: profile.picture,
    },
});

export const profileFetchFailed = (): AuthAction => ({
    type: PROFILE_FETCH_FAILED,
});

export const profileFetching = (): AuthAction => ({
    type: PROFILE_FETCHING,
});

export const loggingInToProceed = (): AuthAction => ({
    type: LOGGING_IN_TO_PROCEED,
});

export const loggingInProgress = (): AuthAction => ({
    type: LOGGING_IN_PROGRESS,
});


export const logIn = () => (dispatch) => {
    if (Auth.Instance.isTokenExpired) {
        if (!Auth.Instance.isExpiredTokenWithinGrantedPeriod) {
            logger.debug('(logIn action) token expired more than grated period, user will prompt for login');
            return Auth.Instance.login();
        }
    }
    return Auth.Instance.renewToken()
        .then((result) => dispatch(auth0loginSuccess(result)))
        .catch(err => {
            logger.error('(logIn action)initial login failed due to :[%j]', err);
            return Auth.Instance.login();
        });
};

export const unlink = (provider, connection) => (dispatch) => {
    return Auth.Instance.unlink(provider, connection);
};


export const connectAccount = () => (dispatch) => Auth.Instance.login();

export const loginWithPassword = ({ email, password }) => (dispatch) => {
    dispatch(loggingInProgress);

    Auth.Instance.loginWithPassword(email, password)
        .then((result) => {
            dispatch(auth0loginSuccess(result));
        })
        .catch(error => {
            const errorMsg = error.description || error.message || 'Unspecified error';
            return dispatch(loginFailed(errorMsg));
        });
};

export const logOut = (): (dispatch: Dispatch<AuthAction>) => AuthAction => (dispatch) => {
    Auth.Instance.logout();
    return dispatch(loggedOut());
};

export const loggedOut = () => ({
    type: LOGGED_OUT,
});

export function handleAuthentication() {
    return (dispatch: Dispatch<AuthAction>): any => {
        if (typeof window !== 'undefined') {
            Auth.Instance.handleAuthentication()
                .then((result) => dispatch(auth0loginSuccess(result)))
                .catch(err => dispatch(loginFailed(err)));
        }
    };
}
export const loginFailed = (error): AuthAction => {
    // clear any pending states
    Auth.Instance.cleanUp();
    const timestamp = Date.now();
    console.log('err', error);
    return {
        type: LOGIN_FAILED,
        payload: {
            error,
            timestamp,
        },
    };
};

export const auth0loginSuccess = (authResult: any): AuthAction => ({
    type: AUTH0_LOGIN_SUCCESS,
    payload: {
        auth0UserId: authResult.idTokenPayload.sub,
        profile: authResult.idTokenPayload,
    },
});

export function fetchProfile() {
    return async function (dispatch: Dispatch<AuthAction>, getState) {
        const state = getState();
        if (state.user && state.user.profile) {
            return dispatch(profileFetched(state.user.profile));
        }
        dispatch(profileFetching());
        try {
            const profile = await Auth.Instance.getProfile();
            return dispatch(profileFetched(profile));
        } catch (e) {
            return dispatch(profileFetchFailed());
        }
    };
}


// Probably not needed. Need to removed after next vist.
export const loginSuccess = (userId: string): AuthAction => ({
    type: LOGIN_SUCCESS,
    payload: {
        userId,
    },
});


