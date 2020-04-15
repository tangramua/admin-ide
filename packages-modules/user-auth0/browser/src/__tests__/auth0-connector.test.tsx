
import { Feature } from '@common-stack/client-react';
import { AUTH0_ROUTES } from '../constants';
import Auth0Module from '../index';
import 'jest';

describe('connector getRoutes', () => {
    test('with static routes and configurable routes', async () => {

        const { routeConfig, ...auth0Rest } = Auth0Module as any;
        const authRoutes = routeConfig[0];
        const login = authRoutes[AUTH0_ROUTES.LOGIN];
        const logout = authRoutes[AUTH0_ROUTES.LOGOUT];
        const callback = authRoutes[AUTH0_ROUTES.CALLBACK];
        const profile = authRoutes[AUTH0_ROUTES.PROFILE];
        const connector = new Feature({
            routeConfig: [{
                ['/login']: { ...login },
                ['/logout']: { ...logout },
                ['/callback']: { ...callback },
            }],
        }, Auth0Module);

        const routes = connector.getRoutes();

        expect(routes).toMatchSnapshot();
    });

});

