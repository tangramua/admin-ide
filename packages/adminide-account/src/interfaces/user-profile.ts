import { Auth0UserProfile } from 'auth0-js';
/**
 * Contract for user profile
 * @export
 * @interface UserProfile
 */
export interface IUserProfile extends Auth0UserProfile {

}


/**
 * The User Account.
 *
 * @property
 * id: User ID
 * @property
 * email: The user email
 * @property
 * emailVerified: ture if email is verified, otherwise false
 * @property
 * featureFlags: Any super power given to the user via a super user
 * @property
 * identities: An array of objects with information about the user's identities.
 *             More than one will exists in case accounts are linked.
 * @property
 * inactive: true if the user is not currently being billed for service.
 * @property
 * isBillingLeader: true if user is BillingLeader
 * @property
 * userOgs: the orgs and roles for this user on each.
 *
 */
export interface IUserAccount {
    id: string;
    email: string;
    emailVerified?: boolean;
    // featureFlags: IUserFeatureFlags;
    notificationEmail?: string;
    alias: string[];
    name: string;
    defaultOrg: string;
    defaultTeam: string;
    defaultKey: string;
    createdAt?: Date;
    updatedAt?: Date;
    // for storing additional values
    [key: string]: any;
}

/**
 * The user/org M:F join, denormalized on the user/org tables.
 */
export interface IUserOrg {
    orgId: string;
    role: OrgUserRole;
    inactive?: boolean;
}


export enum OrgUserRole {
    BILLING_LEADER = 'BILLING_LEADER',
    MEMBER = 'MEMBER',
    ADMIN = 'ADMIN',
    OWNER = 'OWNER',
}


export interface IUserAccountCreateRequest {
    email: string;
    name: string;
    notificationEmail?: string;
    emailVerified?: string;
    alias: string[];
    defaultOrg: string;
    defaultTeam: string;
    [key: string]: any;
}

export interface IUserAccountUpdateRequest {
    id: string;
    payload: IUserAccount;
}

export interface IUserAccountRemoveRequest {
    id?: string;
}