import * as React from 'react';
import { connect } from 'react-redux';
import { push, RouterAction } from 'connected-react-router';
import { compose, Dispatch } from 'redux';
import { graphql, Query, Mutation } from 'react-apollo';

import { Store } from '../../interfaces';
import { Callback } from './Callback';
import {
  AuthAction as Action,
  clearSavedStoreState as clearSavedStoreStateAction,
  handleAuthentication,
  loginSuccess,
} from '../../redux/actions';
import {
  FetchUserQueryDocument,
  RegisterUserMutationDocument,
  RegisterUserMutationOldDocument
} from '@adminide-stack/core'
import {
  userAuth0UserIdSelector,
  isAuthenticatedSelector,
  isLoggingInToProceedSelector,
} from '../../selectors';


export interface UserResponse {
  fetchAuth0User: { id: string } | null;
}

function mapStateToProps(state: Store.Auth, ownProps) {
  const isLoggingInToProceed = isLoggingInToProceedSelector(state);
  const isAuthenticated = isAuthenticatedSelector(state);
  const userAuth0UserId = userAuth0UserIdSelector(state);

  return {
    loginRedirectPath: state.redirectRoutes.loginRedirect,
    isLoggingInToProceed,
    isAuthenticated,
    userAuth0UserId,
  };
}

function mapDispatchToProps(dispatch: Dispatch<Action | RouterAction>) {
  return {
    redirect(url: string) {
      dispatch(push(url));
    },
    doAuthentication() {
      dispatch(handleAuthentication() as any);
    },
    clearSavedStoreState() {
      dispatch(clearSavedStoreStateAction());
    },
    onLoginSuccess(userId: string) {
      dispatch(loginSuccess(userId));
    },
  };
}



const FetchUser = ({ children, userAuth0UserId }) => (
  <Query query={FetchUserQueryDocument} ssr={false} variables={{ userId: userAuth0UserId }}>
    {result => {
      const { loading, error, data } = result;
      return children({
        isUserFetching: loading,
        isUserFetchingError: !!error,
        user: data && data.user,
      });
    }}
  </Query>
);



const RegisterUser = ({ children, token }) => (
  <Mutation mutation={RegisterUserMutationOldDocument} variables={{ idToken: token }} >
    {
      (registerUser, data) => {
        const { loading, error } = data;
        return children({
          registerUser,
        });
      }
    }
  </Mutation>
);

const fetchUserRequest = graphql<{ userAuth0UserId: any }, any, any, any>(FetchUserQueryDocument, {
  skip: ownProps => typeof window === 'undefined' || !ownProps.userAuth0UserId,
  options: ownProps => ({
    variables: { userId: ownProps.userAuth0UserId },
  }),
  // name: 'user',
  props: (props) => ({
    user: props.data.fetchAuth0User,
    isUserFetching: props.data.loading,
    isUserFetchingError: !!props.data.error,
  }),
});

const registerUserRequest = graphql(RegisterUserMutationDocument,
  {
    skip: () => typeof window === 'undefined',
    props: ({ mutate }): Partial<any> => ({
      registerUser: (idToken) => {
        return (
          mutate &&
          mutate({
            variables: {
              idToken,
            },
          })
        );
      },
    }),
  },
);


const reduxWrapper = connect(mapStateToProps, mapDispatchToProps);

export default compose(reduxWrapper, fetchUserRequest, registerUserRequest)(Callback);


