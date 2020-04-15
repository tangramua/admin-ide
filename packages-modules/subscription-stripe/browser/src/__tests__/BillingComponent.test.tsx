import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import renderer from 'react-test-renderer';
import { createRenderer } from 'fela';
import StaticRouter from 'react-router/StaticRouter';
import { Provider, createComponent } from 'react-fela';


import Billing from '../components/Billing';
import 'jest';

describe('Strip Components', () => {

    it('billing', () => {
        const felaRenderer = createRenderer();
        const component = renderer.create(
            <Provider renderer={felaRenderer}>
               <Billing />,
            </Provider>,
          );

        expect(component.toJSON()).toMatchSnapshot();
    });

});
