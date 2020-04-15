import * as _ from 'lodash';
import {
    IProjectSourceType, IWorkspaceCreate_Input, IWorkspace,
    IWorkspaceMetadata, IProject_Input,
} from '@adminide-stack/core';
import { config } from '../../../config';
const generate = require('nanoid/generate');

export const getToken = (provider, meta) => {
    const list = _.get(meta, 'identity');
    const identity = _.find(list, record => record.provider.toLowerCase() === provider.toLowerCase());
    return _.get(identity, 'access_token', false);
};

export function transformWorkspace(workspace, metadata: IWorkspaceMetadata) {
    const shortId = generate('1234567890abcdefghijklmnopqrstuvwxyz', 5);

    const connectionId = generate('0123456789abcdefghijklmnopqrstuvwxyz', 15);
    const namespace = `${metadata.namespace}-${shortId}`;

    const output: any = _.transform(workspace, function (res, value, key: 'stacks' | 'projects') {
        let newStacValue, newProjectValue;
        if (key === 'stacks') {
            newStacValue = _.transform<any, any>(value, function (stackRes, stackValue, stackKey) {
                stackRes.push({ ...stackValue, releaseName: `${namespace}-${stackValue.releaseName}`, namespace, connectionId });
            });
            res = _.assign(res, { stacks: newStacValue });
        } else {
            res = _.assign(res, { [key]: value });
        }


    }, { orgId: metadata.orgId, namespace: namespace, config: { metaInfo: { domainName: config.CDE_WORKSPACE_DOMAIN } } });

    return output;
}


const getSshkey = (provider, userData) => {
    const list = _.get(userData, 'identities');
    const identity = _.find(list, record => record.provider.toLowerCase() === provider.toLowerCase());
    return _.get(identity, 'access_token', false);
};

export function transformToUserSecrets(sshData, authMetadata) {
    return {
        keys: [{
            name: 'gitsecret',
            privateKey: sshData.key,
            dir: '/etc/sshkey_git',
            containerName: ['git-server'],
        }],
        tokens: {
            GITHUB_TOKEN: getSshkey('github', authMetadata),
            GITLAB_TOKEN: getSshkey('gitlab', authMetadata),
            BITBUCKET_TOKEN: getSshkey('bitbucket', authMetadata),
        },
    };
}

const getUserParams = (provider, userData) => {
    const list = _.get(userData, 'identities');
    const identity = _.find(list, record => record.provider.toLowerCase() === provider.toLowerCase());
    return {
        username: _.get(identity, 'profileData.nickname'),
        email: _.get(identity, 'profileData.email'),
    };
};

export function transformToUserProject(projects: IProject_Input[], authMetadata) {

    const globals = {
        username: '',
        email: '',
        sshkeyPath: '/etc/sshkey_git/gitsecret',
    };

    const consolidateProject = projects.reduce((acc, cur, i) => {
        if (!!cur && (cur.source.type === IProjectSourceType.Git)) {
            const provider = cur.source.providers;
            return { ...acc, [provider]: { ...getUserParams(provider, authMetadata) } };
        }
        return acc;
    }, {});
    return { ...consolidateProject, globals };
}
