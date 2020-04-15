import * as logger from 'bunyan';
import { kebabCase } from 'lodash';
import {
  ACTION_SELECT_WORKSPACE,
  WORKSPACE_WORKSPACE_STATUS_ACTIVE,
  ACTION_WORKSPACES_METEOR_SYNC,
  WORKSPACE_STATUS_SHUTDOWN,
  ACTION_DELETE_WORKSPACE,
} from '../../constants';
import {
  BOX_CREATE,
  BOX_CREATE_PROGRESS,
  BOX_CREATE_DONE,
  BOX_CREATE_FAIL,
  BOX_START,
  BOX_START_PROGRESS,
  BOX_START_DONE,
  BOX_START_FAIL,
  BOX_SHUTDOWN,
  BOX_SHUTDOWN_PROGRESS,
  BOX_SHUTDOWN_DONE,
  BOX_SHUTDOWN_FAIL,
  BOX_REMOVE,
  BOX_REMOVE_PROGRESS,
  BOX_REMOVE_DONE,
  BOX_REMOVE_FAIL,
} from '../../constants';

// import SocketMap, { ConnectionsMap } from '../../../../api/socket-map';
// import { create as connect, bindFServer } from '../../../../api/socket';
import * as update from 'immutability-helper';
// import startWorkspace from '../graphql/queries/startWorkspace.graphql';
// import createWorkspace from '../../../../api/client/graphql/queries/createWorkspace.graphql';
// import deleteWorkspace from '../../../../api/client/graphql/queries/deleteWorkspace.graphql';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/observable/fromPromise';
// import { MeteorObservable } from 'meteor-rxjs';
/**
 * Sync the client with current data from database and
 * creates socket connection with FServer
 *
 */
export const sync = (data) => {
  // logger.debug(data);
  return {
    type: ACTION_WORKSPACES_METEOR_SYNC,
  };
};

export function isDuplicateWorkspace(newWorkspace, existingWorkspaces = []) {
  return newWorkspace.id !== null && existingWorkspaces.some(
    workspace => newWorkspace._id === workspace._id);
}

/**
 * Has start and shutdown actions
 * @type {{start: ((p1?:*)=>(p1:*)=>*), shutdown: ((p1?:*)=>(p1:*)=>*)}}
 */
export const box = ({
  start: _id => ({ dispatch, apolloClient: { mutate } }) => {
    // MeteorObservable.call('box.start', _id).subscribe(result => dispatch({
    //   type: BOX_START_DONE,
    //   payload: { result },
    // }), error => dispatch({
    //   type: BOX_START_FAIL,
    //   payload: { error },
    // }),
    // );

    // Observable.fromPromise(mutate({
    //   mutation: startWorkspace,
    //   variables: { _id },
    // })).subscribe(result => dispatch({
    //   type: BOX_START_DONE,
    //   payload: { result },
    // }), error =>
    //     dispatch({
    //       type: BOX_START_FAIL,
    //       payload: { error },
    //     }),
    // );
    return { type: BOX_START_PROGRESS };
  },
  shutdown: _id => ({ dispatch }) => {
    // MeteorObservable.call('box.shutdown', _id)
    //   .subscribe(result =>
    //   dispatch({
    //     type: BOX_SHUTDOWN_DONE,
    //     payload: { result },
    //   })
    // , error => dispatch({
    //   type: BOX_SHUTDOWN_FAIL,
    //   payload: { error },
    // }));
    return { type: BOX_SHUTDOWN_PROGRESS };
  },
  remove: id => ({ dispatch, apolloClient: { mutate } }) => {
    // Observable.fromPromise(mutate({
    //   mutation: deleteWorkspace,
    //   variables: { input: { _id: id } },

    // })).subscribe(result => dispatch({
    //   type: BOX_REMOVE_DONE,
    //   payload: { result },
    // }), error =>
    //     dispatch({
    //       type: BOX_REMOVE_FAIL,
    //       payload: { error },
    //     }),
    //   );
    return { type: BOX_REMOVE_PROGRESS };
  },
  create: (data) => {
    // Observable.fromPromise(mutate({
    //   mutation: createWorkspace,
    //   variables: { ...data },
    //   optimisticResponse: {
    //     __typename: 'Mutation',
    //     createWorkspace: {
    //       __typename: 'Workspace',
    //       lang: data.lang,
    //       name: data.name,
    //       _id: getUid(),
    //       creator: Meteor.userId(),
    //       status: 'STATUS_SHUTDOWN',
    //       completed: false,
    //       info: {
    //         __typename: 'Info',
    //         container: null,
    //         ports: null,
    //       },
    //       server: {
    //         __typename: 'Server',
    //         name: 'Test',
    //         status: 'WORKSPACE_STATUS_DISCONNECTED',
    //       },
    //       workspace: kebabCase(data.name),
    //       createdAt: now(),
    //     },
    //   },
    //   updateQueries: {
    //     getWorkspaces: (previousResult, { mutationResult }) => {
    //       const newWorkspace = mutationResult.data.createWorkspace;
    //       if (isDuplicateWorkspace(newWorkspace, previousResult.workspaces)) {
    //         return previousResult;
    //       }
    //       const newValue = update(previousResult, { workspaces: { $unshift: [newWorkspace] } });
    //       return newValue;
    //     },
    //   },
    // })).subscribe((result) => {
    //   callback();
    //   return dispatch({
    //     type: BOX_CREATE_DONE,
    //     payload: { result },
    //   });
    // }, error => dispatch({
    //   type: BOX_CREATE_FAIL,
    //   payload: { error },
    // }));
    return { type: BOX_CREATE, param: data };
  },
});

/**
 * Selected workspace Id with be updated
 * @param workspace
 */
export const select = workspace => ({
  type: ACTION_SELECT_WORKSPACE,
  workspace,
});

