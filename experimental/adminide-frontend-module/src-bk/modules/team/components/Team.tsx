import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { Query, graphql } from 'react-apollo';
import { PageView, TeamManagement } from '@adminide-stack/react-shared-components';
import { ProfileDocument } from '@adminide-stack/core';

const testUser = {
    email: 'test.cdmbase@dispostable.com',
};

export class TeamComponent extends React.Component<any, any> {

    public render() {
        const { 
            match: { params },
            sendInvitations,
            resendInvitation,
            profile,
            declineInvitation
        } = this.props;

        return (
            <PageView {...this.props} title="Team Settings">
                <div className="container py-3">
                    <Query variables={{ team: params.team }} query={ProfileDocument}>
                        {({ data, loading }) => (
                            !loading && !data
                                ? null
                                : (
                                    <TeamManagement
                                        user={profile}
                                        loading={loading}
                                        team={_.get(data, 'team')}
                                        sendInvitations={sendInvitations}
                                        resendInvitation={resendInvitation}
                                        declineInvitation={declineInvitation}
                                    />
                                )
                        )}
                    </Query>
                </div>
            </PageView>
        );
    }
}

export const Team = compose(
    graphql(ProfileDocument, {
        props: ({ data }) => ({
            profile: _.get(data, 'profile') || testUser,
        }),
    }),
)(TeamComponent as any);
