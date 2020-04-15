
Feature('Dashboard');

const { users } = require('../mock');

Scenario('test something', (I) => {
    I.login(users.test_gitlab, '/dashboard')
    // I.waitNumberOfVisibleElements('.ant-card.ant-card-bordered', mock.users.test_github.workspaces.count, 2000);
});
