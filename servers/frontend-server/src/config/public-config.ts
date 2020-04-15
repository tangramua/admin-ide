/// <reference path='../../../../typings/index.d.ts' />

/**
 * This file opens up in public site, so make sure it is
 * not dependent on any other file that compromises the security.
 */
const publicEnv = [
    'NODE_ENV',
    'GRAPHQL_URL',
    'FACEBOOK_APP_ID',
    'GA_ID',
    'LOG_LEVEL',
    'AUTH0_CLIENT_ID',
    'AUTH0_DOMAIN',
    'CLIENT_URL',
    'APP_NAME',
    'AUTH0_API_AUDIENCE',
    'STRIPE_SECRET_KEY',
    'CDE_WORKSPACE_DOMAIN',
    'CDE_WORKSPACE_URL_PRFIX',
    'AUTH0_TOKEN_GRANTED_TIME',
    'ZIPKIN_URL',
];

const isBrowser = typeof window !== 'undefined';
const base = (isBrowser ? ( window.__ENV__ || __ENV__) : process.env) || {};

const env: any = {};
for (const v of publicEnv) {
    env[v] = base[v];
}

export default env;

if (isBrowser) {
    process.env = env;
    process.APP_ENV = env;
}
export const PUBLIC_SETTINGS: __PUBLIC_SETTINGS__ = {
    apolloLogging: false,
    GRAPHQL_URL: process.env.GRAPHQL_URL || env.GRAPHQL_URL || __GRAPHQL_URL__,
    LOCAL_GRAPHQL_URL: process.env.LOCAL_GRAPHQL_URL || __GRAPHQL_URL__,
    LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
};
