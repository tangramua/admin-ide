/// <reference path='../../../../typings/index.d.ts' />
import * as envalid from 'envalid';


const { str, bool, num } = envalid;

export const config = envalid.cleanEnv(process.env, {
    NODE_ENV: str({ default: 'production', choices: ['production', 'staging', 'development', 'test'] }),
    NATS_URL: str(),
    NATS_USER: str(),
    NATS_PW: str(),
    ZIPKIN_URL: str({ devDefault: 'localhost' }),
    ZIPKIN_PORT: num({ devDefault: 9411 }),
    MONGO_URL: str(),
    BACKEND_URL: str({ devDefault: __BACKEND_URL__ }),
    GRAPHQL_URL: str({ devDefault: __GRAPHQL_URL__ }),
    CLIENT_URL: str({ devDefault: __BACKEND_URL__ }),
    CONNECTION_ID: str({ devDefault: 'CONNECTION_ID' }),
    MAILGUN_KEY: str(),
    MAILGUN_DOMAIN: str(),
    NAMESPACE: str({ default: 'default' }),
    apolloLogging: bool({ default: false }),
});
