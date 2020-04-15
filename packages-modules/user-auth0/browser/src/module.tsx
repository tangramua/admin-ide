import * as React from 'react';
import Login from './components/Login';
import Callback from './components/Callback';
import Logout from './components/Logout';
import Profile from './components/Profile';
import { Feature, IRouteData, IMenuPosition } from '@common-stack/client-react';
import { user, redirectRoutes } from './redux/reducers';
import { AUTH0_NAMESPACE, AUTH0_ROUTES } from './constants';
import { resolver} from './graphql/resolvers';
import { schema } from './graphql/schema';
import { authLink, errorLink } from './graphql/link';
import { Auth } from './auth';
import { logger } from '@cdm-logger/client';
import { ErrorLink } from 'apollo-link-error';

import { defaultRouteConfig,  filteredRoutes, filteredMenus } from './compute';

const connectionParam = () => {

  const token = Auth.Instance.idToken;
  logger.trace('(connectionParam token): %s', token);
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      authorization: token ? `Bearer ${token}` : '',
    },
  };
};

export const onTokenError = async (error) => {
  // error.message has to match what the server returns.
  // Chefck whether the new token already captured
  if (Auth.Instance.isTokenExpired) {
    await Auth.Instance.renewToken();
  }
};

export default new Feature({

  menuConfig: [{
    [AUTH0_ROUTES.PROFILE]: { name: 'Profile Settings' },
    [AUTH0_ROUTES.LOGOUT]: { name: 'Logout' },
  }, ...filteredMenus],
  routeConfig: [...defaultRouteConfig, ...filteredRoutes],
  clientStateParams: { resolvers: resolver, typeDefs: schema },
  connectionParam,
  reducer: { user, redirectRoutes },
  link: authLink,
  errorLink: errorLink as ErrorLink,
  // rootComponentFactory: req => <ProvideAuth {...req} />, // --- Check react-cookie module
});
