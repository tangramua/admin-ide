const auth0 = {
    gitlab: {
        provider: '#btn-gitlab',
        submit: '[type="submit"]',
        fields: {
            username: '#user_login',
            password: '#user_password',
        },
    },
    google:  {
        steps: true,
        provider: '#btn-google',
        submit: '[type="submit"]',
        fields: {
            next: '.RveJvd',
            username: '#identifierId',
            password: 'input[type="password"]',
        },
    },
    github: {
        provider: '#btn-github',
        submit: '[type="submit"]',
        fields: {
            username: 'input[name="login"]',
            password: 'input[name="password"]',
        },
    },
    bitbucket: {
        steps: true,
        submit: '[type="submit"]',
        provider: '#btn-bitbucket',
        fields: {
            username: '#username',
            password: '#password',
            next: '[type="submit"]',
        },
    },
};

const workspaces = {
    min: {
        name: 'Minimum WS',
        description: 'Description for first WS',
        env: ['nats'],
        projects: [
            {
                name: 'Test Project 1',
                type: 'Blank',
                description: 'Awesome for first project',
            },
        ],
    },
    stack: {
        name: 'Workspace with stack elements',
        description: '',
        env: ['node', 'nats'],
        stacks: [
            {  
                chart: 'mysql.bitnami.4.1.1',
            },
            {
                chart: 'drupal.stable.2.2.2',
            },
        ],
        projects: [
            {
                name: 'Test Project 1',
                type: 'Blank',
                description: 'Awesome for first project',
            },
        ],
    },
    config: {
        name: 'Test WS',
        description: '',
        env: ['node', 'nats'],
        stacks: [
            {  
                chart: 'mysql.bitnami.4.1.1',
                version: '',
                values: {},
            },
            {
                chart: 'drupal.stable.2.2.2',
                version: '',
                values: {},
            },
        ],
        projects: [
            {
                name: 'Test Project 1',
                type: 'Blank',
                description: 'Awesome for first project',
            },
        ],
    } 
};

const users = {
    test_github: {
        auth: {
            ...auth0.github,
            nickname: 'e2e-tests',
            credentials: {
                password: 'E2ETests123',
                username: 'e2e.tests@adlab.pro',
            },
        },
        workspaces: {
            count: 0,
        },
    },
    test_gitlab: {
        auth: {
            ...auth0.gitlab,
            nickname: 'e2e.tests',
            credentials: {
                password: 'E2ETests123',
                username: 'e2e.tests@adlab.pro',
            },
        },
        workspaces: {
            count: 0,
        },
    },
    test_google: {
        auth: {
            ...auth0.google,
            nickname: 'e2e.tests.cde',
            credentials: {
                password: 'E2ETests123',
                username: 'e2e.tests.cde@gmail.com',
            },
        },
        workspaces: {
            count: 0,
        },
    },
    test_bitbucket: {
        auth: {
            ...auth0.bitbucket,
            nickname: 'e2e-tests',
            credentials: {
                password: 'E2ETests123',
                username: 'e2e.tests@adlab.pro',
            },
        },
        workspaces: {
            count: 0,
        },
    },
};

module.exports = { users, workspaces };
