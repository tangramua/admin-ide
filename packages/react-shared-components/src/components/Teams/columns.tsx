import React from 'react';
import * as _ from 'lodash';
import { Avatar, Tag, message, Button } from 'antd';
import { IInvitation, ITeamMember, TeamMemberRole } from '@adminide-stack/account';

import { TableActions } from './TableActions';

const UserRecord = ({ record }) => {
    return (
        <div>
            <Avatar className="mr-2">{record.email}</Avatar>
            <span className="mr-2">{record.email}</span>
            <Tag color="blue">{_.capitalize(record.role)}</Tag>
        </div>
    );
};

export const invitations = props => [
    {
        title: 'User',
        render: (record: IInvitation) => <UserRecord record={record} />,
    },
    {
        render: record => record.active ? (
            <TableActions
                actions={[
                    {
                        type: 'primary',
                        name: 'Resend Invitation',
                        action: (e) => (
                            props
                                .resendInvitation(record.id)
                                .then(() => message.success('Invitation has been re-sent!'))
                                .catch(() => message.error('Can not resend invitation. Try later...'))
                        ),
                    },
                    {
                        type: 'danger',
                        name: 'Decline Invitation',
                        action: (e) => (
                            props
                                .declineInvitation(record.id)
                                .then(() => message.success('Invitatin has been deactivated!'))
                                .catch(() => message.error('Can not recline invitation. Try later...'))
                        ),
                    },
                ]}
            />
        ) : (
            <div style={{ textAlign: 'right' }}>
                {record.acceptedAt
                    ? <Tag color="blue">Accepted</Tag>
                    : (
                        <div>
                            <Tag color="red">Declined</Tag>
                            {' '}
                            <Button
                                size="small"
                                type="primary"
                                onClick={(e) => (
                                    props
                                        .resendInvitation(record.id)
                                        .then(() => message.success('Invitation has been re-sent!'))
                                        .catch(() => message.error('Can not resend invitation. Try later...'))
                                        )
                                }
                            >
                                Resend Invitation
                            </Button>
                        </div>
                    )}
            </div>
        ),
    },
];

export const members = props => [
    {
        title: 'User',
        render: (record: ITeamMember) => <UserRecord record={record} />,
    },
    {
        render: record => (
            record.role === TeamMemberRole.MAINTAINER ? null : (
                <TableActions
                    actions={[
                        {
                            type: 'primary',
                            name: 'Change Permissions',
                            action: (e) => props.onChangePerissions(record),
                        },
                        {
                            type: 'danger',
                            name: 'Remove from team',
                            action: (e) => props.onRemove(record),
                        },
                    ]}
                />
            )
        ),
    },
];
