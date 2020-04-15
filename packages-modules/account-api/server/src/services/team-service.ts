
import * as _ from 'lodash';
import * as ILogger from 'bunyan';
import { inject, injectable } from 'inversify';
import {
    ITeam,
    ITeamCreateRequest,
    ITeamUpdateRequest,
    ITeamRemoveRequest,
    IOrganization,
    TeamMemberRole,
    TeamRole,
    ITeamInvitationRequest,
    IInvitation,
} from '@adminide-stack/account';

import { TYPES } from '../constants';
import { IOrganizationService, IOrganizationRepository, ITeamRepository, ITeamService, IWorkspaceStatusRequest } from '../interfaces';

@injectable()
export class TeamService implements ITeamService {

    private mailer: any;
    private logger: ILogger;

    constructor(
        @inject(TYPES.ITeamRepository)
        private repository: ITeamRepository,

        @inject('Logger')
        logger: ILogger,

        @inject('MailerService')
        mailer: any,
    ) {
        this.mailer = mailer;
        this.logger = logger.child({ className: TeamService });
    }

    public getUserTeams(userId: string) {
        return this.repository.getUserTeams(userId);
    }

    public async resendInvitation(id: string) {
        const invitation = await this.getInvitation(id);
        if (!invitation) {
            return false;
        }

        const team = await this.getTeam(invitation.teamId);
        const updates = _.assign(invitation, {
            active: true,
            inviteCount: 0,
        });

        this.repository.updateInvitation(updates);

        try {
            this.sendMail(invitation, team)
                .then(() => this.logger.debug(`Invitation ${id} has been resent to ${invitation.email}`))
                .catch((error) => this.logger.debug(`Cannot resent invitation ${id} to ${invitation.email}`, error));
        } catch (e) {
            this.logger.debug(`Cannot resent invitation!`);
        }

        return true;
    }

    public getInvitation(id: string) {
        return this.repository.findInvitationById(id);
    }

    private sendMail(invitation, team) {
        return this.mailer.send({
            subject: 'Invitation',
            to: invitation.email,
            templateId: 'invitation',
            from: 'adminide@dispostable.com',
            variables: {
                team,
                invitation,
            },
        });
    }

    public async sendInvitation(request: ITeamInvitationRequest) {
        const result = await this.repository.inviteUsers(request);
        const team = await this.repository.findTeamById(request.teamId);

        const unsent = _.filter(team.invitations, invitation => _.includes(request.emails, invitation.email));
        const results = await Promise.all(unsent.map(invitation => this.sendMail(invitation, team)));

        return true;
    }

    public acceptInvitation(id: string, user: any) {
        return this.repository.acceptInvitation(id, user);
    }

    public declineInvitation(id: string) {
        return this.repository.declineInvitation(id);
    }

    public createDefaultTeam(organization: IOrganization, user: any): Promise<ITeam> {
        const userId = user.user_id || user.sub;

        const request: ITeamCreateRequest = {
            description: `Default team for ${organization.name}`,
            teamMembers: [
                {
                    userId: userId,
                    email: user.email,
                    role: TeamMemberRole.MAINTAINER,
                },
            ],
            orgId: organization.id,
            name: organization.name,
        };
        return this.createTeam(request);
    }

    public async getTeam(id: string): Promise<ITeam> {
        let team;
        try {
            team = await this.repository.findTeamById(id);
        } catch (err) {
            throw new Error('Team id not found!');
        }
        return team;
    }

    public createTeam(organization: ITeamCreateRequest): Promise<ITeam> {
        return this.repository.createTeam(organization);
    }

    public updateTeam(organization: ITeamUpdateRequest): Promise<ITeam> {
        return this.repository.updateTeam(organization);
    }

    public workspaceStatus(request: IWorkspaceStatusRequest) {
        return this.repository.workspaceStatus(request);
    }

    public addWorkspaces(id: string, workspaces: string[]): Promise<ITeam> {
        return this.repository.addWorkspaces(id, workspaces);
    }

    public removeTeam(payload: ITeamRemoveRequest): Promise<boolean> {
        return this.repository.deleteTeam(payload);
    }
}
