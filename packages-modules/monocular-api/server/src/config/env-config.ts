import * as envalid from 'envalid';
const { str, email, json, num } = envalid;

export interface IConfig {
    NODE_ENV: string;
    REDIS_URL?: string;
    BRIGADE_PROJECT_ID?: string;
}

export const config = envalid.cleanEnv<IConfig>(process.env, {
    REDIS_URL: str(),
    BRIGADE_PROJECT_ID: str(),
    NODE_ENV: str({choices: ['production', 'test', 'staging', 'development'], default: 'production'}),
});

