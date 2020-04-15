
import { ITeam, ITeamCreateRequest, ITeamUpdateRequest, ITeamRemoveRequest, ITeamInvitationRequest, IInvitation } from '@adminide-stack/account';

import { IWorkspaceStatusRequest } from './status';

/**
 * Repository for Team, preferbly No Sql
 */
export interface ITeamRepository {
    /**
     * Creates a new team
     */
    createTeam(organization: ITeamCreateRequest): Promise<ITeam>;
    /**
     * Find a team
     */
    findTeamById(id: string): Promise<ITeam>;
    /**
     * Updates a existing team
     */
    updateTeam(team: ITeamUpdateRequest): Promise<ITeam>;

    addWorkspaces(id: string, workspaces: string[]): Promise<ITeam>;

    workspaceStatus(request: IWorkspaceStatusRequest): Promise<string>;

    /**
     * Removes a existing team
     */
    deleteTeam(team: ITeamRemoveRequest): Promise<boolean>;

    /**
     * Get teams
     */
    getUserTeams(userId: string): Promise<ITeam[]>;

    inviteUsers(request: ITeamInvitationRequest): Promise<any>;

    findInvitationById(id: string): Promise<IInvitation>;

    updateInvitation(invitation: IInvitation): Promise<boolean>;

    acceptInvitation(id: string, user: any): Promise<boolean>;

    declineInvitation(id: string): Promise<boolean>;
}
