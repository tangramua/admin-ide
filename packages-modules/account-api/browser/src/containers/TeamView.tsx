import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { graphql } from 'react-apollo';
import { SendInvitationDocument,
         ResendInvitationDocument,
         DeclineInvitationDocument,
         TeamDocument } from '@adminide-stack/core';

import { TeamView as TeamViewComponent } from '../components/TeamView';

export const TeamView = compose(
    graphql(TeamDocument, {
        name: 'team$',
        options: (props: any) => ({
            variables: {
                team: props.match.params.team,
            },
        }),
    }),
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
)(TeamViewComponent);
