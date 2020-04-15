import * as React from 'react';
import WorkpaceModule from '@adminide-stack/workspaces-browser';
import { Feature, FeatureWithRouterFactory } from '@common-stack/client-react';
import AuthModule from '@adminide-stack/user-auth0-browser';
import { PageLayout } from '@adminide-stack/react-shared-components';
import GitRepositoryModule from '@adminide-stack/git-api-browser';
import StripeModule from '@adminide-stack/subscription-stripe-browser';
import MonocularModule from '@adminide-stack/monocular-api-browser';
import UserActivityModule from '@adminide-stack/user-activity-browser';
import { logger } from '@cdm-logger/client';
import { renderRoutes } from 'react-router-config';
import { Route } from 'react-router-dom';
import { TeamModule, AccountFrontendModule } from '@adminide-stack/account-api-browser';
// include zipkin tracing
import '../config/zipkin-tracing';

const feat = new Feature(FeatureWithRouterFactory,
    AuthModule,
    // DashboardModule,
    GitRepositoryModule,
    StripeModule,
    TeamModule,
    AccountFrontendModule,
    MonocularModule,
    WorkpaceModule,
    UserActivityModule,
) as any;

const Layout = (props) => <PageLayout segments={feat.sidebarSegments} sideBarMenus={feat.getMenus()}>{feat.getRoutes()}</PageLayout>;

export const MainRoute = <Route key={'root'} component={Layout} />;

export default feat;

