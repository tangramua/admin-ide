import * as _ from 'lodash';
import { IDirectiveOptions } from '@common-stack/server-core';
import { IUserAccount } from '@adminide-stack/account';
import { logger } from '@cdm-logger/server';

export const workspaceDirectives = (options: IDirectiveOptions) => ({
    async addWorkspaceMetadata(next, source, args, context) {
        if (!context.organizationService) {
            throw new Error('organizationService need to be exist in the context');
        }
        const accountId = _.get(context.profile, 'app_metadata.accountId', null);
        const account: IUserAccount = await context.accountService.findAccountByUser(_.get(context.user, 'sub'));
        logger.trace('(workspaceDirectives) account details of the current user is [%j]', account);

        context.workspaceMetadata = {
            accountId,
            identity: context.profile.identities,
            orgId: account ? account.defaultOrg : null,
            teamId: account ? account.defaultTeam : null,
            stripeCustomerId: account ? account.stripeCustomerId : null,
            stripeSubscriptionId: account ? account.stripeSubscriptionId : null,
        };
        return next();
    },
    async addNamespaceToMetadata(next, source, args, context) {
        if (!context.accountService || !context.organizationService || !context.workspaceMetadata) {
            throw new Error('accountService and organizationService need to be exist in the context');
        }
        const orgId = _.get(context.workspaceMetadata, 'orgId', null);

        // get the organization of the current one in the context.
        const organization = await context.organizationService.getOrganization(orgId);
        const namespace = organization ? organization.namespace : 'testns';
        const metadata = _.get(context, 'workspaceMetadata', {});
        context.workspaceMetadata = { ...metadata, namespace };
        logger.trace('(addNamespaceToMetadata) modified workspaceMetadata context [%j]', context.workspaceMetadata);
        return next();
    },
});
