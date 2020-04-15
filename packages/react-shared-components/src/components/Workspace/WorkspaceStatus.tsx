import * as React from 'react';
import { Tooltip } from 'antd';
import { useFela } from 'react-fela';
import FontAwesome from 'react-fontawesome';
import { WorkspaceStatus as WSStatuses } from '@adminide-stack/core';

const Labels = {
    [WSStatuses.WORKSPACE_STATUS_ACTIVE]: 'Active',
    [WSStatuses.WORKSPACE_STATUS_STARTED]: 'Started',
    [WSStatuses.WORKSPACE_STATUS_STOPPED]: 'Stopped',
    [WSStatuses.WORKSPACE_STATUS_PENDING]: 'Pending',
    [WSStatuses.WORKSPACE_STATUS_DISABLED]: 'Disabled',
    [WSStatuses.WORKSPACE_STATUS_CONNECTED]: 'Connected',
};

export function WorkspaceStatus({ workspace, ...props }) {
    const { css } = useFela(props);

    return (
        <Tooltip placement="right" title={Labels[workspace.status]}>
            <FontAwesome
                name="circle"
                className={`${css(styles.icon)} -${workspace.status}`}
            />
        </Tooltip>
    );
}

const styles: any = {
    icon: (props: { workspace }) => ({
        [`&.-WORKSPACE_STATUS_ACTIVE`]: ({
            color: '#449d44',
        }),
        [`&.-WORKSPACE_STATUS_DISABLED`]: ({
            color: '#ababab',
        }),
        [`&.-WORKSPACE_STATUS_PENDING`]: ({
            color: '#ec971f',
        }),
        [`&.-WORKSPACE_STATUS_STARTED`]: ({
            color: '#ec971f',
        }),
    }),
};
