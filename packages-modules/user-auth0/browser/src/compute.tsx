
import * as  React from 'react';

import { IPageStore, getFilteredMenus, getFilteredRoutes  } from '@adminide-stack/core';
import { IRouteData, IMenuData, IMenuPosition } from '@common-stack/client-react';
import { AUTH0_NAMESPACE, AUTH0_ROUTES } from './constants';
import Login from './components/Login';
import Callback from './components/Callback';
import Logout from './components/Logout';
import Profile from './components/Profile';



export const defaultRouteConfig  = [
    {
        [AUTH0_ROUTES.LOGIN]: {
          component: Login,
        },
        [AUTH0_ROUTES.CALLBACK]: {
          component: Callback,
        },
        [AUTH0_ROUTES.LOGOUT]: {
          component: Logout,
        },
        [AUTH0_ROUTES.PROFILE]: {
          component: Profile,
        },
      },
];

export const authPageStore: IPageStore[] = [
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
        component: Login,
    },
    {
        key: 'callback',
        path: '/callback',
        component: Callback,
    },
    {
        key: 'logout',
        name: 'Logout',
        path: '/usermenu/logout',
        component: Logout,
    },
    {
        key: 'profile',
        tab: 'Profile',
        name: 'Profile Settings',
        path: '/usermenu/account/profile',
        component: Profile,
    },

];


// get only selected menus to show
const selectedMenu = ['usermenu', 'logout', 'account', 'profile' ];

const filteredMenus: IMenuData[] = getFilteredMenus(authPageStore, selectedMenu);

// get only selected Routes to work
const selectedRoutes = ['login', 'logout', 'callback',
    'account', 'profile'];

const filteredRoutes: IRouteData[] = getFilteredRoutes(authPageStore, selectedRoutes);


export { filteredRoutes, filteredMenus };

