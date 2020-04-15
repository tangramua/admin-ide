import * as React from 'react';
import { Feature } from '@common-stack/client-react';
import { Route } from 'react-router-dom';
import { RepositoriesContainer, URLRepo } from './components';
import { gitLink } from './link';
import { GIT_API_ROUTES } from './constants';


const DemoRepo = (props) => <URLRepo url="https://github.com/cdmbase/common-stack" {...props} />;
export default new Feature({
  routeConfig: [{
    [GIT_API_ROUTES.GIT_REPOSITORIES]: { component: RepositoriesContainer },
    [GIT_API_ROUTES.GIT_REPOSITORY]: { component: DemoRepo },
  }],
});

