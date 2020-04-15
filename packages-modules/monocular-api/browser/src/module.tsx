import * as React from 'react';
import { Feature, IRouteData, IMenuPosition } from '@common-stack/client-react';

import { MONOCULAR_ROUTES } from './constants';
import { ChartHeaderComponent as ChartHeader } from './components/ChartHeader';
import { ChartComponent, DashboardComponent } from './containers';
import { ChartInstallation } from './components/ChartInstallation';

export default new Feature({
    routeConfig: [{
        [MONOCULAR_ROUTES.CHART]: { component: ChartHeader, exact: false },
        [MONOCULAR_ROUTES.CHARTS]: { component: DashboardComponent, exact: true },
        [MONOCULAR_ROUTES.REPO_CHART]: { component: ChartComponent, exact: true },
    }],
    menuConfig: [{
        [MONOCULAR_ROUTES.CHART]: { name: 'Chart' },
        [MONOCULAR_ROUTES.CHARTS]: { name: 'Stack' },
    }],
});
