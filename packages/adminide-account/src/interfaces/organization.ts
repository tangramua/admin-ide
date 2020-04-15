import { IUserAccount, OrgUserRole } from './user-profile';
/**
 * The tier of the Organization
 */
export enum TierEnum {
    PERSONAL = 'PERSONAL',
    PRO = 'PRO',
    ENTERPRISE = 'ENTERPRISE',
}


/**
 * Organization: A groups of people can collaborate accross many
 * workspaces/projects at the same time in organization accounts.
 *
 * @property
 * name: The name of the organization
 * @property
 * namespace: The parent namespace which will be used in workspaces
 * @property
 * picture: The org avatar
 * @property
 * isBillingLeader: true if the viewer is the billing leader for the org
 * @property
 * mainBilingLeaderId: The billing leader of the organization (or the first, if more than 1)
 * @property
 * billingEmail: The billing email for the organization.
 * @property
 * periodStart: The datetime the curren billing cycle starts.
 * @property
 * periodEnd: The datetime the current billing cycle ends.
 * @property
 * stripeId: The customerId from stripe.
 * @property
 * stripeSubscriptionId: The subscriptionId from stripe.
 */
export interface IOrganization {
    id?: string;
    description?: string;
    name: string;
    namespace: string;
    picture?: string;
    orgMembers?: IOrgUser[];
    tier: TierEnum;
    orgUserCount?: number;
    billingLeaders: string[];
    isBillingLeader?: boolean;
    mainBillingLeaderId?: string;
    billingEmail?: string;
    periodStart?: Date;
    periodEnd?: Date;
    stripeId?: string;
    stripeSubscriptionId?: string;
    createdAt?: Date;
    updatedAt?: Date;
    // TO DO add Resource limitation
}

export interface IOrgUser {
    userId: string;
    role: OrgUserRole;
    inactive?: boolean;
}


/**
 * User provided data to create workspace.
 */
export interface IOrganizationCreateRequest {
    name: string;
    description?: string;
    namespace: string;
    picture?: string;
    orgMembers?: IOrgUser[];
    tier: TierEnum;
    billingLeaders: string[];
    mainBillingLeaderId?: string;
    periodStart?: Date;
    periodEnd?: Date;
    stripeId?: string;
    stripeSubscriptionId?: string;
}

export interface IOrganizationUpdateRequest {
    id: string;
    requestedUserId?: string;
    payload: IOrganization;
}

export interface IOrganizationRemoveRequest {
    id: string;
    requestedUserId?: string;
}

/**
 * OrganizationInvitationRole: The possible organization invitation roles.
 *
 * @property
 * ADMIN: The user is invited to be an admin of the organization
 * BILLING_MANAGER: The user is invited to be a billing manager of the organization.
 * DIRECT_MEMBER: The user is invited to be a direct member of the organization.
 * REINSTATE: The user's previous role will be reinstated.
 */
export enum OrgainizationInvitationRole {
    ADMIN = 'ADMIN',
    BILLING_MANAGER = 'BILLING_MANAGER',
    DIRECT_MEMBER = 'DIRECT_MEMBER',
    REINSTATE = 'REINSTATE',
}
