/* tslint:disable */

import * as SchemaTypes from '@adminide-stack/core';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

















export const WorkspaceDetailFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"config"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"launch"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"port"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"env"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"source"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"parameters"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"branch"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"httpsUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]};
export const WorkspaceInfoFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}}]}}]};
export const AddProjectDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddProject"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspace"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"project"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Project_Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addProject"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspace"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspace"}}},{"kind":"Argument","name":{"kind":"Name","value":"project"},"value":{"kind":"Variable","name":{"kind":"Name","value":"project"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"namespace"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orgId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"connectionId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"teamId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"config"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ports"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"globalVariables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"variables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"launch"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"port"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"env"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stacks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"chartName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"releaseName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"chartVersion"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"namespace"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"connectionId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"source"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"parameters"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"branch"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useAddProjectMutation__
 *
 * To run a mutation, you first call `useAddProjectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddProjectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addProjectMutation, { data, loading, error }] = useAddProjectMutation({
 *   variables: {
 *      workspace: // value for 'workspace'
 *      project: // value for 'project'
 *   },
 * });
 */
export function useAddProjectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IAddProjectMutation, SchemaTypes.IAddProjectMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IAddProjectMutation, SchemaTypes.IAddProjectMutationVariables>(AddProjectDocument, baseOptions);
      }
export type AddProjectMutationHookResult = ReturnType<typeof useAddProjectMutation>;
export type AddProjectMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IAddProjectMutation>;
export type AddProjectMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IAddProjectMutation, SchemaTypes.IAddProjectMutationVariables>;
export const AddStacksDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddStacks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"workspace"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"stacks"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Stack_Input"}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addStacks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"workspace"},"value":{"kind":"Variable","name":{"kind":"Name","value":"workspace"}}},{"kind":"Argument","name":{"kind":"Name","value":"stacks"},"value":{"kind":"Variable","name":{"kind":"Name","value":"stacks"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"namespace"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orgId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"connectionId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"teamId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"config"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ports"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"globalVariables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"variables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"launch"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"port"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"env"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stacks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"chartName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"releaseName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"chartVersion"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"namespace"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"connectionId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"source"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"parameters"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"branch"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useAddStacksMutation__
 *
 * To run a mutation, you first call `useAddStacksMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddStacksMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addStacksMutation, { data, loading, error }] = useAddStacksMutation({
 *   variables: {
 *      workspace: // value for 'workspace'
 *      stacks: // value for 'stacks'
 *   },
 * });
 */
export function useAddStacksMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IAddStacksMutation, SchemaTypes.IAddStacksMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IAddStacksMutation, SchemaTypes.IAddStacksMutationVariables>(AddStacksDocument, baseOptions);
      }
export type AddStacksMutationHookResult = ReturnType<typeof useAddStacksMutation>;
export type AddStacksMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IAddStacksMutation>;
export type AddStacksMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IAddStacksMutation, SchemaTypes.IAddStacksMutationVariables>;
export const AddWorkspaceDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"AddWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceCreate_Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useAddWorkspaceMutation__
 *
 * To run a mutation, you first call `useAddWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addWorkspaceMutation, { data, loading, error }] = useAddWorkspaceMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useAddWorkspaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IAddWorkspaceMutation, SchemaTypes.IAddWorkspaceMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IAddWorkspaceMutation, SchemaTypes.IAddWorkspaceMutationVariables>(AddWorkspaceDocument, baseOptions);
      }
export type AddWorkspaceMutationHookResult = ReturnType<typeof useAddWorkspaceMutation>;
export type AddWorkspaceMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IAddWorkspaceMutation>;
export type AddWorkspaceMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IAddWorkspaceMutation, SchemaTypes.IAddWorkspaceMutationVariables>;
export const RemoveWorkpsaceDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"RemoveWorkpsace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceRemove_Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[]}]}}]};

/**
 * __useRemoveWorkpsaceMutation__
 *
 * To run a mutation, you first call `useRemoveWorkpsaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveWorkpsaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeWorkpsaceMutation, { data, loading, error }] = useRemoveWorkpsaceMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useRemoveWorkpsaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IRemoveWorkpsaceMutation, SchemaTypes.IRemoveWorkpsaceMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IRemoveWorkpsaceMutation, SchemaTypes.IRemoveWorkpsaceMutationVariables>(RemoveWorkpsaceDocument, baseOptions);
      }
