import * as _ from 'lodash';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose, bindActionCreators } from 'redux';
import { userProfileSelector } from '@adminide-stack/user-auth0-browser';
import {  SendInvitationDocument,
          ResendInvitationDocument,
          DeclineInvitationDocument,
          GetGitProvidersStateDocument,
          SetEnvVariablesDocument,
          UpdateWorkspaceDocument,
          AddProjectDocument,
          AddStacksDocument,
          GetWorkspaceDocument } from '@adminide-stack/core';
          
import { sidebar } from '@adminide-stack/react-shared-components';
import { WorkspaceDetails, IWorkspaceDetails } from '../components';

const mapStateToProps = state => ({
  profile: userProfileSelector(state),
  sidebar: _.get(state, '@adminide-stack/sidebar'),
});
const mapDispatchToProps = dispatch => bindActionCreators({ toggleSidebar: sidebar }, dispatch);

export const Details = compose(
  connect(mapStateToProps, mapDispatchToProps),
  graphql(GetGitProvidersStateDocument, { name: 'providers' }),
  graphql(SetEnvVariablesDocument, {
    props: ({ mutate }): Partial<IWorkspaceDetails.Props> => ({
      setVariables: (request) => mutate({ variables: { request } }),
    }),
  }),
  graphql(UpdateWorkspaceDocument, {
    props: ({ mutate }): Partial<IWorkspaceDetails.Props> => ({
      updateGeneral: (request) => mutate({ variables: { request } }),
    }),
  }),
  graphql(AddProjectDocument, {
    props: ({ mutate }): Partial<IWorkspaceDetails.Props> => ({
        addProject: (workspace, project) => mutate({ variables: { workspace, project } }),
    }),
  }),
  graphql(AddStacksDocument, {
    props: ({ mutate }): Partial<IWorkspaceDetails.Props> => ({
        addStacks: (workspace, stacks) => mutate({ variables: { workspace, stacks } }),
    }),
  }),
  graphql(GetWorkspaceDocument, {
    name: 'workspace',
    options: (props: any) => {
      return ({
        variables: {
          id: _.get(props, 'match.params.id'),
        },
      });
    },
  }),
  // Invitations
  graphql(ResendInvitationDocument, {
      props: ({ mutate }): Partial<IWorkspaceDetails.Props> => ({
          resendInvitation: (id) => mutate({ variables: { id } }),
      }),
  }),
  graphql(SendInvitationDocument, {
      props: ({ mutate }): Partial<IWorkspaceDetails.Props> => ({
          sendInvitations: (request) => mutate({ variables: { request } }),
      }),
  }),
  graphql(DeclineInvitationDocument, {
      props: ({ mutate }): Partial<IWorkspaceDetails.Props> => ({
          declineInvitation: (id) => mutate({ variables: { id } }),
      }),
  }),
)(WorkspaceDetails) as any;
