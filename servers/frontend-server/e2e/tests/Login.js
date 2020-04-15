const { users } = require('../mock');

Feature('Login');

Scenario('[Auth0]: Github', (I) => {
    const user = users.test_github;

    I.login(user, '/dashboard');
    I.waitForVisible('#cde-user', 5);

    I.seeAttributesOnElements('#cde-user', { 'data-user': user.auth.nickname });
});

Scenario('[Auth0]: Gitlab', async (I) => {
    const user = users.test_gitlab;

    I.login(user, '/dashboard');
    I.waitForVisible('#cde-user', 5);

    I.seeAttributesOnElements('#cde-user', { 'data-user': user.auth.nickname });
});

Scenario('[Auth0]: Google', (I) => {
    const user = users.test_google;

    I.login(user, '/dashboard');
    I.waitForVisible('#cde-user', 5);

    I.seeAttributesOnElements('#cde-user', { 'data-user': user.auth.nickname });
});

Scenario('[Auth0]: Bitbucket', (I) => {
    const user = users.test_bitbucket;

    I.login(user, '/dashboard');
    I.waitForVisible('#cde-user', 5);

    I.seeAttributesOnElements('#cde-user', { 'data-user': user.auth.nickname });
});
