import * as React from 'react';

import { Feature } from '@common-stack/client-react';

import { filteredMenus, filteredRoutes } from '../compute';
import 'jest';


describe('Workspace Page', () => {

    it('testing the pageStore', () => {

        expect(filteredMenus).toMatchSnapshot();
        expect(filteredRoutes).toMatchSnapshot();

    });

    it('checking generatedRoutes', () => {
        const connector = new Feature({routeConfig: filteredRoutes});

        const configuredRoutes = connector.getConfiguredRoutes();
        expect(configuredRoutes).toMatchSnapshot();
        const routes = connector.getRoutes();

        expect(routes).toMatchSnapshot();

    });
});

