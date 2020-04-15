import * as envalid from 'envalid';
const { str, email, json } = envalid;

export const config = envalid.cleanEnv(process.env, {
    NODE_ENV: str({ default: 'production', choices: ['production', 'staging', 'development', 'test'] }),
    STRIPE_SECRET_KEY: str(),
    STRIPE_ENDPOINT_SECRET: str(),
    EMAIL_USER: str(),
    APP_NAME: str(),
    MONGO_URL: str(),
});

