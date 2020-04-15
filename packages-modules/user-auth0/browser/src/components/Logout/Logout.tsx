import * as React from 'react';
import { withApollo } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { useAuth } from '@adminide-stack/react-shared-components';

export namespace ILogout {
    export interface StateProps {
        onLogout: () => {};
        client: ApolloClient<any>;
        redirect: (url: string) => void;
        isAuthenticated: boolean;
        logoutRedirectPath: string;
    }
    export type Props = StateProps;
}

function LogoutView({ onLogout, client, redirect, logoutRedirectPath }) {
    const { signout, authenticated } = useAuth();

    React.useEffect(() => {
        if (authenticated) {
            signout();
            onLogout();
            client.cache.reset();

            setTimeout(() => { location.href = '/'; }, 300);
        }
    }, [authenticated]);

    return (
        <div>[Logout]: Logging out... </div>
    );
}

export class LogoutComponent extends React.PureComponent<ILogout.Props> {

    public componentDidMount() {
        const { isAuthenticated, client, redirect, logoutRedirectPath } = this.props;

        client.cache.reset();
        this.props.onLogout();

        // if it is already authenticated then directly
        // redirect to page. Removing following line which cause to stuck on login page.
        if (!isAuthenticated) {
            redirect(logoutRedirectPath || '/');
        }
    }
    public UNSAFE_componentWillReceiveProps(nextProps) {
        const { isAuthenticated, redirect, logoutRedirectPath } = nextProps;
        if (!isAuthenticated) {
            redirect(logoutRedirectPath || '/');
        }

    }

    public render() {
        return <div>Logging out... </div>;
    }
}

export const Logout = withApollo(LogoutView as any);
