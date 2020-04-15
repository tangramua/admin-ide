import { PubSub, withFilter } from 'graphql-subscriptions';
import { IWorkspaceService, IUserMetadata } from '../../interfaces';
import {
    IWorkspace, IWorkspaceCreate_Input, IWorkspaceRemove_Input, IWorkspaceUpdate_Input,
    WorkspaceServerEvents, IWorkspaceMetadata, IWorkspaceStop_Input, IWorkspaceStart_Input,
} from '@adminide-stack/core';
import { IResolverOptions } from '@common-stack/server-core';
import * as Logger from 'bunyan';
import * as _ from 'lodash';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
import { transformWorkspace, transformToUserProject, transformToUserSecrets } from './utils';
import { IUserAccount } from '@adminide-stack/account';
import { request } from 'http';

export const resolver: any = (options: IResolverOptions) => ({

    Workspace: {
        connectionId: (root, atgs, context) => {
            const userId = context.user.sub;
            const membership = _.find(root.team.teamMembers, record => record.userId.toString() === userId.toString());

            return _.get(membership, 'connectionId');
        },
        async matches(root, { id }, ctx: { workspaceService: IWorkspaceService }) {
            const workspaces = await ctx.workspaceService.listWorkspaces(id);
            return workspaces.filter(workspace => workspace.name !== root.name);
        },
    },

    Query: {
        getWorkspaceStatus: async (root, { id }, { user, ...ctx }) => {
            const workspace = await ctx.workspaceService.getWorkspace(id);
            return ctx.teamService.workspaceStatus({
                workspace: id,
                team: workspace.teamId,
                user: user.user_id || user.sub,
            });
        },
        workspaces(root, args, ctx) {
            options.logger.trace('(Query.workspaces) received request for workspaces with arg (%j)', args);
            const orgId = _.get(ctx.workspaceMetadata, 'orgId');
            if (!orgId) {
                options.logger.warn('(Query.workspaces) metadata of workspace request should not be empty. (%j)', args);
                throw new Error('OrgId is needed');
            }
            options.logger.trace('(Query.workspaces) pulling the list of workspaces for orgId: [%s]', orgId);
            return ctx.workspaceService.listWorkspaces(orgId);
        },
        async workspace(root, args, ctx) {
            options.logger.trace('(Query.workspaces) received request for workspace with arg (%j)', args);
            let workspaceTrace;
            if (options.tracer) {
                workspaceTrace = options.tracer.serverTracer.startSpan('-------WorkspaceRequest----------');
            }

            const workspace =  await ctx.workspaceService.getWorkspace(args.id);

            if (workspaceTrace) {
                workspaceTrace.finish();
            }

            return workspace;
        },
    },

    Mutation: {
        async addWorkspace(root, args: { request: IWorkspaceCreate_Input },
            ctx: {
                teamService: any,
                workspaceService: IWorkspaceService,
                workspaceMetadata: IWorkspaceMetadata,
                profile: any,
                sshKeyData: any,
            }) {
            options.logger.trace('(Mutation.addWorkspace) received request (%j)', args);
            const metadata = ctx.workspaceMetadata;
            options.logger.trace('(Mutation.addWorkspace) workspaceMetadata (%j)', metadata);

            let filledWorkspaceRequest = transformWorkspace(args.request, metadata);
            const userSecrets = transformToUserSecrets(ctx.sshKeyData, ctx.profile);
            const userProjects = transformToUserProject(filledWorkspaceRequest.projects, ctx.profile);
            const userMetadata: IUserMetadata = {
                secrets: userSecrets,
                projects: userProjects,
            };
            options.logger.trace('---userMetadata: [%j]', userMetadata);
            const result = await ctx.workspaceService.createWorkspace(filledWorkspaceRequest, userMetadata);
            ctx.teamService.addWorkspaces(args.request.teamId, [result.id]);
            return result;
        },
        addStacks: (root, { workspace, stacks }, { workspaceService }) => workspaceService.addStacks(workspace, stacks),
        addProject: (root, { workspace, project }, { workspaceService }) => workspaceService.addProject(workspace, project),
        updateWorkspace(root, args: { request: IWorkspaceUpdate_Input },
            ctx: { workspaceService: IWorkspaceService, workspaceMetadata: IWorkspaceMetadata, profile: any }) {
            const userMetadata = { userId: ctx.profile.user_id, userName: ctx.profile.userName, userEmail: ctx.profile.userEmail };
            return ctx.workspaceService.updateWorkspace({ ...args.request });
        },
        startWorkspace(root, args: { request: IWorkspaceStart_Input },
            ctx: { workspaceService: IWorkspaceService, workspaceMetadata: IWorkspaceMetadata }) {
            return ctx.workspaceService.startWorkspace(args.request);
        },
        stopWorkspace(root, args: { request: IWorkspaceStop_Input },
            ctx: { workspaceService: IWorkspaceService, workspaceMetadata: IWorkspaceMetadata }) {
            return ctx.workspaceService.stopWorkspace(args.request);
        },
        removeWorkspace(root, args: { request: IWorkspaceRemove_Input },
            ctx: { workspaceService: IWorkspaceService, workspaceMetadata: IWorkspaceMetadata }) {
            options.logger.trace('(Mutation.removeWorkspace)received args (%j)', args.request);
            return ctx.workspaceService.removeWorkspace({ ...args.request, orgId: ctx.workspaceMetadata.orgId });
        },
        setEnvVariables(root, { request }, ctx) {
            return ctx.workspaceService.setEnvVariables(request);
        },
    },
    Subscription: {
        subscribeToWorkspace: {
            // resolve: (payload, args, context, info) => {
            //     // update the database when needed.
            //     console.log('------resolve----', payload);
            //     return payload;

            // },
            subscribe: withFilter(
                (rootValue, args, context, info) => options.pubsub.asyncIterator([
                    WorkspaceServerEvents.WORKSPACE_CREATED_EVENT,
                    WorkspaceServerEvents.WORKSPACE_REMOVED_EVENT,
                    WorkspaceServerEvents.WORKSPACE_STARTED_EVENT,
                    WorkspaceServerEvents.WORKSPACE_STOPPED_EVENT,
                    WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT,
                ]),
                async (payload, variables, context: { profile: any, accountService: any }) => {
                    options.logger.trace('(subscribeToWorkspace) event payload [%j] ', payload);
                    // due to issue https://github.com/apollographql/graphql-tools/issues/886
                    // directives may not mutate context

                    const accountId = _.get(context.profile, 'app_metadata.accountId', null);
                    const account: IUserAccount = await context.accountService.findAccountById(accountId);
                    const orgId = account ? account.defaultOrg : null;
                    const payloadOrgId = _.get(payload, 'subscribeToWorkspace.value.orgId', null);
                    options.logger.debug('(subscriptionToWorkspace) to send  :[%s] for subscribed org: [%s]', payloadOrgId, orgId);
                    return payloadOrgId === orgId;
                }),
        },
    },
});

