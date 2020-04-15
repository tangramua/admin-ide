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
    AUTH0_LOGIN_SUCCESS,
} from '../../constants';
import { IUser } from '@adminide-stack/user-core';
import { AuthAction as Action } from '../actions';
import { Auth } from '../../auth';
import { logger } from '@cdm-logger/client';


export function user(
    userState: IUser = {
        id: '',
        isProfileFetching: false,
        isTokenExpired: Auth.Instance.isTokenExpired,
        auth0UserId: Auth.Instance.auth0UserId,
        isLoggingInToProceed: false,
        profile: null,
    },
    action: Action,
): IUser {
    switch (action.type) {
        case PROFILE_FETCHED: {
            const profile = action.payload;

            return { ...userState, isProfileFetching: false, profile };
        }
        case PROFILE_FETCH_FAILED: {
            return { ...userState, isProfileFetching: false, profile: null };
        }
        case PROFILE_FETCHING: {
            return { ...userState, isProfileFetching: true };
        }
        case AUTH0_LOGIN_SUCCESS: {
            const { auth0UserId, profile } = action.payload;
            logger.debug('AUTH0_LOGIN_SUCCESS action-payload: [%j]', action.payload);
            return {
                ...userState,
                isProfileFetching: false,
                profile,
                isTokenExpired: Auth.Instance.isTokenExpired,
                auth0UserId,
            };
        }
        case LOGIN_FAILED: {
            return { ...userState, isProfileFetching: false, profile: null };
        }
        case LOGGED_OUT: {
            return {
                ...userState,
                isProfileFetching: false,
                profile: null,
                auth0UserId: '',
                id: '',
            };
        }
        case LOGGING_IN_TO_PROCEED: {
            return { ...userState, isLoggingInToProceed: true };
        }
        case LOGIN_SUCCESS: {
            const { userId: id } = action.payload;

            return {
                ...userState,
                id,
            };
        }
        default:
            return userState;
    }
}
