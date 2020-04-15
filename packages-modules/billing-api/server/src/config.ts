import * as envalid from 'envalid';
const { str } = envalid;

// STRIPE_SECRET_KEY=sk_test_pUfegNPQi7RJ1FyFApq7P3ks
// STRIPE_PUBLISHABLE_KEY=pk_test_ogan0AEbeoj3q7QJuGdSgMSb

export interface IConfig {
    NODE_ENV: string;
    GOOGLE_API_KEY: string;
    STRIPE_SECRET_KEY: string;
    STRIPE_PUBLISHABLE_KEY: string;
}

export const config = envalid.cleanEnv<IConfig>(process.env, {
    NODE_ENV: str({ default: 'production', choices: ['production', 'staging', 'development', 'test'] }),
    GOOGLE_API_KEY: str(),
    STRIPE_SECRET_KEY: str(),
    STRIPE_PUBLISHABLE_KEY: str(),
});