export type RemoveWorkpsaceMutationHookResult = ReturnType<typeof useRemoveWorkpsaceMutation>;
export type RemoveWorkpsaceMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IRemoveWorkpsaceMutation>;
export type RemoveWorkpsaceMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IRemoveWorkpsaceMutation, SchemaTypes.IRemoveWorkpsaceMutationVariables>;
export const SetEnvVariablesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"SetEnvVariables"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceVariables_Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"setEnvVariables"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[]}]}}]};

/**
 * __useSetEnvVariablesMutation__
 *
 * To run a mutation, you first call `useSetEnvVariablesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSetEnvVariablesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [setEnvVariablesMutation, { data, loading, error }] = useSetEnvVariablesMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSetEnvVariablesMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.ISetEnvVariablesMutation, SchemaTypes.ISetEnvVariablesMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.ISetEnvVariablesMutation, SchemaTypes.ISetEnvVariablesMutationVariables>(SetEnvVariablesDocument, baseOptions);
      }
export type SetEnvVariablesMutationHookResult = ReturnType<typeof useSetEnvVariablesMutation>;
export type SetEnvVariablesMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.ISetEnvVariablesMutation>;
export type SetEnvVariablesMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.ISetEnvVariablesMutation, SchemaTypes.ISetEnvVariablesMutationVariables>;
export const StartWorkspaceDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StartWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceStart_Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"startWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[]}]}}]};

/**
 * __useStartWorkspaceMutation__
 *
 * To run a mutation, you first call `useStartWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStartWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [startWorkspaceMutation, { data, loading, error }] = useStartWorkspaceMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useStartWorkspaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IStartWorkspaceMutation, SchemaTypes.IStartWorkspaceMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IStartWorkspaceMutation, SchemaTypes.IStartWorkspaceMutationVariables>(StartWorkspaceDocument, baseOptions);
      }
export type StartWorkspaceMutationHookResult = ReturnType<typeof useStartWorkspaceMutation>;
export type StartWorkspaceMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IStartWorkspaceMutation>;
export type StartWorkspaceMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IStartWorkspaceMutation, SchemaTypes.IStartWorkspaceMutationVariables>;
export const StopWorkspaceDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"StopWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceStop_Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stopWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[]}]}}]};

/**
 * __useStopWorkspaceMutation__
 *
 * To run a mutation, you first call `useStopWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useStopWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [stopWorkspaceMutation, { data, loading, error }] = useStopWorkspaceMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useStopWorkspaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IStopWorkspaceMutation, SchemaTypes.IStopWorkspaceMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IStopWorkspaceMutation, SchemaTypes.IStopWorkspaceMutationVariables>(StopWorkspaceDocument, baseOptions);
      }
export type StopWorkspaceMutationHookResult = ReturnType<typeof useStopWorkspaceMutation>;
export type StopWorkspaceMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IStopWorkspaceMutation>;
export type StopWorkspaceMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IStopWorkspaceMutation, SchemaTypes.IStopWorkspaceMutationVariables>;
export const UpdateWorkspaceDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceUpdate_Input"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useUpdateWorkspaceMutation__
 *
 * To run a mutation, you first call `useUpdateWorkspaceMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateWorkspaceMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateWorkspaceMutation, { data, loading, error }] = useUpdateWorkspaceMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useUpdateWorkspaceMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IUpdateWorkspaceMutation, SchemaTypes.IUpdateWorkspaceMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IUpdateWorkspaceMutation, SchemaTypes.IUpdateWorkspaceMutationVariables>(UpdateWorkspaceDocument, baseOptions);
      }
export type UpdateWorkspaceMutationHookResult = ReturnType<typeof useUpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IUpdateWorkspaceMutation>;
export type UpdateWorkspaceMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IUpdateWorkspaceMutation, SchemaTypes.IUpdateWorkspaceMutationVariables>;
export const ClearWorkspaceCreationFormDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"ClearWorkspaceCreationForm"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clearWorkspaceCreationForm"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}]}]}}]};

/**
 * __useClearWorkspaceCreationFormMutation__
 *
 * To run a mutation, you first call `useClearWorkspaceCreationFormMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useClearWorkspaceCreationFormMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [clearWorkspaceCreationFormMutation, { data, loading, error }] = useClearWorkspaceCreationFormMutation({
 *   variables: {
 *   },
 * });
 */
export function useClearWorkspaceCreationFormMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IClearWorkspaceCreationFormMutation, SchemaTypes.IClearWorkspaceCreationFormMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IClearWorkspaceCreationFormMutation, SchemaTypes.IClearWorkspaceCreationFormMutationVariables>(ClearWorkspaceCreationFormDocument, baseOptions);
      }
export type ClearWorkspaceCreationFormMutationHookResult = ReturnType<typeof useClearWorkspaceCreationFormMutation>;
export type ClearWorkspaceCreationFormMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IClearWorkspaceCreationFormMutation>;
export type ClearWorkspaceCreationFormMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IClearWorkspaceCreationFormMutation, SchemaTypes.IClearWorkspaceCreationFormMutationVariables>;
export const RestoreWorkspaceCreationFormDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"RestoreWorkspaceCreationForm"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"restoreWorkspaceCreationForm"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}]}]}}]};

/**
 * __useRestoreWorkspaceCreationFormQuery__
 *
 * To run a query within a React component, call `useRestoreWorkspaceCreationFormQuery` and pass it any options that fit your needs.
 * When your component renders, `useRestoreWorkspaceCreationFormQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRestoreWorkspaceCreationFormQuery({
 *   variables: {
 *   },
 * });
 */
export function useRestoreWorkspaceCreationFormQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IRestoreWorkspaceCreationFormQuery, SchemaTypes.IRestoreWorkspaceCreationFormQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IRestoreWorkspaceCreationFormQuery, SchemaTypes.IRestoreWorkspaceCreationFormQueryVariables>(RestoreWorkspaceCreationFormDocument, baseOptions);
      }
export function useRestoreWorkspaceCreationFormLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IRestoreWorkspaceCreationFormQuery, SchemaTypes.IRestoreWorkspaceCreationFormQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IRestoreWorkspaceCreationFormQuery, SchemaTypes.IRestoreWorkspaceCreationFormQueryVariables>(RestoreWorkspaceCreationFormDocument, baseOptions);
        }
export type RestoreWorkspaceCreationFormQueryHookResult = ReturnType<typeof useRestoreWorkspaceCreationFormQuery>;
export type RestoreWorkspaceCreationFormLazyQueryHookResult = ReturnType<typeof useRestoreWorkspaceCreationFormLazyQuery>;
export type RestoreWorkspaceCreationFormQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IRestoreWorkspaceCreationFormQuery, SchemaTypes.IRestoreWorkspaceCreationFormQueryVariables>;
export const GetWorkspaceDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"namespace"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orgId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"connectionId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"teamId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"config"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ports"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"globalVariables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"variables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"launch"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"port"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"env"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stacks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"chartName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"releaseName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"chartVersion"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"namespace"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"connectionId"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"source"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"parameters"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"branch"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetWorkspaceQuery__
 *
 * To run a query within a React component, call `useGetWorkspaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspaceQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetWorkspaceQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGetWorkspaceQuery, SchemaTypes.IGetWorkspaceQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGetWorkspaceQuery, SchemaTypes.IGetWorkspaceQueryVariables>(GetWorkspaceDocument, baseOptions);
      }
export function useGetWorkspaceLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGetWorkspaceQuery, SchemaTypes.IGetWorkspaceQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGetWorkspaceQuery, SchemaTypes.IGetWorkspaceQueryVariables>(GetWorkspaceDocument, baseOptions);
        }
export type GetWorkspaceQueryHookResult = ReturnType<typeof useGetWorkspaceQuery>;
export type GetWorkspaceLazyQueryHookResult = ReturnType<typeof useGetWorkspaceLazyQuery>;
export type GetWorkspaceQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGetWorkspaceQuery, SchemaTypes.IGetWorkspaceQueryVariables>;
export const WorkspaceStateDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"WorkspaceState"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaceState"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useWorkspaceStateQuery__
 *
 * To run a query within a React component, call `useWorkspaceStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useWorkspaceStateQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useWorkspaceStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useWorkspaceStateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IWorkspaceStateQuery, SchemaTypes.IWorkspaceStateQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IWorkspaceStateQuery, SchemaTypes.IWorkspaceStateQueryVariables>(WorkspaceStateDocument, baseOptions);
      }
