import * as React from 'react';
import { useAuth } from '@adminide-stack/react-shared-components';

export const isUserAuthorized = Component => props => {
    const { user, signin, token, loading } = useAuth();

    React.useEffect(() => {
        if (!token) {
            signin();
        }
    }, [ token ]);

    if (!user) {
        return null;
    }

    return (
        <Component {...props} auth={{ user, loading, token }} />
    );
};
