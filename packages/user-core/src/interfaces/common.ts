import { IAuthUser } from './user';
import { Auth0UserProfile, Auth0Identity } from 'auth0-js';


export type GraphQLUserContext = {
    user?: IAuthUser;
    profile?: Auth0UserProfile;
};
