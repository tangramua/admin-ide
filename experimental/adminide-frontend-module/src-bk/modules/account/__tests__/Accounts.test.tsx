import * as React from 'react';

import { Feature } from '@common-stack/client-react';

import { filteredMenus, filteredRoutes, filteredTabs } from '../compute';
import 'jest';


describe('Accounts Page', () => {

    it('testing the pageStore', () => {

        expect(filteredMenus).toMatchSnapshot();
        expect(filteredRoutes).toMatchSnapshot();
        expect(filteredTabs).toMatchSnapshot();

    });


    it('render billing component', () => {

    })
});
