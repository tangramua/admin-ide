import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose, bindActionCreators } from 'redux';
import { userProfileSelector } from '@adminide-stack/user-auth0-browser';
import { ResendInvitationDocument, SendInvitationDocument, DeclineInvitationDocument } from '@adminide-stack/core';
import { Team } from '../components';

const mapStateToProps = (state, props) => ({
    profile: userProfileSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export const TeamPage: any = compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(ResendInvitationDocument, {
        props: ({ mutate }): Partial<any> => ({
            resendInvitation: (id) => mutate({ variables: { id } }),
        }),
    }),
    graphql(SendInvitationDocument, {
        props: ({ mutate }): Partial<any> => ({
            sendInvitations: (request) => mutate({ variables: { request } }),
        }),
    }),
    graphql(DeclineInvitationDocument, {
        props: ({ mutate }): Partial<any> => ({
            declineInvitation: (id) => mutate({ variables: { id } }),
        }),
    }),
)(Team);
