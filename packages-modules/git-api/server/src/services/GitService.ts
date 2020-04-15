import * as _ from 'lodash';
import { IGitService, IServiceInput } from './IGitService';
import { IGitRepository, IBranch, IPullRequest } from './IGitRepository';

import { ICommit } from './IGitRepository';
import { GithubProvider } from './github';
import { GitlabProvider } from './gitlab';
import { BitbucketProvider } from './bitbucket';

const identity = (user, connection) => _.find(_.get(user, 'identities', []), { connection });

export class GitService {
    public context = {} as any;

    public static providers = {
        github: GithubProvider,
        gitlab: GitlabProvider,
        bitbucket: BitbucketProvider,
    };

    public static fromContext(context) {
        const { profile } = context;

        const identities = {
            profile,
            github: identity(profile, 'github'),
            gitlab: identity(profile, 'gitlab'),
            bitbucket: identity(profile, 'bitbucket'),
        };

        return new GitService(identities);
    }

    constructor(context) {
        this.context = context;
    }

    private service(name): IGitService {
        if (GitService.providers.hasOwnProperty(name)) {
            return Reflect.construct(GitService.providers[name], [{
                identity: this.context[name],
                profile: this.context.profile,
            }]);
        }

        throw new Error(`Service ${name} not loaded!`);
    }

    public providers() {
        return _.keys(this.context).filter(key => !_.isEmpty(this.context[key]));
    }

    public profiles() {
        return _
            .map(this.context, (profile, provider) => ({
                provider,
                id: _.get(profile, 'user_id'),
            }))
            .filter(record => record.id);
    }
}
