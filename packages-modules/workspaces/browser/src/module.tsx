
import * as React from 'react';
import { Feature, IRouteData } from '@common-stack/client-react';
import { resolvers } from './graphql/resolvers';
import { schema } from './graphql/schema';
import { filteredMenus, filteredRoutes } from './compute';
import { reducers } from './redux';


export default new Feature({
    clientStateParams: { typeDefs: schema, resolvers: resolvers },
    reducer: reducers,
    menuConfig: filteredMenus,
    routeConfig: filteredRoutes,
});

