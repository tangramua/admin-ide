import { WORKSPACES_CLIENT_QUERY } from '../queries';
import { } from '@adminide-stack/core';

const TYPE_NAME = 'WorkspaceState';

const FORM_STORE = form => `[cache.form.${form}]`;
const WORKSPACE_CREATION_FORM = 'WORKSPACE_CREATION_FORM';

const resolvers = {
    Query: {
        workspaceState: (_, args, { cache }) => {
            const { workspace: { workspace } } = cache.readQuery({ query: WORKSPACES_CLIENT_QUERY });
            return {
                workspace: {
                    ...workspace,
                },
                __typename: TYPE_NAME,
            };
        },
        restoreWorkspaceCreationForm: (root) => {
            return localStorage.getItem(FORM_STORE(WORKSPACE_CREATION_FORM));
          },
    },
    Mutation: {
        saveWorkspace: (_, { workspace }, { cache }) => {
            const addWorkspace = {
                ...workspace,
            };

            cache.writeData({ data: { workspace } });
            return null;
        },
        clearWorkspaceCreationForm: () => localStorage.setItem(FORM_STORE(WORKSPACE_CREATION_FORM), null),
        cacheWorkspaceCreationForm: (root, { request }) => {
          localStorage.setItem(FORM_STORE(WORKSPACE_CREATION_FORM), JSON.stringify(request));
          return true;
        },
    },
};

const defaults = { };

export { resolvers, defaults };
