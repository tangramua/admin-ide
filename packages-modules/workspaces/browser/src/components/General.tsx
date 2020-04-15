import * as React from 'react';
import * as PropTypes from 'prop-types';

import { WorkspaceInfoCard } from './WorkspaceInfoCard';
import { LaunchSettingsCard } from './LaunchSettingsCard';

export class General extends React.Component<any, any> {
  public render() {
    const { workspace, form, data } = this.props;
    return (
      <div>
        <WorkspaceInfoCard {...this.props} />
        <br/>
        <LaunchSettingsCard {...this.props} />
      </div>
    );
  }
}

