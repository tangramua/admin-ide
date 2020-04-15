import * as envalid from 'envalid';
const { str, email, json, num } = envalid;

export interface IConfig {
    NODE_ENV: string;
    WATCHER_INTERVAL?: number;
    PROMETHEUS_API_URL?: string;
    UTILIZATION_INTERVAL?: number;
}

export const config = envalid.cleanEnv<IConfig>(process.env, {
    PROMETHEUS_API_URL: str(),
    WATCHER_INTERVAL: num({ default: 60000 }),
    UTILIZATION_INTERVAL: num({ default: 60000 }),
    NODE_ENV: str({choices: ['production', 'test', 'staging', 'development'], default: 'production'}),
});
