import { createSelector } from 'reselect';
import { IUser, IUserProfile } from '@adminide-stack/user-core';
import { Store } from '../interfaces';

export const userSelector = (state: Store.Auth): IUser => state.user;

export const userProfileSelector: (state: Store.Auth) => IUserProfile = createSelector(
    userSelector,
    user => user.profile,
);

export const userAuth0UserIdSelector: (state: Store.Auth) => string = createSelector(
    userSelector,
    user => user.auth0UserId,
);

export const userIdSelector: (state: Store.Auth) => string = createSelector(
    userSelector,
    user => user.id,
);

export const isLoggingInToProceedSelector: (state: Store.Auth) => boolean = createSelector(
    userSelector,
    user => user.isLoggingInToProceed,
);

export const isAuthenticatedSelector: (state: Store.Auth) => boolean = createSelector(
    userSelector,
    user => !!user.auth0UserId && !user.isTokenExpired,
);

export const isAuthenticatingSelector: (state: Store.Auth) => boolean = createSelector(
    userSelector,
    user => user.isLoggingInToProceed,
);

