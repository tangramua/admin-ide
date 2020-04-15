import { Feature } from '@common-stack/server-core';

import { middleware } from './auth0-passport';
export  { Auth0Client } from './auth0-client';
export * from './rs256-utils';

export default new Feature({ middleware });

