import * as React from 'react';
import { useDispatch, useStore, useSelector } from 'react-redux';
import { Dispatch, compose } from 'redux';
import {  logIn, setLoginRedirectPath, RedirectAction, connectAccount } from '../redux/actions';
import { ConnectAccount as ConnectAccountComponent } from '../components/ConnectAccount';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { push, RouterAction} from 'connected-react-router';
import {
  userAuth0UserIdSelector,
  isAuthenticatedSelector,
  isLoggingInToProceedSelector,
} from '../selectors';
import { Store } from '../interfaces';

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

function mapDispatchToProps(dispatch: Dispatch<RedirectAction | RouterAction>, ownProps) {
  return {
    redirect(url: string) {
      dispatch(push(url));
    },
    onConnect() {
      localStorage.setItem('auth_link_state', '__linking__');
      dispatch(connectAccount() as any); // not dispatching as it dispatched by a listener
    },
    setLoginRedirectPath(state?: string) {
      dispatch(setLoginRedirectPath(state || locationHelper.getRedirectQueryParam(ownProps)));
    },
  };
}

export function ConnectAccount(props) {
  const dispatch = useDispatch();

  const actions = mapDispatchToProps(dispatch, props);
  const selectors = useSelector(mapStateToProps as any);

  return <ConnectAccountComponent {...props} {...selectors} {...actions} />;
}
