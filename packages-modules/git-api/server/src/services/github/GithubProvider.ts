import * as url from 'url';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';
import { IGitRepository, IBranch, ICommit } from '../IGitRepository';
import { IGithubRepository, IGithubBranch, IGithubCommit } from './IGithubRepository';
import { IGitService, IGitTransform, IServiceInput, EProviderRoutes, AbstractProvider, IServiceProviderOptions } from '../IGitService';
import { IGitBranch } from '@adminide-stack/common/lib/git-api';

export class GithubTransform implements IGitTransform {
    public name = 'github';

    public user(input: any) {
        return input as any;
    }

    public branch(input: IGithubBranch, __input): IBranch {
        return {
            __input,
            name: input.name,
            commit: input.commit.sha,
        };
    }

    public commit(input: IGithubCommit): ICommit {
        return {
            id: input.sha,
            message: input.commit.message,
            createdAt: input.commit.committer.date,
        };
    }

    public request(input: any) {
        return input as any;
    }

    public repository(input: IGithubRepository): IGitRepository {

        const clone = {
            ssh: input.ssh_url,
            https: input.clone_url,
        };

        return {
            clone,
            id: input.id,
            name: input.name,
            path: input.full_name,
            private: input.private,
            owner: input.owner.login,
            createdAt: input.created_at,
            updatedAt: input.updated_at,
            description: input.description,
        };
    }
}

export class GithubProvider extends AbstractProvider implements IGitService {
    public transform = new GithubTransform();
    public basepath = 'https://api.github.com';

    public routes = {
        [EProviderRoutes.USER]: (input, identity) => `/user`,

        [EProviderRoutes.SEARCH]: (input, identity) =>
            `/repositories?q=${input.query}`,

        [EProviderRoutes.REPOSITORIES]: (input, identity) =>
            `/user/repos`,

        [EProviderRoutes.BRANCHES]: (input, identity, profile) =>
            `/repos/${this.nick(identity, input, profile)}/${input.repository}/branches`,

        [EProviderRoutes.PULL_REQUEST]: (input, identity, profile) =>
            `/repos/${this.nick(identity, input, profile)}/${input.repository}/pulls`,

        [EProviderRoutes.COMMIT]: (input, identity, profile) =>
            `/repos/${this.nick(identity, input, profile)}/${input.repository}/commits/${input.commit}`,
    };

    public auth(options) {
        return {
            'Authorization': `token ${_.get(options, 'identity.access_token')}`,
        };
    }
}
