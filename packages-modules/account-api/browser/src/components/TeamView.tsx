import * as React from 'react';

import { TeamManagement } from './TeamManagement';

export class TeamView extends React.Component<any, any> {
    public render() {
        const { team$: { loading, team, error } } = this.props;

        return (
            <div>
                <TeamManagement {...this.props} team={team} loading={loading} />
            </div>
        );
    }
}
