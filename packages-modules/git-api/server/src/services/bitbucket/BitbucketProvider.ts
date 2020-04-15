import * as url from 'url';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';

import { IGitRepository, IBranch, ICommit } from '../IGitRepository';
import { IBitbucketRepository, IBitbucketBranch } from './IBitbucketRepository';
import { IGitService, IGitTransform, IServiceInput, EProviderRoutes, AbstractProvider } from '../IGitService';

export class BitbucketTransorm implements IGitTransform {
    public name = 'bitbucket';

    public user(input: any) {
        return input as any;
    }

    public branch(input: any, __input: any) {
        return {
            __input,
            name: input.name,
            commit: input.target.hash,
        } as any;
    }

    public commit(input: any) {
        return input as any;
    }

    public request(input: any) {
        return input as any;
    }

    public repository(input: IBitbucketRepository): IGitRepository {

        const clone = {
            ssh: input.links.clone.find(record => record.name === 'ssh'),
            https: input.links.clone.find(record => record.name === 'https'),
        };

        return {
            id: input.uuid,
            name: input.name,
            path: input.full_name,
            private: input.is_private,
            createdAt: input.created_on,
            updatedAt: input.updated_on,
            description: input.description,
            owner: _.get(input, 'owner.username'),
            clone: {
                ssh: _.get(clone, 'ssh.href'),
                https: _.get(clone, 'https.href'),
            },
        };
    }
}

export class BitbucketProvider extends AbstractProvider implements IGitService {
    public transform = new BitbucketTransorm();
    public basepath = 'https://api.bitbucket.org';

    public routes = {
        [EProviderRoutes.USER]: (input, identity) => `/2.0/user`,

        [EProviderRoutes.SEARCH]: (input, identity) =>
            `/2.0/repositories?q=name~"${input.query}"`,

        [EProviderRoutes.REPOSITORIES]: (input, identity, profile) =>
            `/2.0/repositories/${this.nick(identity, input, profile)}`,

        [EProviderRoutes.BRANCHES]: (input, identity, profile) =>
            `/2.0/repositories/${this.nick(identity, input, profile)}/${input.repository}/refs/branches`,

        [EProviderRoutes.PULL_REQUEST]: (input, identity, profile) =>
            `/2.0/repositories/${this.nick(identity, input, profile)}/${input.repository}/pullrequests`,

        [EProviderRoutes.COMMIT]: (input, identity, profile) =>
            `/2.0/repositories/${this.nick(identity, input, profile)}/${input.repository}/refs/branches/${input.branch}`,
    };

    public async request(route, input, options) {
        const response = await super.request(route, input, options);
        return _.get(response, 'values');
    }

    public auth(options) {
        return {
            'Authorization': `Bearer ${_.get(options, 'identity.access_token')}`,
        };
    }
}
