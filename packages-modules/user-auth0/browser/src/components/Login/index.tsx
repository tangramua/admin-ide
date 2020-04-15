import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AuthAction as Action, RedirectAction, logIn, setLoginRedirectPath } from '../../redux/actions';
import { Login, ILogin } from './Login';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { push, RouterAction } from 'connected-react-router';
import {
  userAuth0UserIdSelector,
  isAuthenticatedSelector,
  isLoggingInToProceedSelector,
} from '../../selectors';
import { Store } from '../../interfaces';

const locationHelper = locationHelperBuilder({});

function mapStateToProps(state: Store.Auth, ownProps) {
  const isLoggingInToProceed = isLoggingInToProceedSelector(state);
  const isAuthenticated = isAuthenticatedSelector(state);

  return {
    loginRedirectPath: state.redirectRoutes.loginRedirect,
    isLoggingInToProceed,
    isAuthenticated,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action | RedirectAction | RouterAction>, ownProps) {
  return {
    redirect(url: string) {
      dispatch(push(url));
    },
    onLogin() {
      dispatch(logIn() as any); // not dispatching as it dispatched by a listener
    },
    setLoginRedirectPath() {
      dispatch(setLoginRedirectPath(locationHelper.getRedirectQueryParam(ownProps)));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

