

/**
 * Teams are groups of organization members that reflect yoru company or group's structure
 * with cascading access permissions and mentions.
 *
 * @property
 * name: The name of the team
 * @property
 * description: Description of the team.
 * @property
 * orgId: The organization to which the team belongs.
 * @property
 * parentTeam: The parent team of the team.
 * @property
 * tags: Arbitrary tags that the team uses.
 * @property
 * invitations: The outstanding invitations to join the team.
 * @property
 * teamMembers: Team members.
 */
export interface ITeam {
    id?: string;
    name: string;
    description?: string;
    orgId: string;
    parentTeam?: ITeam;
    tags?: string[];
    invitations?: IInvitation[];
    teamMembers: ITeamMember[];
    updatedAt?: Date;
    createdAt?: Date;
    workspaces?: string[];
}

export interface IWorkspaceObject {
    status: any;
    workspaceId: string;
}

/**
 * TeamMember: A member of a team.
 */
export interface ITeamMember {
    id?: string;
    userId: string;
    email?: string;
    [key: string]: any;
    connector_id?: string;
    role: TeamMemberRole;
    workspaces?: IWorkspaceObject[];
}

/**
 * Inivitation to become a team member.
 *
 * @property
 * email: The email of the inventee
 * @property
 * fullName: The name of the invitee, derived from an RFC5322 email string
 * @property
 * invitedBy: The teamMemberId of the person that sent the invitation
 * @property
 * teamId: The team invited to
 * @property
 * tokenExpiration: The datestamp of when the invitation will expire.
 * @property
 * inviteCount: How many invites have been sent to this email address?
 * @property
 * acceptedAt: The datetime the invitation was accepted.
 * @property
 * createdAt: The datetime the invitation was created.
 * @property
 * updatedAt: The datetime the invitation was last updated.
 */
export interface IInvitation {
    id?: string;
    email: string;
    fullName?: string;
    teamId: string;
    active?: boolean;
    inviteCount: number;
    role: TeamRole;
    tokenExpiration: Date;
    invitedBy?: string;
    acceptedAt?: Date;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface ITeamInvitationRequest {
    teamId: string;
    emails: string[];
    invitedBy: string;
}

/**
 * TeamRole: The role of a user on a team.
 * @property
 * ADMIN: User has admin rights on the team.
 * MEMBER: User is a member of the team.
 */
export enum TeamRole {
    ADMIN = 'ADMIN',
    MEMBER = 'MEMBER',
}

/**
 * TeamMemberRole: The possible team member roles; either 'maintainer' or 'member'.
 * @property
 * MAINTAINER: A team maintainer has permission to add and remove team members.
 * MEMBER: A team member has no administrative permissions on the team.
 */
export enum TeamMemberRole {
    MAINTAINER = 'MAINTAINER',
    MEMBER = 'MEMBER',
}

export interface ITeamCreateRequest {
    name: string;
    orgId: string;
    tags?: string[];
    parentTeam?: ITeam;
    description?: string;
    teamMembers: ITeamMember[];
    invitations?: IInvitation[];
}

export interface ITeamUpdateRequest {
    id: string;
    payload: ITeam;
    requestedUserId?: string;
}

export interface ITeamRemoveRequest {
    id: string;
    requestedUserId?: string;
}
