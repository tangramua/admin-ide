import { ProjectSourceProviders, ProjectSourceType } from '@adminide-stack/core';

export enum PROVIDER_STATE {
    LINKED = 'LINKED',
    BROKEN = 'BROKEN',
    EXPIRED = 'EXPIRED',
    NOT_CONNECTED = 'NOT_CONNECTED',
}

export const PROVIDERS_CONFIG = {
    [ProjectSourceProviders.VSTS]: {
        icon: 'fab fa-windows',
        description: 'VSTS repositories can be viewed after account connection',
    },
    [ProjectSourceProviders.GITHUB]: {
        icon: 'fab- fa-github',
        description: 'Github repositories can be viewed after account connection',
    },
    [ProjectSourceProviders.GITLAB]: {
        icon: 'fab fa-gitlab',
        description: 'GitLab repositories can be viewed after account connection',
    },
    [ProjectSourceProviders.BITBUCKET]: {
        icon: 'fab fa-bitbucket',
        description: 'Bitbucket repositories can be viewed after account connection',
    },
};

export const LINKING_BUTTONS = {
    [PROVIDER_STATE.BROKEN]: {
        type: 'danger',
        text: 'Fix Connection',
    },
    [PROVIDER_STATE.EXPIRED]: {
        type: 'dashed',
        text: 'Re-connect account',
    },
    [PROVIDER_STATE.NOT_CONNECTED]: {
        type: 'primary',
        text: 'Connect account',
    },
};

export const PROJECT_TYPES = [
    {
        name: 'Blank',
        type: ProjectSourceType.BLANK,
        provider: ProjectSourceProviders.NONE,
    },
    {
        name: 'ZIP',
        type: ProjectSourceType.ZIP,
        provider: ProjectSourceProviders.NONE,
    },
    {
        name: 'Git',
        type: ProjectSourceType.GIT,
        provider: ProjectSourceProviders.NONE,
    },
    {
        name: 'Github',
        type: ProjectSourceType.GIT,
        provider: ProjectSourceProviders.GITHUB,
    },
    {
        name: 'Gitlab',
        type: ProjectSourceType.GIT,
        provider: ProjectSourceProviders.GITLAB,
    },
    {
        name: 'Bitbucket',
        type: ProjectSourceType.GIT,
        provider: ProjectSourceProviders.BITBUCKET,
    },
];
