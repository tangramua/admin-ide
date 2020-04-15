import { Auth0UserProfile } from 'auth0-js';

export interface IAuthUser {
    username: string;
    email: string;
    emailVerified: string;
    givenName: string;
    familyName: string;
    picture: string;
}
export interface IUser {
    id: string;
    auth0UserId: string;
    profile: IUserProfile;
    isProfileFetching: boolean;
    isTokenExpired: boolean;
    isLoggingInToProceed: boolean;
}

export interface IUserProfile extends Auth0UserProfile {

}

