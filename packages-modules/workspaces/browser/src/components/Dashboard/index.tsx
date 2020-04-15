import * as React from 'react';
import * as _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';
import {
  WorkspaceServerEvents,
} from '@adminide-stack/core';

import { Dashboard as DashboardComponent, IDashboardProps } from './Dashboard';
import {
  useAddWorkspaceMutation,
  useStartWorkspaceMutation,
  useRemoveWorkpsaceMutation,
  useStopWorkspaceMutation,
  useGetWorkspacesQuery,
  useUpdateWorkspaceMutation,
  useSubscribeToWorkspaceSubscription,
} from '../../generated';

export function isDuplicateWorkspace(newWorkspace, existingWorkspaces = []) {
  return existingWorkspaces.some(workspace => newWorkspace.id === workspace.id);
}


export const Dashboard = ({createBoxForm, repositories}) => {
  const {
    data: { workspaces  } = { workspaces: []},
    loading,
    subscribeToMore,
  } = useGetWorkspacesQuery({ fetchPolicy: 'network-only' });
  const authenticated = useSelector<any, any>(state => (state.auth || {}).authenticated || true);
  const dispatch = useDispatch();
  const [stopWorkspace] = useStopWorkspaceMutation();
  const [startWorkspace] = useStartWorkspaceMutation();
  const [updateWorkspace] = useUpdateWorkspaceMutation();
  const [addWorkspace] = useAddWorkspaceMutation();
  const [removeWorkspace] = useRemoveWorkpsaceMutation();

  const shutdown = request => stopWorkspace({ variables: { request } });
  const start = request => startWorkspace({ variables: { request } });
  const update = request => updateWorkspace({ variables: { request } });
  const add = request => addWorkspace({ variables: { request } });
  const remove = request => removeWorkspace({ variables: { request } });

  function routeTo(url: string) {
    dispatch(push(url));
  }

  function subscribeToWorkspace() {}
  //   subscribeToMore({
  //     document: WORKSPACES_SUBSCRIPTION,
  //     variables: {
  //       filter: {},
  //       mutations: [
  //         WorkspaceServerEvents.WORKSPACE_CREATED_EVENT,
  //         WorkspaceServerEvents.WORKSPACE_UPDATED_EVENT,
  //         WorkspaceServerEvents.WORKSPACE_REMOVED_EVENT,
  //         WorkspaceServerEvents.WORKSPACE_STARTED_EVENT,
  //         WorkspaceServerEvents.WORKSPACE_STOPPED_EVENT,
  //       ],
  //     },
  //     updateQuery: (prev, updates) => {
  //       const { subscriptionData } = updates;
  //       const payload =
  //         subscriptionData.data &&
  //         subscriptionData.data.workspaces;
  //       if (!payload) {
  //         return prev;
  //       }

  //       if (
  //         payload.mutation === WorkspaceServerEvents.WORKSPACE_REMOVED_EVENT
  //       ) {
  //         const deleteResult = Object.assign({}, prev, {
  //           workspaces: _.filter(
  //             prev.workspaces,
  //             workspace => workspace.id !== payload.value.id,
  //           ),
  //         });
  //         return deleteResult;
  //       }

  //       if (isDuplicateWorkspace(payload.values, prev.workspaces)) {
  //         return prev;
  //       }

  //       const newResult = Object.assign({}, prev, {
  //         workspaces: [...prev.workspaces, payload.values],
  //       });
  //       return newResult;
  //     },
  //   });

  return (
    <DashboardComponent
      shutdown={shutdown}
      start={start}
      update={update}
      add={add}
      remove={remove}
      loading={loading}
      workspaces={workspaces}
      routeTo={routeTo}
      authenticated={authenticated}
      repositories={repositories}
      createBoxForm={createBoxForm}
      subscribeToWorkspace={subscribeToWorkspace}
    />
  );
};