export function useWorkspaceStateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IWorkspaceStateQuery, SchemaTypes.IWorkspaceStateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IWorkspaceStateQuery, SchemaTypes.IWorkspaceStateQueryVariables>(WorkspaceStateDocument, baseOptions);
        }
export type WorkspaceStateQueryHookResult = ReturnType<typeof useWorkspaceStateQuery>;
export type WorkspaceStateLazyQueryHookResult = ReturnType<typeof useWorkspaceStateLazyQuery>;
export type WorkspaceStateQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IWorkspaceStateQuery, SchemaTypes.IWorkspaceStateQueryVariables>;
export const GetWorkspacesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetWorkspaces"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"workspaces"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"config"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ports"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"application"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"globalVariables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"variables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"launch"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"port"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"env"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetWorkspacesQuery__
 *
 * To run a query within a React component, call `useGetWorkspacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetWorkspacesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetWorkspacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetWorkspacesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGetWorkspacesQuery, SchemaTypes.IGetWorkspacesQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGetWorkspacesQuery, SchemaTypes.IGetWorkspacesQueryVariables>(GetWorkspacesDocument, baseOptions);
      }
export function useGetWorkspacesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGetWorkspacesQuery, SchemaTypes.IGetWorkspacesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGetWorkspacesQuery, SchemaTypes.IGetWorkspacesQueryVariables>(GetWorkspacesDocument, baseOptions);
        }
export type GetWorkspacesQueryHookResult = ReturnType<typeof useGetWorkspacesQuery>;
export type GetWorkspacesLazyQueryHookResult = ReturnType<typeof useGetWorkspacesLazyQuery>;
export type GetWorkspacesQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGetWorkspacesQuery, SchemaTypes.IGetWorkspacesQueryVariables>;
export const SubscribeToWorkspaceDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"subscription","name":{"kind":"Name","value":"subscribeToWorkspace"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filter"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeWorkspaceFilter"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"mutations"}},"type":{"kind":"NonNullType","type":{"kind":"ListType","type":{"kind":"NamedType","name":{"kind":"Name","value":"WorkspaceServerEvents"}}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribeToWorkspace"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filter"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filter"}}},{"kind":"Argument","name":{"kind":"Name","value":"mutations"},"value":{"kind":"Variable","name":{"kind":"Name","value":"mutations"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"mutation"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useSubscribeToWorkspaceSubscription__
 *
 * To run a query within a React component, call `useSubscribeToWorkspaceSubscription` and pass it any options that fit your needs.
 * When your component renders, `useSubscribeToWorkspaceSubscription` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the subscription, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribeToWorkspaceSubscription({
 *   variables: {
 *      filter: // value for 'filter'
 *      mutations: // value for 'mutations'
 *   },
 * });
 */
export function useSubscribeToWorkspaceSubscription(baseOptions?: ApolloReactHooks.SubscriptionHookOptions<SchemaTypes.ISubscribeToWorkspaceSubscription, SchemaTypes.ISubscribeToWorkspaceSubscriptionVariables>) {
        return ApolloReactHooks.useSubscription<SchemaTypes.ISubscribeToWorkspaceSubscription, SchemaTypes.ISubscribeToWorkspaceSubscriptionVariables>(SubscribeToWorkspaceDocument, baseOptions);
      }
export type SubscribeToWorkspaceSubscriptionHookResult = ReturnType<typeof useSubscribeToWorkspaceSubscription>;
export type SubscribeToWorkspaceSubscriptionResult = ApolloReactCommon.SubscriptionResult<SchemaTypes.ISubscribeToWorkspaceSubscription>;