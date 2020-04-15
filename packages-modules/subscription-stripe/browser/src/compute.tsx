import * as React from 'react';
import Billing from './components/Billing';
import Payments from './components/Payments';
import Reports from './components/Reports';
import { PageWithTabs } from '@adminide-stack/react-shared-components';
import { IPageStore, getFilteredMenus, getFilteredRoutes, getFilteredTabs } from '@adminide-stack/core';
import { IRouteData, IMenuData, IMenuPosition } from '@common-stack/client-react';
import { SUBSCRIPTION_ROUTES } from './constants';


const defaultRouteConfig = [
    {
        [SUBSCRIPTION_ROUTES.BILLING]: { component: Billing },
        [SUBSCRIPTION_ROUTES.PAYMENT]: { component: Payments },
        [SUBSCRIPTION_ROUTES.REPORT]: { component: Reports },
    },
];


const BillingTab = (props) => (
    <PageWithTabs {...props} pageHeader={'Billing'} tabs={filteredBillingTabs} />
);

const billingPageStore: IPageStore[] = [
    // this would define the parent menu position of the billing menus
    {
        key: 'usermenu',
        tab: 'User Menu',
        path: '/usermenu',
        position: IMenuPosition.BOTTOM,
        exact: false,
    },
    // this would deine the submenu's parent of Billing
    {
        key: 'billing',
        tab: 'Billing',
        path: '/usermenu/billing',
        exact: false,
        component: BillingTab,
    },
    {
        key: 'plans',
        tab: 'Plans',
        path: '/usermenu/billing/plans',
        component: Billing,
    },
    {
        key: 'payments',
        tab: 'Payments',
        path: '/usermenu/billing/payments',
        component: Payments,
    },
    {
        key: 'paymentReports',
        tab: 'Reports',
        path: '/usermenu/billing/reports',
        component: Reports,
    },
];


const selectedBillingTabs = ['plans', 'payments', 'paymentReports'];
const filteredBillingTabs = getFilteredTabs(billingPageStore, selectedBillingTabs);


const selectedMenu = ['usermenu', 'billing', 'plans', 'payments', 'paymentReports'];
const filteredMenus: IMenuData[] = getFilteredMenus(billingPageStore, selectedMenu);


const selectedRoutes = ['billing', 'plans', 'payments', 'paymentReports'];
const filteredRoutes: IRouteData[] = getFilteredRoutes(billingPageStore, selectedRoutes);



export {
    filteredMenus,
    filteredBillingTabs,
    filteredRoutes,
    defaultRouteConfig,
};
