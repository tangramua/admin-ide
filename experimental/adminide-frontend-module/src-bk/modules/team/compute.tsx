import * as React from 'react';
import { IMenuPosition } from '@common-stack/client-react';
import { userIsAuthenticatedRedir } from '@adminide-stack/user-auth0-browser';

import { TeamPage, TeamForm, InvitationPage } from './containers';
import { getFilteredMenus, getFilteredRoutes, getFilteredTabs } from '../../utils';

export const team = [
    {
        path: '/teams/view/:team',
        key: 'team-management',
        component: userIsAuthenticatedRedir(TeamPage),
    },
    {
        name: 'Teams',
        path: '/teams/dashboard',
        icon: 'usergroup-add',
        key: 'team-creation',
        component: userIsAuthenticatedRedir(TeamForm),
    },
    {
        name: 'Team Invitation',
        key: 'team-invitation',
        path: '/invitation/:invitation',
        component: userIsAuthenticatedRedir(InvitationPage),
    },
];

const selectedMenus = ['team-management', 'team-creation'];
const selectedRoutes = ['team-management', 'team-creation', 'team-invitation'];

// get menus
const filteredMenus = getFilteredMenus(team, selectedMenus);

// get routes
const filteredRoutes = getFilteredRoutes(team, selectedRoutes);

export { filteredMenus, filteredRoutes };
