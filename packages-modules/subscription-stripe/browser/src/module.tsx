import * as React from 'react';
import { Feature } from '@common-stack/client-react';
import { Route } from 'react-router-dom';
import { defaultRouteConfig, filteredMenus, filteredRoutes } from './compute';


export default new Feature({
  routeConfig: [...filteredRoutes, ...defaultRouteConfig],
  menuConfig: filteredMenus,
  scriptsInsert: 'https://js.stripe.com/v3/',
});
