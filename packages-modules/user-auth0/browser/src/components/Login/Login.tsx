import * as React from 'react';
import { logger } from '@cdm-logger/client';
import { useAuth } from '@adminide-stack/react-shared-components';

export namespace ILogin {
    export interface StateProps {
        setLoginRedirectPath: () => void;
        onLogin: () => {};
        redirect: (url: string) => void;
        isAuthenticated: boolean;
        isLoggingInToProceed: boolean;
        loginRedirectPath: string;
    }
    export type Props = StateProps;
}

export function Login() {
    const { user, token, loading, signin } = useAuth();

    React.useEffect(() => {
        if (!token) {
            signin();
        } else {
            window.location.href = '/';
        }
    }, [ user, token ]);

    return (
        <div>Login model will open shortly... </div>
    );
}
