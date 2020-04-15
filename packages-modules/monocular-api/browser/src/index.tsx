/* tslint:disable */
import * as  React from 'react';
import { Route, Redirect } from 'react-router-dom';
import MonocularModule  from './module';
import { Feature } from '@common-stack/client-react';
import { ChartInstallation } from './components/ChartInstallation';

export * from './constants';
export * from './containers';
export * from './graphql/gql';

export default new Feature(MonocularModule);
export { ChartInstallation };
