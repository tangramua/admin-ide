import * as React from 'react';
import { IMenuPosition } from '@common-stack/client-react';
import { isUserAuthorized } from '@adminide-stack/user-auth0-browser';
import { getFilteredMenus, getFilteredRoutes, getFilteredTabs, IPageStore } from '@adminide-stack/core';
// import { SharedWithMe } from '../components/';
import { Dashboard } from '../components/Dashboard';

export const dashboardPageStore: IPageStore[] = [
    {
        key: 'dashboard',
        path: '/dashboard',
        position: IMenuPosition.MIDDLE,
        name: 'Dashboard',
        exact: false,
        icon: 'appstore-o',
        component: isUserAuthorized(Dashboard),
    } as any,
    // {
    //     key: 'sharedwithme',
    //     path: '/sharedwithme',
    //     name: 'Shared With Me',
    //     icon: 'export',
    //     position: IMenuPosition.MIDDLE,
    //     exact: true,
    //     component: userIsAuthenticatedRedir(SharedWithMe),
    // },
];

const selectedRoutesAndMenus = [
    'dashboard',
    // 'sharedwithme',
];

// get menus
const filteredMenus = getFilteredMenus(dashboardPageStore, selectedRoutesAndMenus);

// get routes
const filteredRoutes = getFilteredRoutes(dashboardPageStore, selectedRoutesAndMenus);

export { filteredMenus, filteredRoutes };
