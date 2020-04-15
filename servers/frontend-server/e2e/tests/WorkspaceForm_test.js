const { users, workspaces } = require('../mock');

Feature('WorkspaceForm');

Scenario('Workspace creation with invalid data', (I, dashboardPage, workspaceFormPage) => {
    I.login(users.test_gitlab, '/dashboard');

    dashboardPage.createWorkspace();
    workspaceFormPage.fillForm(workspaces.min);
});

// Scenario('Workspace creation with minimum config', (I) => {

// });

// Scenario('Workspace creation with stack selection', (I) => {

// });

// Scenario('Workspace creation with configured stack', (I) => {

// });
