
import { Feature } from '@common-stack/server-core';

export * from './constants';
export * from './interfaces';
import OrganizationFeature from './module';

export default new Feature(OrganizationFeature);
