import * as envalid from 'envalid';
const { str } = envalid;

export interface IConfig {
    NODE_ENV: string;
    BRIGADE_PROJECT_ID: string;
    CDE_WORKSPACE_DOMAIN: string;
}

export const config = envalid.cleanEnv<IConfig>(process.env, {
    NODE_ENV: str({ default: 'production', choices: ['production', 'staging', 'development', 'test'] }),
    BRIGADE_PROJECT_ID: str(),
    CDE_WORKSPACE_DOMAIN: str({devDefault: 'localhost'}),
});
