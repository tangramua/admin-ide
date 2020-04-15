import * as envalid from 'envalid';
const { str, email, json, num } = envalid;

export interface IConfig {
    NODE_ENV: string;
    BACKEND_URL: string;
    AUTH0_DOMAIN: string;
    AUTH0_ISSUER: string;
    AUTH0_CLIENT_ID: string;
    AUTH0_API_AUDIENCE: string;
    AUTH0_CLIENT_SECRET: string;
    STRIPE_ENDPOINT_SECRET: string;
    AUTH_TOKEN_EXPIRY_IN_SEC: number;
    AUTH_TO_REFRESH_EXPIRED_TOKEN_IN_SEC: number;
}

export const config = envalid.cleanEnv<IConfig>(process.env, {
    BACKEND_URL: str(),
    AUTH0_DOMAIN: str(),
    AUTH0_ISSUER: str(),
    AUTH0_CLIENT_ID: str(),
    AUTH0_API_AUDIENCE: str(),
    AUTH0_CLIENT_SECRET: str(),
    STRIPE_ENDPOINT_SECRET: str(),
    NODE_ENV: str({choices: ['production', 'test', 'staging', 'development'], default: 'production'}),
    AUTH_TOKEN_EXPIRY_IN_SEC: num({ default: 86400, desc: 'Default Value for Token Expiry is 1 day.'}),
    AUTH_TO_REFRESH_EXPIRED_TOKEN_IN_SEC: num({ default: 2592000, desc: 'Default Value to refresh an expiry is 30 days.'}),
});

