
import * as  React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { Feature } from '@common-stack/client-react';


import { filteredMenus, filteredRoutes  } from './compute';
//Similarly need to add billing as `/addount/billing`

export default new Feature({
    menuConfig: filteredMenus,
    routeConfig: filteredRoutes,
});
