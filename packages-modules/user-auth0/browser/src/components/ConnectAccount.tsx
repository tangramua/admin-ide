import * as _ from 'lodash';
import * as React from 'react';

export function ConnectAccount({ redirectTo, render, onConnect, setLoginRedirectPath }: any) {
    React.useEffect(() => {
        if (redirectTo) {
            // setLoginRedirectPath(redirectTo);
        }
    }, []);

    return (
        <React.Fragment>
            {render({ setRedirect: setLoginRedirectPath, connect: onConnect })}
        </React.Fragment>
    );
}
