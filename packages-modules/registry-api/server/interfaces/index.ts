export type LoginPasswordAuthStrategy = {
    login: string;
    password: string;
    type: 'login-password';
};

export type TokenAuthStrategy = {
    type: 'token';
    token: string;
    header: string;
};

export type RegistryCredentials = LoginPasswordAuthStrategy | TokenAuthStrategy;

export interface IRegistry {
    url: string;
    _id?: string;
    name: string;
    public?: boolean;
    owner_id?: string;
    credentials?: RegistryCredentials;
}
