import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Card, Table, Switch } from 'antd';

import { invitations, members } from './columns';
import { InvitationForm } from './InvitationForm';

export enum ManagementState {
    Invitations = 'invitations',
    TeamMembers = 'team-members',
}

export function TeamInvitation(props) {
    const { css } = useFela();
    const [mode, setMode ] = React.useState();
    const { loading, team, user, sendInvitations } = props;

    const changeMode = checked => setMode(
        checked
            ? ManagementState.TeamMembers
            : ManagementState.Invitations,
    );

    return (
        <Card
            className={css(styles.card)}
            title={(
                <InvitationForm
                    team={team}
                    user={user}
                    sendInvitations={sendInvitations}
                />
            )}
        >
            <div className={css(styles.controls)}>
                <Switch
                    onChange={changeMode}
                    checkedChildren="Members"
                    unCheckedChildren="Invitations"
                />
            </div>
            <Table
                rowKey="email"
                loading={loading}
                pagination={false}
                dataSource={mode === ManagementState.Invitations
                    ? _.get(team, 'invitations')
                    : _.get(team, 'teamMembers')}
                columns={mode === ManagementState.Invitations
                    ? invitations(props)
                    : members(props)}
                className={css(styles.table)}
            />
        </Card>
    );
}

const styles: any = {
    card: props => ({
        '& .ant-card-body': {
            padding: '10px 0 0 0',
        },
    }),
    table: props => ({
        border: '1px solid #e8e8e8',
        '& .ant-table-placeholder': {
            borderBottom: 'none',
        },
    }),
    controls: props => ({
        textAlign: 'right',
        padding: '0 10px 10px 10px',
    }),
};
