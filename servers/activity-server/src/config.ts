import * as envalid from 'envalid';

const { str, bool, num } = envalid;

export const config = envalid.cleanEnv(process.env, {
    NODE_ENV: str({ default: 'production', choices: ['production', 'staging', 'development', 'test'] }),
    NATS_URL: str(),
    NATS_USER: str(),
    NATS_PW: str(),
    MONGO_URL: str(),
    LOG_LEVEL: str({ default: 'info' }),
    HEMERA_LOG_LEVEL: str({ default: 'info' }),
    CONNECTION_ID: str({ default: 'CONNECTION_ID' }),
    NAMESPACE: str({ default: 'default' }),
    // ZIPKIN_URL: str(),
    // ZIPKIN_PORT: str(),
});
