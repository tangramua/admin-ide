import * as React from 'react';
import { convertQueryStrToObj } from '../../utils';
import { RouteProps } from 'react-router';
import { logger } from '@cdm-logger/client';

export namespace ICallback {

    export interface FetchUserProps {
        user: { id: string } | null;
        isUserFetching: boolean;
        isUserFetchingError: boolean;
    }
    export interface RegisterUserProps {
        registerUser: any;
        postLogingSetup: any;
    }
    export interface StateProps {
        isAuthenticated: boolean;
        isLoggingInToProceed: boolean;
        userAuth0UserId: string;
        loginRedirectPath: string;
        doAuthentication: () => void;
        onLoginSuccess: (id: string) => void;
        redirect: (url: string) => void;
        clearSavedStoreState: () => void;
        setUserId: (id: string) => void;
    }

    export interface OwnProps { }
    export type Props = OwnProps & StateProps & FetchUserProps & RegisterUserProps & RouteProps;
}

/**
 * @description After authenticate, users are taken to /callback route. Here is good place to have a loading 
 * incdicator while the application sets up a client-side session for them. After sesion is set up, the users are
 * redirected to the /home or targeted route the user initially clicked.
 */
export class Callback extends React.Component<ICallback.Props> {

    public componentWillMount() {
        logger.trace('===> Handle Authentication');
        this.props.doAuthentication();
    }

    public componentDidMount() {
        logger.trace('callback component did mount');

    }


    public componentWillUnmount() {
        this.props.clearSavedStoreState();
    }

    public UNSAFE_componentWillReceiveProps(nextProps: ICallback.Props) {
        if (typeof window !== 'undefined') {
            if (nextProps.isUserFetching) {
                return;
            }
            const { user } = nextProps;
            if (user) {
                this.onUserExists(user);
            } else {
                this.onUserNotExist();
            }
        }

    }

    private onUserExists = user => {
        logger.debug('===> User Exist, notify the login success and then redirect');
        this.props.onLoginSuccess(user.id);
        this.proceedRedirect();
    }

    private onUserNotExist = () => {
        const { registerUser, location } = this.props;
        logger.debug('===> User does not exist, call backend to validate token');

        const hashObj = convertQueryStrToObj(location.hash);
        const idToken = hashObj.id_token;
        const registerUserPromise = registerUser(idToken);
        if (registerUserPromise) {
            registerUserPromise.then(this.onUserRegisterSuccess, this.onUserRegisterError);
        }
    }

    private onUserRegisterSuccess = (response: any) => {
        logger.debug('====> User Register Success');
        this.proceedRedirect();
    }

    private onUserRegisterError = (error: any) => {
        logger.debug('====> User Register Failed');
        this.proceedRedirect();
    }

    private proceedRedirect() {
        const { isLoggingInToProceed, redirect, loginRedirectPath } = this.props;
        logger.debug('====> Proceed User Redirect [%j]', this.props);
        const redirectPath = loginRedirectPath || '/dashboard';
        if (isLoggingInToProceed) {
            logger.debug('====>     redirecting to %s', redirectPath);
            redirect(redirectPath);
        } else {
            logger.debug('====>     redirecting to %s', '/');
            redirect(redirectPath);
        }
    }

    public render() {
        return <div> Loggin in ....  </div>;
    }
}
