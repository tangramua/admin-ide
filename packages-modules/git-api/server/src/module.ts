import * as _ from 'lodash';
import { Feature } from '@common-stack/server-core';
import { buildSchema, gitTypeDefs, resolver } from './graphql';

import { GitlabProvider } from './services/gitlab';
import { GitService } from './services/GitService';
import { BitbucketProvider } from './services/bitbucket';
import { GithubProvider } from './services/github/index';

const authHeaderContext = (req, res) => ({ headers: req.headers });
const identity = (user, connection) => _.find(user.identities, { connection });

export default new Feature({
    schema: gitTypeDefs,
    createRemoteSchemas: [
        buildSchema,
    ],
    createDataSourceFunc: () => ({
        gitlab: new GitlabProvider(),
        github: new GithubProvider(),
        bitbucket: new BitbucketProvider(),
    }),
    createResolversFunc: resolver,
    createContextFunc: (req, res) => ({
        GitService,
    }),
});
