import * as React from 'react';
import { Route } from 'react-router-dom';
import { Feature } from '@common-stack/client-react';

import { TeamView } from './containers/TeamView';
import { Dashboard } from './containers/Dashboard';
import { ModuleWrapper } from './containers/ModuleWrapper';
import { TeamModule, AccountFrontendModule } from './modules';
export const ACCOUNT_API_NAMESPACE = '@account-api';

export enum ACCOUNT_ROUTES {
  TEAMS_MODULE = '/teams',

  TEAM_VIEW = '/teams/view/:team',
  TEAMS_DASHBOARD = '/teams/dashboard',
}

export default new Feature({
  routeConfig: [{
    [ACCOUNT_ROUTES.TEAMS_MODULE]: { component: ModuleWrapper, exact: false },

    [ACCOUNT_ROUTES.TEAM_VIEW]: { component: TeamView, exact: true },
    [ACCOUNT_ROUTES.TEAMS_DASHBOARD]: { component: Dashboard, exact: true },
  }],
},
  AccountFrontendModule,
  TeamModule,
);
