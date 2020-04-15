import * as React from 'react';
import { IMenuPosition } from '@common-stack/client-react';
import { userIsAuthenticatedRedir, isUserAuthorized } from '@adminide-stack/user-auth0-browser';
import { getFilteredMenus, getFilteredRoutes, getFilteredTabs, IPageStore } from '@adminide-stack/core';
import MonocularModule, { MONOCULAR_ROUTES } from '@adminide-stack/monocular-api-browser';
import { NewWorkspace as NewWorkspaceComponent } from './containers/NewWorkspace';
import { WorkspaceEditor as WorkspaceEditorComponent } from './containers/WorkspaceEditor';
import { Details as DetailsComponent } from './containers';
import { WorkspaceEditorIFrameComponent } from './components';
import { Dashboard } from './components/Dashboard';
import { Registries } from './containers/Registries';

const { routeConfig } = MonocularModule;
const moncoularRoutes = routeConfig[0];
const charts = moncoularRoutes[MONOCULAR_ROUTES.CHARTS];
const chart = moncoularRoutes[MONOCULAR_ROUTES.CHART];
const chartRepo = moncoularRoutes[MONOCULAR_ROUTES.REPO_CHART];

const NewWorkspace = (props) => <NewWorkspaceComponent {...props} />;
const Details = (props) => <DetailsComponent {...props} />;
const WorkspaceEditor = (props) => <WorkspaceEditorComponent {...props} />;


export const workspacePageStore: IPageStore[] = [
    {
        key: 'dashboard',
        path: '/dashboard',
        position: IMenuPosition.MIDDLE,
        name: 'Dashboard',
        exact: true,
        icon: 'appstore-o',
        component: isUserAuthorized(Dashboard),
    },
    {
        key: 'registries',
        path: '/registries',
        position: IMenuPosition.MIDDLE,
        name: 'Registries',
        exact: true,
        icon: 'api',
        component: isUserAuthorized(Registries),
    },
    {
        key: 'create-workspace',
        path: '/create-workspace',
        position: IMenuPosition.MIDDLE,
        name: 'Create Workspace',
        exact: true,
        icon: 'plus-circle-o',
        component: userIsAuthenticatedRedir(NewWorkspace),
    },
    {
        key: 'workspace-details',
        path: '/workspace/:id/details',
        position: IMenuPosition.MIDDLE,
        name: 'Workspace Details',
        exact: true,
        component: userIsAuthenticatedRedir(Details),
    },
    {
        key: 'workspace-editor',
        path: '/workspace/:id/editor',
        position: IMenuPosition.MIDDLE,
        name: 'Workspace Editor',
        exact: true,
        component: userIsAuthenticatedRedir(WorkspaceEditor),
    },
    {
        key: 'stack',
        path: '/stack',
        position: IMenuPosition.MIDDLE,
        name: 'Stack',
        ...chart,
    },
    {
        key: 'stack-charts',
        path: '/stack/charts',
        icon: 'compass',
        position: IMenuPosition.MIDDLE,
        name: 'Stack',
        ...charts,
        exact: true,
    },
    {
        key: 'stack-repo-chart',
        path: '/stack/:registry/:repo/:chart',
        position: IMenuPosition.MIDDLE,
        name: 'Stack Chart',
        ...chartRepo,
    },
    {
        key: 'workspace',
        path: '/workspace/:id',
        position: IMenuPosition.MIDDLE,
        name: 'Workspace',
        exact: true,
    },
];


// get routes
const selectedRoutes = ['dashboard', 'workspace', 'registries', 'stack-charts', 'stack', 'stack-repo-chart', 'workspace-details',
    'workspace-editor', 'create-workspace'];
const filteredRoutes = getFilteredRoutes(workspacePageStore, selectedRoutes);

// get menus
const selectedMenus = ['dashboard', 'create-workspace', 'stack-charts', 'registries'];
const filteredMenus = getFilteredMenus(workspacePageStore, selectedMenus);

export { filteredRoutes, filteredMenus };
