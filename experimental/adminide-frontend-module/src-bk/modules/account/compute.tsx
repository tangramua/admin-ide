
import * as  React from 'react';
import { PageWithTabs } from '@adminide-stack/react-shared-components';
import Tokens from './components/Tokens';
import Referals from './components/Referals';
import Integration from './components/Integration';
import Collaborators from './components/Collaborators';
import SharedConfiguration from './components/SharedConfiguration';
import Auth0Module, { AUTH0_NAMESPACE, AUTH0_ROUTES } from '@adminide-stack/user-auth0-browser';
import SubscriptionModule, { SUBSCRIPTION_ROUTES } from '@adminide-stack/subscription-stripe-browser';
import { IRouteData, IMenuData, IMenuPosition } from '@common-stack/client-react';
import { IPageStore } from '../../interfaces';
import { getFilteredMenus, getFilteredRoutes, getFilteredTabs } from '../../utils';

// Temporary workaround to activate routes
// in future this will be automated
const { routeConfig } = Auth0Module as any;
const { routeConfig: subscriptionRouteConfig } = SubscriptionModule;


const authRoutes = routeConfig[0];
const login = authRoutes[AUTH0_ROUTES.LOGIN];
const logout = authRoutes[AUTH0_ROUTES.LOGOUT];
const callback = authRoutes[AUTH0_ROUTES.CALLBACK];
const profile = authRoutes[AUTH0_ROUTES.PROFILE];

const subscribeRoutes = subscriptionRouteConfig[0];
const billing = subscribeRoutes[SUBSCRIPTION_ROUTES.BILLING];
const payments = subscribeRoutes[SUBSCRIPTION_ROUTES.PAYMENT];
const paymentReports = subscribeRoutes[SUBSCRIPTION_ROUTES.REPORT];

const Account = (props) => (
    <PageWithTabs {...props} pageHeader={'Account Settings'} tabs={filteredTabs} />
);

const Billing = (props) => (
    <PageWithTabs {...props} pageHeader={'Billing'} tabs={filteredBillingTabs} />
);

export const accountPageStore: IPageStore[] = [
    {
        key: 'usermenu',
        tab: 'User Menu',
        path: '/usermenu',
        position: IMenuPosition.BOTTOM,
        exact: false,
    },
    {
        key: 'login',
        path: '/login',
        ...login,
    },
    {
        key: 'callback',
        path: '/callback',
        ...callback,
    },
    {
        key: 'billing',
        tab: 'Billing',
        path: '/usermenu/billing',
        exact: false,
        component: Billing,
    },
    {
        key: 'plans',
        tab: 'Plans',
        path: '/usermenu/billing/plans',
        ...billing,
    },
    {
        key: 'payments',
        tab: 'Payments',
        path: '/usermenu/billing/payments',
        ...payments,
    },
    {
        key: 'paymentReports',
        tab: 'Reports',
        path: '/usermenu/billing/reports',
        ...paymentReports,
    },
    {
        key: 'account',
        tab: 'Accounts',
        path: '/usermenu/account',
        exact: false,
        component: Account,
    },
    {
        ...logout,
        key: 'logout',
        name: 'Logout',
        path: '/usermenu/logout',
    },
    {
        key: 'profile',
        tab: 'Profile',
        name: 'Profile Settings',
        path: '/usermenu/account/profile',
        ...profile,
    },
    {
        key: 'collaborators',
        tab: 'Collaborators',
        path: '/usermenu/account/collaborators',
        component: Collaborators,
    },
    {
        key: 'integration',
        tab: 'Integration',
        path: '/usermenu/account/integration',
        component: Integration,
    },
    {
        key: 'tokens',
        tab: 'Tokens',
        path: '/usermenu/account/tokens',
        component: Tokens,
    },
    {
        key: 'referrals',
        tab: 'Referrals',
        path: '/usermenu/account/referrals',
        component: Referals,
    },
];

const selectedBillingTabs = ['plans', 'payments', 'paymentReports'];

const filteredBillingTabs = getFilteredTabs(accountPageStore, selectedBillingTabs);

// get only selected tabs to show
const selectedTabs = ['profile', 'collaborators', 'integration', 'tokens', 'referrals'];

const filteredTabs = getFilteredTabs(accountPageStore, selectedTabs);

// get only selected menus to show
const selectedMenu = ['billing', 'usermenu', 'logout', 'account', 'profile', 'collaborators', 'integration',
    'tokens', 'referrals', 'plans', 'payments', 'paymentReports'];

const filteredMenus: IMenuData[] = getFilteredMenus(accountPageStore, selectedMenu);

// get only selected Routes to work
const selectedRoutes = ['billing', 'login', 'logout', 'callback',
    'account', 'profile', 'collaborators', 'integration', 'tokens', 'referrals', 'plans', 'payments', 'paymentReports'];

const filteredRoutes: IRouteData[] = getFilteredRoutes(accountPageStore, selectedRoutes);

export { filteredRoutes, filteredMenus, filteredTabs, filteredBillingTabs };
