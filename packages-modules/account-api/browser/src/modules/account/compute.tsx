
import * as  React from 'react';
import { PageWithTabs } from '@adminide-stack/react-shared-components';
import Tokens from './components/Tokens';
import Referals from './components/Referals';
import Integration from './components/Integration';
import Collaborators from './components/Collaborators';
import { IRouteData, IMenuData, IMenuPosition } from '@common-stack/client-react';
import { IPageStore, getFilteredMenus, getFilteredRoutes, getFilteredTabs  } from '@adminide-stack/core';





const Account = (props) => (
    <PageWithTabs {...props} pageHeader={'Account Settings'} tabs={filteredTabs} />
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
        key: 'account',
        tab: 'Accounts',
        path: '/usermenu/account',
        exact: false,
        component: Account,
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


// get only selected tabs to show
const selectedTabs = ['profile', 'collaborators', 'integration', 'tokens', 'referrals'];

const filteredTabs = getFilteredTabs(accountPageStore, selectedTabs);

// get only selected menus to show
const selectedMenu = ['usermenu', 'logout', 'account', 'profile', 'collaborators', 'integration',
    'tokens', 'referrals'];

const filteredMenus: IMenuData[] = getFilteredMenus(accountPageStore, selectedMenu);

// get only selected Routes to work
const selectedRoutes = ['login', 'logout', 'callback',
    'account', 'profile', 'collaborators', 'integration', 'tokens', 'referrals'];

const filteredRoutes: IRouteData[] = getFilteredRoutes(accountPageStore, selectedRoutes);

export { filteredRoutes, filteredMenus, filteredTabs };
