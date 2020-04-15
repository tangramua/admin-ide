import * as React from 'react';
import { Layout } from 'antd';
import { Route, Switch } from 'react-router';
import WorkpaceModule from '@adminide-stack/workspaces-browser';
import { PageLayout, LayoutModule } from '@adminide-stack/react-shared-components';
import AuthModule from '@adminide-stack/user-auth0-browser';
import GitRepositoryModule from '@adminide-stack/git-api-browser';
import StripeModule from '@adminide-stack/subscription-stripe-browser';
import MonocularModule from '@adminide-stack/monocular-api-browser';
import UserActivityModule from '@adminide-stack/user-activity-browser';
import { Feature, FeatureWithRouterFactory } from '@common-stack/client-react';
import { TeamModule, AccountFrontendModule } from '@adminide-stack/account-api-browser';

import { SiderMenu } from './layout';

const features = new Feature(
    FeatureWithRouterFactory,
    LayoutModule,
    AuthModule,

    GitRepositoryModule,
    StripeModule,
    TeamModule,
    AccountFrontendModule,
    MonocularModule,
    WorkpaceModule,
    UserActivityModule,
);

export const MainRoute = props => (
    <PageLayout segments={features.sidebarSegments} sideBarMenus={features.getMenus()}>
        {features.getRoutes()}
    </PageLayout>
);

// export const MainRoute = props => (
//     <Layout hasSider={true} style={{ minHeight: '100vh', display: 'flex' }}>
//         <SiderMenu
//             collapsed={false}
//             menuData={features.getMenus()}
//             location={window.location as any}
//             segments={features.sidebarSegments}
//         />
//         <Layout>
//             <Layout.Content style={{height: '100%'}}>
//                 <section className="flex-grow" style={{height: '100%'}}>
//                     {features.getRoutes()}
//                 </section>
//             </Layout.Content>
//         </Layout>
//     </Layout>
// );

export default features;
