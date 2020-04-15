import * as React from 'react';
import { IUserProfile } from '../interfaces';

export interface AuthContextValue {
    token?: string;
    loading?: boolean;
    user: IUserProfile;
    signin: () => void;
}

export const AuthContext = React.createContext<AuthContextValue>(null);

export const ProvideAuth = ({ children, auth }: any) => {
    return React.createElement(AuthContext.Provider, { value: auth }, children);
};
