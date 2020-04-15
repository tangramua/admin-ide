import * as _ from 'lodash';
import * as React from 'react';
import { message } from 'antd';
import { Query } from 'react-apollo';
import { useFela } from 'react-fela';
import { PageView } from '@adminide-stack/react-shared-components';
import { TeamDocument, InvitationDocument } from '@adminide-stack/core';
import { InvitationComponent as InvitationCard } from '../../../components'

export function Invitation(props: any) {
    const { css } = useFela(props);

    const onAccept = invitation => {
        acceptInvitation(invitation._id)
            .then(() => message.success('Invitation accepted!'))
            .catch((err) => message.error('Something wrong... Please, Try later'));
    };

    const onDecline = invitation => {
        declineInvitation(invitation._id)
            .then(() => message.success('Invitation declined!'))
            .catch((err) => message.error('Something wrong... Please, Try later'));
    };

    const { match: { params }, acceptInvitation, declineInvitation } = props;

    return (
        <PageView {...props}>
            <div className={css(styles.content)}>
                <Query variables={{ id: params.invitation }} query={InvitationDocument}>
                    {(invitation) => (
                        !invitation.error ? (
                            <Query
                                query={TeamDocument}
                                skip={!!invitation.error || invitation.loading}
                                variables={{ team: _.get(invitation.data, 'invitation.teamId') }}
                            >
                                {team => (
                                    !team.error ? (
                                        <InvitationCard
                                            team={_.get(team.data, 'team', {})}
                                            loading={invitation.loading || team.loading}
                                            invitation={_.get(invitation.data, 'invitation', {})}
                                            onAccept={onAccept}
                                            onDecline={onDecline}
                                        />
                                    ) : null
                                )}
                            </Query>
                        ) : null
                    )}
                </Query>
            </div>
        </PageView>
    );

}

const styles: any = {
    content: ({
        height: '100%',
        width: '960px',
        display: 'flex',
        margin: '0 auto',
        padding: '15px 0',
        alignItems: 'center',
        justifyItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    }),
};
