import * as url from 'url';
import * as _ from 'lodash';
import * as fetch from 'isomorphic-fetch';
import { IGitlabRepository, IGitlabBranch, IGitlabPullRequest } from './IGitlabRepository';
import { IGitService, IGitTransform, IServiceInput, EProviderRoutes, AbstractProvider, IServiceProviderOptions } from '../IGitService';
import { IGitRepository } from '../IGitRepository';

export class GitlabTransform implements IGitTransform {
    public user(input: IGitlabBranch) {
        return input as any;
    }

    public commit(input: IGitlabBranch) {
        return input as any;
    }

    public branch(input: IGitlabBranch, __input: any) {
        return {
            name: input.name,
            commit: {
                id: input.commit.id,
                message: input.commit.message,
                createdAt: input.commit.committed_date,
            } as any,
        } as any;
    }

    public request(input: IGitlabPullRequest) {
        return input as any;
    }

    public repository(input: IGitlabRepository): IGitRepository {
        return {
            id: input.id,
            private: false,
            name: input.name,
            createdAt: input.created_at,
            description: input.description,
            path: input.path_with_namespace,
            owner: _.get(input, 'owner.name'),
            updatedAt: input.last_activity_at,
            clone: {
                ssh: input.ssh_url_to_repo,
                https: input.http_url_to_repo,
            },
        };
    }
}

export class GitlabProvider extends AbstractProvider implements IGitService {
    public name = 'gitlab';
    public basepath = 'https://gitlab.com';
    public transform = new GitlabTransform();
    public options: IServiceProviderOptions = {
        headers: {},
    };

    public routes = {
        [EProviderRoutes.USER]: (input, identity) => `/api/v4/user`,
        [EProviderRoutes.SEARCH]: (input, identity) => `/api/v4/projects?search=${input.query}`,
        [EProviderRoutes.PULL_REQUEST]: (input, identity, profile) => `/api/v4/projects/${input.repository}/merge_requests`,
        [EProviderRoutes.REPOSITORIES]: (input, identity, profile) => {
            return `/api/v4/users/${this.nick(identity, input, profile)}/projects`;
        },
        [EProviderRoutes.BRANCHES]: (input, identity) => `/api/v4/projects/${input.repository}/repository/branches`,
        [EProviderRoutes.COMMIT]: (input, identity) => `/api/v4/projects/${input.repository}/repository/branches/${input.branch}`,
    };

    public auth(options) {
        return {
            'Authorization': `Bearer ${_.get(options, 'identity.access_token')}`,
        };
    }
}
