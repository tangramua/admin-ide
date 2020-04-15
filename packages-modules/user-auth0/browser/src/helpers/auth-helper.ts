import { Spin as Loading } from 'antd';
import { isAuthenticatedSelector, isAuthenticatingSelector } from '../selectors';
import { connectedRouterRedirect } from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';

const locationHelper = locationHelperBuilder({});

// export const userIsAuthenticated = connectedRouterRedirect({
//     // The rul to redirect user to if they fail
//     redirectPath: '/login',
//     // If selector is true, wrpper will no redirect
//     authenticatedSelector: (state) => {
//         return isAuthenticatedSelector(state);
//     },
//     // A nice display name for this check
//     wrapperDisplayName: 'UserIsAuthenticated',
// });

// Work in progress 
// https://github.com/mjrussell/redux-auth-wrapper/blob/master/examples/react-router-4/auth.js
const userIsAuthenticatedDefaults = {
    authenticatedSelector: state => isAuthenticatedSelector(state),
    authenticatingSelector: state => isAuthenticatingSelector(state),
    wrapperDisplayName: 'UserIsAuthenticated',
};

export const userIsAuthenticated = connectedAuthWrapper(userIsAuthenticatedDefaults);


export const userIsAuthenticatedRedir = connectedRouterRedirect({
    ...userIsAuthenticatedDefaults,
    AuthenticatingComponent: Loading,
    redirectPath: '/login',
});


export const userIsAdminRedir = connectedRouterRedirect({
    redirectPath: '/',
    allowRedirectBack: false,
    authenticatedSelector: state => state.user.data !== null && state.user.data.isAdmin,
    predicate: user => user.isAdmin,
    wrapperDisplayName: 'UserIsAdmin',
});


const userIsNotAuthenticatedDefaults = {
    // Want to redirect the user when they are done loading and authenticated
    authenticatedSelector: state => state.user.data === null && state.user.isLoading === false,
    wrapperDisplayName: 'UserIsNotAuthenticated',
};

export const userIsNotAuthenticated = connectedAuthWrapper(userIsNotAuthenticatedDefaults);

export const userIsNotAuthenticatedRedir = connectedRouterRedirect({
    ...userIsNotAuthenticatedDefaults,
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/dashboard',
    allowRedirectBack: false,
});
