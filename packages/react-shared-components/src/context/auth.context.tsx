import * as React from 'react';
import { IUserProfile } from '@adminide-stack/core';

export interface AuthContextValue {
    token?: string;
    expired?: boolean;
    loading?: boolean;
    user: IUserProfile;
    signin: () => void;
    signout: () => void;
    authenticated: boolean;
}

export const AuthContext = React.createContext<AuthContextValue>(null);

export const ProvideAuth = ({ children, auth }) => {
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    const auth = React.useContext<any>(AuthContext);
    return auth;
};
