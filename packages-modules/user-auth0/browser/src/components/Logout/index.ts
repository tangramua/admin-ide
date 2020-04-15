import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AuthAction as Action, logOut, setLoginRedirectPath } from '../../redux/actions';
import { Logout, ILogout } from './Logout';
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
    logoutRedirectPath: state.redirectRoutes.logoutRedirect,
    isAuthenticated,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action | RouterAction>, ownProps) {
  return {
    redirect(url: string) {
      dispatch(push(url));
    },
    onLogout() {
      dispatch(logOut() as any); // not dispatching as it dispatched by a listener
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
