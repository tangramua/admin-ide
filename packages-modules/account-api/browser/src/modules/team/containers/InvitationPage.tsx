import { connect } from 'react-redux';
import { graphql } from 'react-apollo';
import { compose, bindActionCreators } from 'redux';
import { userProfileSelector } from '@adminide-stack/user-auth0-browser';
import { AcceptInvitationDocument, DeclineInvitationDocument } from '@adminide-stack/core';

import { Invitation } from '../components';

const mapStateToProps = (state, props) => ({
    profile: userProfileSelector(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch);

export const InvitationPage: any = compose(
    connect(mapStateToProps, mapDispatchToProps),
    graphql(AcceptInvitationDocument, {
        props: ({ mutate }): Partial<any> => ({
            acceptInvitation: (id) => mutate({ variables: { id } }),
        }),
    }),
    graphql(DeclineInvitationDocument, {
        props: ({ mutate }): Partial<any> => ({
            declineInvitation: (id) => mutate({ variables: { id } }),
        }),
    }),
)(Invitation);
