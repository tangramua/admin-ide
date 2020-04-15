

import { WorkspaceStatus as WSStatuses } from '@adminide-stack/core';

export enum WorkspaceStatus {
    Stopped = 'Stopped',
    Open = 'Open',
    Disabled = 'Disabled',
    Pending = 'Pending',
    NeedAction = 'NeedAction',
}
const Labels = {
    [WorkspaceStatus.Stopped]: [
        WSStatuses.WORKSPACE_STATUS_STOPPED,
        WSStatuses.WORKSPACE_STATUS_CREATED,
        WSStatuses.WORKSPACE_STATUS_INACTIVE,
    ],
    [WorkspaceStatus.Open]: [
        WSStatuses.WORKSPACE_STATUS_STARTED,
        WSStatuses.WORKSPACE_STATUS_CONNECTED,
        WSStatuses.WORKSPACE_STATUS_ACTIVE,
    ],
    [WorkspaceStatus.Disabled]: [
        WSStatuses.WORKSPACE_STATUS_DISABLED,
        WSStatuses.WORKSPACE_STATUS_ABANDONED,
    ],
    [WorkspaceStatus.Pending]: [
        WSStatuses.WORKSPACE_STATUS_PENDING,
        WSStatuses.WORKSPACE_STATUS_CREATING,
        WSStatuses.WORKSPACE_STATUS_STARTING,
        WSStatuses.WORKSPACE_STATUS_UPDATING,
        WSStatuses.WORKSPACE_STATUS_REMOVING,
        WSStatuses.WORKSPACE_STATUS_STOPPING,
    ],
    [WorkspaceStatus.NeedAction]: [
        WSStatuses.WORKSPACE_STATUS_ERRORED,
        WSStatuses.WORKSPACE_STATUS_FAILURE,
    ],
};

export interface IActions {
    openAction: () => void;
    startAction: () => void;
    stopAction: () => void;
    buildAction: () => void;
    activateAction: () => void;
    deactivateAction: () => void;
    detailAction: () => void;
}
export const CallableActions = (action: IActions) => [
    {
        key: 'Open',
        description: 'Open workspace',
        action: action.openAction,
        condition: [WorkspaceStatus.Open],
    },
    {
        key: 'Start',
        description: 'Starts workspace',
        action: action.startAction,
        condition: [WorkspaceStatus.Stopped],
    },
    {
        key: 'Stop',
        description: 'Stops workspace',
        action: action.stopAction,
        condition: [WorkspaceStatus.Open],
    },
    {
        key: 'Build',
        description: 'Build workspace',
        action: action.buildAction,
        condition: [WorkspaceStatus.Open],
    },
    {
        key: 'Activate',
        description: 'Activate workspace',
        action: action.activateAction,
        condition: [WorkspaceStatus.Disabled],
    },
    {
        key: 'Deactivate',
        description: 'Deactivate workspace',
        action: action.deactivateAction,
        condition: [WorkspaceStatus.Disabled, WorkspaceStatus.Open, WorkspaceStatus.Stopped],
    },
    {
        key: 'Waiting',
        description: 'Waiting...',
        action: () => null,
        condition: [WorkspaceStatus.Pending],
    },
    {
        key: 'details',
        description: 'Details of error',
        action: action.detailAction,
        condition: [WorkspaceStatus.NeedAction],
    },
];

export function workspaceActions(actions: IActions) {
    return (status) => CallableActions(actions).filter(v => v.condition.indexOf(status) >= 0);
}
export function workspaceStatusFromValue(value: string): string | undefined {
    for (const k of Object.keys(Labels)) {
        if (Labels[k].indexOf(value) >= 0) {
            return k;
        }
    }
    return 'status unknown';
}
