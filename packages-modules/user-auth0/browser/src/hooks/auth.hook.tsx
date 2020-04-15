import * as React from 'react';

import { Auth } from '../auth';
import { IUserProfile, AuthContext, AuthContextValue } from '@adminide-stack/core';


export const useProvideAuth = () => {
    const [loading, setLoading] = React.useState<boolean>(false);
    const [user, setUser] = React.useState<IUserProfile | null>(null);
    const token = React.useMemo(() => Auth.Instance.idToken, [Auth.Instance.idToken]);
    const expired = React.useMemo(() => Auth.Instance.isTokenExpired, [Auth.Instance.isTokenExpired]);

    const authenticated = React.useMemo(() => token && !expired, [expired, token]);

    React.useEffect(() => {
        const subscription = Auth.Instance.state$.subscribe((isAuthenticated => {
            if (isAuthenticated) {
                setLoading(true);
                Auth.Instance.getProfile()
                    .then((profile) => {
                        setUser(profile);
                    })
                    .finally(() => setLoading(false));
            } else {
                setUser(null);
                setLoading(false);
            }
        }));

        return () => subscription.unsubscribe();
    }, []);

    function signin() {
        return Auth.Instance.login();
    }

    function signout() {
        return Auth.Instance.logout();
    }

    return { user, signout, signin, token: expired ? null : token, loading, expired, authenticated };
};

export const ProvideAuth = ({ children }) => {
    const auth = useProvideAuth();
    return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export const useAuth = () => React.useContext<any>(AuthContext);
