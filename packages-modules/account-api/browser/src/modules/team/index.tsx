/* tslint:disable */
import { Feature } from '@common-stack/client-react';

import { filteredMenus, filteredRoutes } from './compute';

export default new Feature({
    menuConfig: filteredMenus,
    routeConfig: filteredRoutes,
});
