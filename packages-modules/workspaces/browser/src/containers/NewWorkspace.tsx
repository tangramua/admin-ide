import * as _ from 'lodash';
import gql from 'graphql-tag';
import * as React from 'react';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose, bindActionCreators } from 'redux';
import { userProfileSelector } from '@adminide-stack/user-auth0-browser';
import { GetGitProvidersStateDocument } from '@adminide-stack/core';

import { NewWorkspace as NewWorkspaceComponent, INewWorkspace } from '../components/NewWorkspace';

// const CACHE_REQUEST = gql`
//     mutation cache($request: IWorkspaceCreateRequestCache!) {
//         cacheWorkspaceCreationForm(request: $request) @client
//     }
// `;

const mapStateToProps = (state, props) => ({
    user: userProfileSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);

export const NewWorkspace = compose(
    // graphql(WORKSPACE_CACHE, {
    //     name: 'cache',
    //     props: ({ cache: { restoreWorkspaceCreationForm, loading } }: any) => ({
    //         cache: { data: restoreWorkspaceCreationForm, loading },
    //     }),
    // }),
    connect(mapStateToProps, mapDispatchToProps),
    graphql(GetGitProvidersStateDocument, { name: 'providers' }),
    // graphql(CACHE_REQUEST, {
    //     props: (props): Partial<INewWorkspace.Props> => ({
    //         cacheForm: (request) => props.mutate({ variables: { request } }),
    //     }),
    // }),
    // graphql(CLEAR_WORKSPACE_CACHE, {
    //     props: (props): Partial<INewWorkspace.Props> => ({
    //         clearCache: (request) => props.mutate({}),
    //     }),
    // }),
)(NewWorkspaceComponent) as any;
