import {
    ITeam,
    IOrganization,
    ITeamCreateRequest,
    ITeamUpdateRequest,
    ITeamRemoveRequest,
    ITeamInvitationRequest,
    IInvitation,
} from '@adminide-stack/account';

import { IWorkspaceStatusRequest } from './status';

export interface ITeamService {
    getTeam(id: string): Promise<ITeam>;

    getUserTeams(userId: string): Promise<ITeam[]>;

    createTeam(team: ITeamCreateRequest): Promise<ITeam>;

    updateTeam(team: ITeamUpdateRequest): Promise<ITeam>;

    addWorkspaces(id: string, workspaces: string[]): Promise<ITeam>;

    workspaceStatus(request: IWorkspaceStatusRequest): Promise<string>;

    resendInvitation(id: string): Promise<boolean>;

    removeTeam(team: ITeamRemoveRequest): Promise<boolean>;

    getInvitation(id: string): Promise<IInvitation>;

    sendInvitation(request: ITeamInvitationRequest): Promise<any>;

    createDefaultTeam(organiztion: IOrganization, user: any): Promise<ITeam>;

    acceptInvitation(id: string, user: any): Promise<boolean>;

    declineInvitation(id: string): Promise<boolean>;
}
