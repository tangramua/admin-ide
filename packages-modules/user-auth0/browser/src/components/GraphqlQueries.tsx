import * as React from 'react';
import { graphql, Query, Mutation } from 'react-apollo';
import { FetchUserQueryDocument } from '@adminide-stack/core';

export const FetchUser = ({ children, userAuth0UserId }) => (
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



