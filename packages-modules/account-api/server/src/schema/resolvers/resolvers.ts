import { TeamMemberRole } from '@adminide-stack/account';
import { PubSub } from 'graphql-subscriptions';
import * as Logger from 'bunyan';
import { IResolverOptions } from '@common-stack/server-core';
import { ITeamService, IOrganizationService } from '../../interfaces';

type IContext = { teamService: ITeamService, user: any, organizationService:  IOrganizationService};


export const resolvers: any = (options: IResolverOptions) => ({
    Organization: {
        isBillingLeader(root, args, { user }) {
            const userId = user.id;

        },
    },
    Query: {
        team: (root, { team }, { teamService, ...context }: IContext) => {
            options.logger.trace('(Query.team) args [%j]', team);
            return teamService.getTeam(team);
        },
        invitation: (root, { id }, { teamService, ...context }: IContext) => {
            options.logger.trace('(Query.invitation) args [%j]', id);
            return teamService.getInvitation(id);
        },
        teams: (root, args, { teamService, user, ...context }: IContext) => {
            options.logger.trace('(Query.teams) args [%j]', args);

            if (!user) {
                return [];
            }

            return teamService.getUserTeams(user._id || user.sub);
        },
        organizations: (root, args, { organizationService, user, ...context }: IContext) => {
            options.logger.trace('(Query.organizations) args [%j]', args);
            if (!user) {
                return [];
            }

            return organizationService.getUserOrganizations(user._id || user.sub);
        },

    },
    Mutation: {
        createTeam: (root, { request }, { user, ...context }: IContext) => {
            return context.teamService.createTeam(Object.assign({}, request, {
                teamMembers: [
                    {
                        userId: user.user_id || user.sub,
                        email: user.email,
                        role: TeamMemberRole.MAINTAINER,
                    },
                ],
            }));
        },
        resendInvitation: async (root, { id }, { teamService, user, ...context }: IContext) => {
            options.logger.trace('(Mutation.resendInvitation) args [%j]', id);
            return teamService.resendInvitation(id)
                .then(() => true)
                .catch((err) => true);
        },

        declineInvitation: (root, { id }, { teamService, user, ...context }: IContext) => {
            options.logger.trace('(Mutation.declineInvitation) args [%j]', id);
            return teamService.declineInvitation(id);
        },
        acceptInvitation: (root, { id }, { teamService, user, ...context }: IContext) => {
            options.logger.trace('(Mutation.acceptInvitation) args [%j]', id);
            return teamService.acceptInvitation(id, user);
        },
        sendInvitation: (root, { request }, { teamService, ...context }: IContext) => {
            options.logger.trace('(Mutation.acceptInvitation) args [%j]', request);
            return teamService.sendInvitation(request)
                .then(() => true)
                .catch((err) => true);
        },
    },
});
