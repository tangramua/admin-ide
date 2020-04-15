import { workspaceStatusFromValue, workspaceActions } from '../status';
import { WorkspaceStatus as WSStatuses } from '@adminide-stack/core';
import 'jest';




describe('transform the workspace status', () => {

    it('transform status', () => {

        console.log(workspaceStatusFromValue(WSStatuses.WORKSPACE_STATUS_STOPPED));
    });

    it('transform actions', () => {
        console.log(workspaceActions(workspaceStatusFromValue(WSStatuses.WORKSPACE_STATUS_ACTIVE) as any));
    });
});
