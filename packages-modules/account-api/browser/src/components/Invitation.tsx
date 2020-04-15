import * as _ from 'lodash';
import * as React from 'react';
import { Button, Card } from 'antd';
import { useFela } from 'react-fela';
import { IInvitation, ITeam } from '@adminide-stack/account';

export interface IInvitationProps {
    team: ITeam;
    styles?: any;
    loading: boolean;
    invitation: IInvitation;
    onAccept: (invitation: IInvitation) => any;
    onDecline: (invitation: IInvitation) => any;
}

export function InvitationComponent(props: IInvitationProps) {
    const { css } = useFela(props);
    const { team, loading, invitation, onAccept, onDecline } = props;

    const accept = () => onAccept(invitation);
    const decline = () => onDecline(invitation);

    return (
        <Card
            loading={loading}
            bodyStyle={styles.centered}
            className={css(styles.card)}
        >
            <div>
                <h2>{_.upperCase(team.name)}</h2>
                <p>{team.description}</p>
            </div>
            <div>
                <Button onClick={accept} type="primary">Accept Invitation</Button>
                {' '}
                <Button onClick={decline} type="default">Decline Invitation</Button>
            </div>
        </Card>
    );
}

const styles: any = {
    card: ({
        width: '690px',
    }),
    centered: props => ({
        textAlign: 'center',
    }),
};
