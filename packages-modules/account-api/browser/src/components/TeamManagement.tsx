import * as _ from 'lodash';
import * as React from 'react';

import { DangerZone } from './DangerZone';
import { TeamInvitation } from './TeamInvitations';

export class TeamManagement extends React.Component<any, any> {
    public render() {
        const { form, team, user, loading, sendInvitations, resendInvitation, declineInvitation } = this.props;

        return (
            <div>
                <TeamInvitation
                    user={user}
                    team={team}
                    loading={loading}
                    sendInvitations={sendInvitations}
                    resendInvitation={resendInvitation}
                    declineInvitation={declineInvitation}
                />
                <br/>
                <DangerZone
                    user={user}
                    team={team}
                    loading={loading}
                />
            </div>
        );
    }
}
