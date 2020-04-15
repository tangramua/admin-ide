import * as _ from 'lodash';
import * as React from 'react';
import * as Base64 from 'base-64';
import { useFela } from 'react-fela';
import { Query } from 'react-apollo';
import * as PropTypes from 'prop-types';
import * as Identicon from 'identicon.js';
import { TeamDocument } from '@adminide-stack/core';
import { TeamInvitation } from '@adminide-stack/react-shared-components';
import { Table, Button, Input, Avatar, Tag, Popconfirm, Modal } from 'antd';

const icon = user =>
    user.picture || `data:image/png;base64,${new Identicon(Base64.encode(user.name || 'myawsomestringbebe'), 420).toString()}`;

const columns = (props: any) => {
    return [
        {
            key: 'user',
            title: 'User',
            render: record => (
                <div>
                    <Avatar className="mr-2" src={icon(record.user || {})}>
                        {_.get(record, 'user.username')}
                    </Avatar>
                    {' '}
                    {_.get(record, 'user.email')}
                </div>
            ),
        },
        {
            key: 'permissions',
            title: 'Permissions',
            dataIndex: 'permissions',
            render: record => _.map(record, permission => <Tag color="blue">{permission}</Tag>),
        },
        {
            key: 'actions',
            title: 'Actions',
            render: record => (
                <div>
                    <Button className="mr-1" size="small" type="primary">Edit</Button>
                    <Popconfirm title="Are you sure？" okText="Yes" cancelText="No">
                        <Button className="mr-1" size="small" type="danger">Delete</Button>
                    </Popconfirm>
                </div>
            ),
        },
    ];
};

function wrapRefetch(refetch, fn) {
    return (...args) => fn(...args).then(() => refetch());
}

export function WorkspaceShare(props) {
    const { css } = useFela(props);
    const { workspace, user, loading, sendInvitations, resendInvitation, declineInvitation } = props;

    return (
        <Query variables={{ team: workspace.teamId }} query={TeamDocument}>
            {({ data, refetch, ...rest }) => (
                !loading && !data
                    ? null
                    : (
                        <TeamInvitation
                            user={user}
                            team={_.get(data, 'team')}
                            loading={loading || rest.loading}
                            sendInvitations={wrapRefetch(refetch, sendInvitations)}
                            resendInvitation={wrapRefetch(refetch, resendInvitation)}
                            declineInvitation={wrapRefetch(refetch, declineInvitation)}
                        />
                    )
            )}
        </Query>
    );
}

const styles = {
    icon: props => ({
        margin: '0 10px 0 0',
    }),
    action: props => ({
        marginTop: '0 5px 0 0',
    }),
};
