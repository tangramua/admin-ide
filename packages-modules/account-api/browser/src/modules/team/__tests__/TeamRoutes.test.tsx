import * as React from 'react';

import { Feature } from '@common-stack/client-react';

import { filteredMenus, filteredRoutes } from '../compute';
import 'jest';


describe('Dashboard Page', () => {

    it('testing the pageStore', () => {

        expect(filteredMenus).toMatchSnapshot();
        expect(filteredRoutes).toMatchSnapshot();

    });
});
