import * as _ from 'lodash';
import * as moment from 'moment';

import { IGitRepository } from '../services/IGitRepository';
import { IGitService } from '../services/IGitService';

enum PROVIDER_STATE {
    LINKED = 'LINKED',
    BROKEN = 'BROKEN',
    EXPIRED = 'EXPIRED',
    NOT_CONNECTED = 'NOT_CONNECTED',
}

const identity = (connection, context) =>
    _.find(
        _.get(context, 'profile.identities', []),
        record => record.connection.toLowerCase() === connection.toLowerCase(),
    );

const match = (records, def) => (value, context = {}) => {
    const fn = records.hasOwnProperty(value) ? records[value] : def;
    return fn(value, context);
};

const getService = match({
    github: (val, { dataSources }) => dataSources.github,
    gitlab: (val, { dataSources }) => dataSources.gitlab,
    bitbucket: (val, { dataSources }) => dataSources.bitbucket,
}, (value) => { throw new Error(`Provider ${value} doesn't supporrted!`); });

const getOptions = (connection, context) => ({
    profile: context.profile,
    identity: identity(connection, context),
});

const createHandler = async (input, context, fn) => {
    try {
        const profile = identity(input.provider, context);
        const { profileData = {} } = profile;

        const service = getService(input.provider, context);
        const options = getOptions(input.provider, context);

        if (!service) {
            throw new Error(`Cannot create service for ${input.provider}`);
        }

        const result = await fn(service, options, profileData);

        return result;
    } catch (e) {
        console.log(e);
        throw new Error(e);
    }
};

const getProviderStatus = async (provider, context) => {
    try {
        const profile = identity(provider, context);
        const { profileData = {} } = profile;

        if (!profile) {
            // return PROVIDER_STATE.NOT_CONNECTED;
            throw new Error(`Provider ${provider} not linked with account!`);
        }

        const service = getService(provider, context);
        const options = getOptions(provider, context);

        let user = await service.user({ provider }, options);

        // if (moment()
        //     .diff(moment(
        //         profileData.last_login
        //         || profileData.current_sign_in_at,
        //         ), 'days') >= 1) {
        //     return PROVIDER_STATE.EXPIRED;
        // }

        return user
            ? PROVIDER_STATE.LINKED
            : PROVIDER_STATE.BROKEN;
    } catch (e) {
        const status = _.get(e, 'extensions.response.status', 500);
        return  parseInt(status, null) === 401
            ? PROVIDER_STATE.EXPIRED
            : PROVIDER_STATE.NOT_CONNECTED;
    }
};

const getStateRow = async (provider, context) => {
    const profile = identity(provider, context) as any;
    const status = await getProviderStatus(provider, context);

    return {
        status,
        user: _.get(profile, 'user_id'),
        access_token: _.get(profile, 'access_token'),
    };
};

export const resolver: any = (options: any) => ({
    GitProvidersState: {
        gitlab: (root, args, context) => getStateRow('gitlab', context),
        github: (root, args, context) => getStateRow('github', context),
        bitbucket: (root, args, context) => getStateRow('bitbucket', context),
    },
    GitServiceBranch: {
        commit: async (root, args, { GitService, ...context }) =>
            _.isObject(root.commit)
                ? root.commit
                : createHandler(root.__input, context, (service, opts, profile) =>
                    service.commit({ ...root.__input, commit: root.commit }, opts, profile)),
    },
    Query: {
        getGitProvidersState: () => ({ ok: true }),
        getGitProfiles: (root, args, { GitService, ...context }) => GitService.fromContext(context).profiles(),
        getGitProviders: (root, args, { GitService, ...context }) => GitService.fromContext(context).providers(),

        getGitBranches: (root, { input }, context) =>
            createHandler(input, context, (service, opts, profile) => service.branches(input, opts, profile)),
        getGitPullRequests: (root, { input }, context) =>
            createHandler(input, context, (service, opts, profile) => service.requests(input, opts, profile)),
        getGitRepositories: (root, { input }, context) =>
            createHandler(input, context, (service, opts, profile) => service.repositories(input, opts, profile)),
    },
});
