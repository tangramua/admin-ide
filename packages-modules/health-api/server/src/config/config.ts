import * as envalid from 'envalid';
const { str } = envalid;

export const config = envalid.cleanEnv(process.env, {
    NODE_ENV: str({ default: 'production', choices: ['production', 'staging', 'development', 'test'] }),
    BRIGADE_PROJECT_ID: str(),
    PROMETHEUS_API_URL: str(),
});
