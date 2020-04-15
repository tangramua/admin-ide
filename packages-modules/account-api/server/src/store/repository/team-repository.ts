import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { injectable, inject, optional } from 'inversify';
import {
    ITeam,
    IInvitation,
    ITeamCreateRequest,
    ITeamUpdateRequest,
    ITeamRemoveRequest,
    ITeamInvitationRequest,
    TeamRole,
    ITeamMember,
    TeamMemberRole,
    IWorkspaceObject,
} from '@adminide-stack/account';
import { ITeamRepository } from '../../interfaces';
import { TeamModelType, TeamModelFunc, ITeamModel } from '../models';
import { IMongoOptions } from '@common-stack/store-mongo';
import * as mongoose from 'mongoose';
import { IWorkspaceStatusRequest } from '../../interfaces/status';

@injectable()
export class TeamRepository implements ITeamRepository {
    private logger: Logger;
    private model: TeamModelType;
    private options: IMongoOptions;


    constructor(
        @inject('MongoDBConnection')
        db: mongoose.Connection,

        @inject('Logger')
        logger: Logger,

        @inject('MongoOptions')
        @optional()
        options?: any,
    ) {
        if (!db) {
            throw new Error('A database connection is required');
        }
        this.model = TeamModelFunc(db);
        this.logger = logger.child({ className: 'TeamRepository' });
    }

    public async inviteUsers(request: ITeamInvitationRequest) {
        const team: ITeamModel = await this.findTeamById(request.teamId);
        const records = _.map(request.emails, email => ({
            email,
            active: true,
            inviteCount: 0,
            role: TeamRole.MEMBER,
            createdAt: new Date(),
            updatedAt: new Date(),
            teamId: request.teamId,
            tokenExpiration: new Date(),
            invitedBy: request.invitedBy,
        } as IInvitation));

        // Remove invitation duplicates and update existing
        const unchanged = _.filter(team.invitations, invitation => !_.includes(request.emails, invitation.email));
        const invitations = _.concat(unchanged, records);

        return await this.model.update({ _id: request.teamId }, { invitations: _.uniqBy(invitations, 'email') });
    }

    public async getUserTeams(userId: string) {
        return await this.model.find({ 'teamMembers.userId': userId }) as ITeam[];
    }

    public async createTeam(newTeam: ITeamCreateRequest) {
        this.logger.trace('createTeam with params (%j)', newTeam);
        return this.model.create({ ...newTeam });
    }

    public async declineInvitation(id: string) {
        try {
            const team = await this.model.findOne({ 'invitations._id': id });
            if (!team) {
                throw new Error(`Team ${id} not found!`);
            }

            const invitation = await this.findInvitationById(id);
            if (!invitation) {
                throw new Error(`Invitation ${id} not found!`);
            }

            invitation.active = false;
            invitation.updatedAt = new Date();

            const result = await this.model.update({ _id: team._id }, {
                invitations: team
                    .invitations
                    .map(record => record.id === invitation.id ? invitation : record),
            });

            return true;
        } catch (e) {
            return false;
        }
    }

    public async acceptInvitation(id: string, user: any) {
        const team = await this.model.findOne({ 'invitations._id': id });
        if (!team) {
            throw new Error(`Team ${id} not found!`);
        }

        const invitation = await this.findInvitationById(id);
        if (!invitation) {
            throw new Error(`Invitation ${id} not found!`);
        }

        invitation.active = false;
        invitation.acceptedAt = new Date();

        const teamMembers = team.teamMembers || [];

        const teamMember: ITeamMember = {
            email: user.email,
            role: invitation.role === TeamRole.MEMBER
                ? TeamMemberRole.MEMBER
                : TeamMemberRole.MAINTAINER,
            userId: user.user_id || user.sub,
        };

        try {
            const result = await this.model.update({ _id: team._id }, {
                invitations: team
                    .invitations
                    .map(record => record.id === invitation.id ? invitation : record),
                teamMembers: teamMembers.concat([teamMember]),
            });

            return true;
        } catch (e) {
            return false;
        }
    }

    public async findTeamById(id: string) {
        return await this.model.findById(id);
    }

    public async updateTeam(payload: ITeamUpdateRequest) {
        const ok = await this.model.update({ _id: payload.id }, payload);
        return this.model.findOne({ _id: payload.id }).exec();
    }

    public async addWorkspaces(id: string, workspaces: string[]) {
        this.logger.debug('(addWorkspaces) adding workspace to Team id [%s], workspace: [%j]', id, workspaces);
        const team: ITeamModel = await this.model.findOne({ _id: id }).exec();

        const list = (team.workspaces || []).concat(workspaces);
        const ok = await this.model.update({ _id: id }, { workspaces: _.uniq(list) });
        return await this.model.findOne({ _id: id }).exec();
    }

    public async workspaceStatus(request: IWorkspaceStatusRequest) {
        this.logger.debug('(workspaceStatus) update workspace status with request [%j]', request);
        const team = await this.findTeamById(request.team);
        const members = team.teamMembers as ITeamMember[];
        const membership = _.find(members, (memship: ITeamMember) => memship.userId === request.user);

        if (!membership) {
            throw new Error('Membership not found');
        }

        const workspace = _.find(membership.workspaces,
            (wrkspace: IWorkspaceObject) => wrkspace.workspaceId === request.workspace) as IWorkspaceObject;
        if (!workspace) {
            throw new Error('Workspace not found');
        }

        return workspace.status;
    }

    public async findInvitationById(id: string): Promise<IInvitation> {
        const team = await this.model.findOne({ 'invitations._id': id }).exec();
        return _.find(team.invitations, invitation => invitation.id.toString() === id) as IInvitation;
    }

    public async updateInvitation(invitation: IInvitation): Promise<boolean> {
        const team = await this.model.findOne({ 'invitations._id': invitation.id }).exec();
        team.invitations = _.map(team.invitations, record => record.id.toString() === invitation.id ? invitation : record);

        const ok = await team.save();

        return !!ok;
    }

    public async deleteTeam(payload: ITeamRemoveRequest) {
        try {
            this.logger.debug('deleteTeam with payload [%j', payload);
            const deleteRecord = await this.model.deleteOne({ _id: payload.id }).exec();
            return deleteRecord.ok === 1 && deleteRecord.n === 1;
        } catch (e) {
            this.logger.error('delete workspace with payload (%j) failed due to (%j)', payload, e);
            return false;
        }
    }
}
