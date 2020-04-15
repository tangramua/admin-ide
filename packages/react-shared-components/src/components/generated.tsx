/* tslint:disable */

import * as SchemaTypes from '@adminide-stack/core';

import { DocumentNode } from 'graphql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';










































































export const FullRepositoryFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"descriptionHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"languages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"30"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"forks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PullRequest"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"merged"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"changedFiles"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"baseRefName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"headRefName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"mergeCommit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"oid"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"messageBodyHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commitUrl"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"refs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"refPrefix"},"value":{"kind":"StringValue","value":"refs/heads/","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"prefix"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"target"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Commit"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oid"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"messageBodyHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"committedDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]}]}}]};
export const GitRepositoryFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GitRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"descriptionHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"languages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"30"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"forks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"refs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"refPrefix"},"value":{"kind":"StringValue","value":"refs/heads/","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"target"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Commit"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]}]}}]};
export const SubscriptionInfoFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserSubscription"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]}]}}]};
export const UserFragmentFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthUser"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]};
export const UserProfileFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"family_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"given_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sub"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]}]}}]};
export const WorkspaceDetailFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceDetail"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"config"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"variables"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"launch"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"port"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"env"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"value"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"projects"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"source"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"type"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"location"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"providers"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"parameters"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"branch"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"httpsUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]};
export const WorkspaceInfoFragmentDoc: DocumentNode = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"WorkspaceInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Workspace"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"language"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon_url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"spec"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cpu"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"ram"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hdd"},"arguments":[],"directives":[]}]}}]}}]};
export const AcceptInvitationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"acceptInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"acceptInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[]}]}}]};

/**
 * __useAcceptInvitationMutation__
 *
 * To run a mutation, you first call `useAcceptInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAcceptInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [acceptInvitationMutation, { data, loading, error }] = useAcceptInvitationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAcceptInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IAcceptInvitationMutation, SchemaTypes.IAcceptInvitationMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IAcceptInvitationMutation, SchemaTypes.IAcceptInvitationMutationVariables>(AcceptInvitationDocument, baseOptions);
      }
export type AcceptInvitationMutationHookResult = ReturnType<typeof useAcceptInvitationMutation>;
export type AcceptInvitationMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IAcceptInvitationMutation>;
export type AcceptInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IAcceptInvitationMutation, SchemaTypes.IAcceptInvitationMutationVariables>;
export const CreateTeamDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createTeam"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ITeamCreationRequest"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createTeam"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orgId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useCreateTeamMutation__
 *
 * To run a mutation, you first call `useCreateTeamMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTeamMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTeamMutation, { data, loading, error }] = useCreateTeamMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCreateTeamMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.ICreateTeamMutation, SchemaTypes.ICreateTeamMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.ICreateTeamMutation, SchemaTypes.ICreateTeamMutationVariables>(CreateTeamDocument, baseOptions);
      }
export type CreateTeamMutationHookResult = ReturnType<typeof useCreateTeamMutation>;
export type CreateTeamMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.ICreateTeamMutation>;
export type CreateTeamMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.ICreateTeamMutation, SchemaTypes.ICreateTeamMutationVariables>;
export const DeclineInvitationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"declineInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"declineInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[]}]}}]};

/**
 * __useDeclineInvitationMutation__
 *
 * To run a mutation, you first call `useDeclineInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeclineInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [declineInvitationMutation, { data, loading, error }] = useDeclineInvitationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeclineInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IDeclineInvitationMutation, SchemaTypes.IDeclineInvitationMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IDeclineInvitationMutation, SchemaTypes.IDeclineInvitationMutationVariables>(DeclineInvitationDocument, baseOptions);
      }
export type DeclineInvitationMutationHookResult = ReturnType<typeof useDeclineInvitationMutation>;
export type DeclineInvitationMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IDeclineInvitationMutation>;
export type DeclineInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IDeclineInvitationMutation, SchemaTypes.IDeclineInvitationMutationVariables>;
export const InvitationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"invitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"invitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"teamId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"inviteCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiration"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useInvitationQuery__
 *
 * To run a query within a React component, call `useInvitationQuery` and pass it any options that fit your needs.
 * When your component renders, `useInvitationQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useInvitationQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useInvitationQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IInvitationQuery, SchemaTypes.IInvitationQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IInvitationQuery, SchemaTypes.IInvitationQueryVariables>(InvitationDocument, baseOptions);
      }
export function useInvitationLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IInvitationQuery, SchemaTypes.IInvitationQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IInvitationQuery, SchemaTypes.IInvitationQueryVariables>(InvitationDocument, baseOptions);
        }
export type InvitationQueryHookResult = ReturnType<typeof useInvitationQuery>;
export type InvitationLazyQueryHookResult = ReturnType<typeof useInvitationLazyQuery>;
export type InvitationQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IInvitationQuery, SchemaTypes.IInvitationQueryVariables>;
export const OrganizationsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"organizations"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organizations"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tier"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stripeId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"namespace"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"periodStop"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orgMembers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"userId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"inactive"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"periodStart"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"billingLeaders"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isBillingLeader"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"mainBilingLeaderId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"stripeSubscriptionId"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useOrganizationsQuery__
 *
 * To run a query within a React component, call `useOrganizationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useOrganizationsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useOrganizationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useOrganizationsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IOrganizationsQuery, SchemaTypes.IOrganizationsQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IOrganizationsQuery, SchemaTypes.IOrganizationsQueryVariables>(OrganizationsDocument, baseOptions);
      }
export function useOrganizationsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IOrganizationsQuery, SchemaTypes.IOrganizationsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IOrganizationsQuery, SchemaTypes.IOrganizationsQueryVariables>(OrganizationsDocument, baseOptions);
        }
export type OrganizationsQueryHookResult = ReturnType<typeof useOrganizationsQuery>;
export type OrganizationsLazyQueryHookResult = ReturnType<typeof useOrganizationsLazyQuery>;
export type OrganizationsQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IOrganizationsQuery, SchemaTypes.IOrganizationsQueryVariables>;
export const ResendInvitationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"resendInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"resendInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"directives":[]}]}}]};

/**
 * __useResendInvitationMutation__
 *
 * To run a mutation, you first call `useResendInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResendInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resendInvitationMutation, { data, loading, error }] = useResendInvitationMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useResendInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IResendInvitationMutation, SchemaTypes.IResendInvitationMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IResendInvitationMutation, SchemaTypes.IResendInvitationMutationVariables>(ResendInvitationDocument, baseOptions);
      }
export type ResendInvitationMutationHookResult = ReturnType<typeof useResendInvitationMutation>;
export type ResendInvitationMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IResendInvitationMutation>;
export type ResendInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IResendInvitationMutation, SchemaTypes.IResendInvitationMutationVariables>;
export const SendInvitationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"sendInvitation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ITeamInvitationRequest"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendInvitation"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[]}]}}]};

/**
 * __useSendInvitationMutation__
 *
 * To run a mutation, you first call `useSendInvitationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSendInvitationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [sendInvitationMutation, { data, loading, error }] = useSendInvitationMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useSendInvitationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.ISendInvitationMutation, SchemaTypes.ISendInvitationMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.ISendInvitationMutation, SchemaTypes.ISendInvitationMutationVariables>(SendInvitationDocument, baseOptions);
      }
export type SendInvitationMutationHookResult = ReturnType<typeof useSendInvitationMutation>;
export type SendInvitationMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.ISendInvitationMutation>;
export type SendInvitationMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.ISendInvitationMutation, SchemaTypes.ISendInvitationMutationVariables>;
export const TeamDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"team"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"team"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"team"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"team"},"value":{"kind":"Variable","name":{"kind":"Name","value":"team"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"invitations"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"teamId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"fullName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"invitedBy"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"acceptedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tokenExpiration"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"teamMembers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"userId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"role"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useTeamQuery__
 *
 * To run a query within a React component, call `useTeamQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamQuery({
 *   variables: {
 *      team: // value for 'team'
 *   },
 * });
 */
export function useTeamQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.ITeamQuery, SchemaTypes.ITeamQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.ITeamQuery, SchemaTypes.ITeamQueryVariables>(TeamDocument, baseOptions);
      }
export function useTeamLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.ITeamQuery, SchemaTypes.ITeamQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.ITeamQuery, SchemaTypes.ITeamQueryVariables>(TeamDocument, baseOptions);
        }
export type TeamQueryHookResult = ReturnType<typeof useTeamQuery>;
export type TeamLazyQueryHookResult = ReturnType<typeof useTeamLazyQuery>;
export type TeamQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.ITeamQuery, SchemaTypes.ITeamQueryVariables>;
export const TeamsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Teams"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"teams"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"orgId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useTeamsQuery__
 *
 * To run a query within a React component, call `useTeamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTeamsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTeamsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTeamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.ITeamsQuery, SchemaTypes.ITeamsQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.ITeamsQuery, SchemaTypes.ITeamsQueryVariables>(TeamsDocument, baseOptions);
      }
export function useTeamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.ITeamsQuery, SchemaTypes.ITeamsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.ITeamsQuery, SchemaTypes.ITeamsQueryVariables>(TeamsDocument, baseOptions);
        }
export type TeamsQueryHookResult = ReturnType<typeof useTeamsQuery>;
export type TeamsLazyQueryHookResult = ReturnType<typeof useTeamsLazyQuery>;
export type TeamsQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.ITeamsQuery, SchemaTypes.ITeamsQueryVariables>;
export const DockerCatalogDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dockerCatalog"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dockerCatalog"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useDockerCatalogQuery__
 *
 * To run a query within a React component, call `useDockerCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useDockerCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDockerCatalogQuery({
 *   variables: {
 *   },
 * });
 */
export function useDockerCatalogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IDockerCatalogQuery, SchemaTypes.IDockerCatalogQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IDockerCatalogQuery, SchemaTypes.IDockerCatalogQueryVariables>(DockerCatalogDocument, baseOptions);
      }
export function useDockerCatalogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IDockerCatalogQuery, SchemaTypes.IDockerCatalogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IDockerCatalogQuery, SchemaTypes.IDockerCatalogQueryVariables>(DockerCatalogDocument, baseOptions);
        }
export type DockerCatalogQueryHookResult = ReturnType<typeof useDockerCatalogQuery>;
export type DockerCatalogLazyQueryHookResult = ReturnType<typeof useDockerCatalogLazyQuery>;
export type DockerCatalogQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IDockerCatalogQuery, SchemaTypes.IDockerCatalogQueryVariables>;
export const GetAllDockerRegistriesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllDockerRegistries"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allDockerRegistries"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetAllDockerRegistriesQuery__
 *
 * To run a query within a React component, call `useGetAllDockerRegistriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllDockerRegistriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllDockerRegistriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllDockerRegistriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGetAllDockerRegistriesQuery, SchemaTypes.IGetAllDockerRegistriesQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGetAllDockerRegistriesQuery, SchemaTypes.IGetAllDockerRegistriesQueryVariables>(GetAllDockerRegistriesDocument, baseOptions);
      }
export function useGetAllDockerRegistriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGetAllDockerRegistriesQuery, SchemaTypes.IGetAllDockerRegistriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGetAllDockerRegistriesQuery, SchemaTypes.IGetAllDockerRegistriesQueryVariables>(GetAllDockerRegistriesDocument, baseOptions);
        }
export type GetAllDockerRegistriesQueryHookResult = ReturnType<typeof useGetAllDockerRegistriesQuery>;
export type GetAllDockerRegistriesLazyQueryHookResult = ReturnType<typeof useGetAllDockerRegistriesLazyQuery>;
export type GetAllDockerRegistriesQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGetAllDockerRegistriesQuery, SchemaTypes.IGetAllDockerRegistriesQueryVariables>;
export const CreateDockerRegistryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createDockerRegistry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IDockerRegistry"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createDockerRegistry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner_id"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useCreateDockerRegistryMutation__
 *
 * To run a mutation, you first call `useCreateDockerRegistryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDockerRegistryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDockerRegistryMutation, { data, loading, error }] = useCreateDockerRegistryMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateDockerRegistryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.ICreateDockerRegistryMutation, SchemaTypes.ICreateDockerRegistryMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.ICreateDockerRegistryMutation, SchemaTypes.ICreateDockerRegistryMutationVariables>(CreateDockerRegistryDocument, baseOptions);
      }
export type CreateDockerRegistryMutationHookResult = ReturnType<typeof useCreateDockerRegistryMutation>;
export type CreateDockerRegistryMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.ICreateDockerRegistryMutation>;
export type CreateDockerRegistryMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.ICreateDockerRegistryMutation, SchemaTypes.ICreateDockerRegistryMutationVariables>;
export const TagsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"tags"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"image"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registry"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dockerRegistryImageTags"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"image"},"value":{"kind":"Variable","name":{"kind":"Name","value":"image"}}},{"kind":"Argument","name":{"kind":"Name","value":"registry"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registry"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"tags"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useTagsQuery__
 *
 * To run a query within a React component, call `useTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTagsQuery({
 *   variables: {
 *      image: // value for 'image'
 *      registry: // value for 'registry'
 *   },
 * });
 */
export function useTagsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.ITagsQuery, SchemaTypes.ITagsQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.ITagsQuery, SchemaTypes.ITagsQueryVariables>(TagsDocument, baseOptions);
      }
export function useTagsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.ITagsQuery, SchemaTypes.ITagsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.ITagsQuery, SchemaTypes.ITagsQueryVariables>(TagsDocument, baseOptions);
        }
export type TagsQueryHookResult = ReturnType<typeof useTagsQuery>;
export type TagsLazyQueryHookResult = ReturnType<typeof useTagsLazyQuery>;
export type TagsQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.ITagsQuery, SchemaTypes.ITagsQueryVariables>;
export const DockerRegistryCatalogDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"dockerRegistryCatalog"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registry"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"dockerRegistryCatalog"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registry"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registry"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositories"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useDockerRegistryCatalogQuery__
 *
 * To run a query within a React component, call `useDockerRegistryCatalogQuery` and pass it any options that fit your needs.
 * When your component renders, `useDockerRegistryCatalogQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDockerRegistryCatalogQuery({
 *   variables: {
 *      registry: // value for 'registry'
 *   },
 * });
 */
export function useDockerRegistryCatalogQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IDockerRegistryCatalogQuery, SchemaTypes.IDockerRegistryCatalogQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IDockerRegistryCatalogQuery, SchemaTypes.IDockerRegistryCatalogQueryVariables>(DockerRegistryCatalogDocument, baseOptions);
      }
export function useDockerRegistryCatalogLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IDockerRegistryCatalogQuery, SchemaTypes.IDockerRegistryCatalogQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IDockerRegistryCatalogQuery, SchemaTypes.IDockerRegistryCatalogQueryVariables>(DockerRegistryCatalogDocument, baseOptions);
        }
export type DockerRegistryCatalogQueryHookResult = ReturnType<typeof useDockerRegistryCatalogQuery>;
export type DockerRegistryCatalogLazyQueryHookResult = ReturnType<typeof useDockerRegistryCatalogLazyQuery>;
export type DockerRegistryCatalogQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IDockerRegistryCatalogQuery, SchemaTypes.IDockerRegistryCatalogQueryVariables>;
export const RemoveDockerRegistryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeDockerRegistry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeDockerRegistry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}}],"directives":[]}]}}]};

/**
 * __useRemoveDockerRegistryMutation__
 *
 * To run a mutation, you first call `useRemoveDockerRegistryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveDockerRegistryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeDockerRegistryMutation, { data, loading, error }] = useRemoveDockerRegistryMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemoveDockerRegistryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IRemoveDockerRegistryMutation, SchemaTypes.IRemoveDockerRegistryMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IRemoveDockerRegistryMutation, SchemaTypes.IRemoveDockerRegistryMutationVariables>(RemoveDockerRegistryDocument, baseOptions);
      }
export type RemoveDockerRegistryMutationHookResult = ReturnType<typeof useRemoveDockerRegistryMutation>;
export type RemoveDockerRegistryMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IRemoveDockerRegistryMutation>;
export type RemoveDockerRegistryMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IRemoveDockerRegistryMutation, SchemaTypes.IRemoveDockerRegistryMutationVariables>;
export const UpdateDockerRegistryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateDockerRegistry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IDockerRegistry"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateDockerRegistry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner_id"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useUpdateDockerRegistryMutation__
 *
 * To run a mutation, you first call `useUpdateDockerRegistryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDockerRegistryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDockerRegistryMutation, { data, loading, error }] = useUpdateDockerRegistryMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateDockerRegistryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IUpdateDockerRegistryMutation, SchemaTypes.IUpdateDockerRegistryMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IUpdateDockerRegistryMutation, SchemaTypes.IUpdateDockerRegistryMutationVariables>(UpdateDockerRegistryDocument, baseOptions);
      }
export type UpdateDockerRegistryMutationHookResult = ReturnType<typeof useUpdateDockerRegistryMutation>;
export type UpdateDockerRegistryMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IUpdateDockerRegistryMutation>;
export type UpdateDockerRegistryMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IUpdateDockerRegistryMutation, SchemaTypes.IUpdateDockerRegistryMutationVariables>;
export const GetGitBranchesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGitBranches"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IGitServiceInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGitBranches"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useGetGitBranchesQuery__
 *
 * To run a query within a React component, call `useGetGitBranchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGitBranchesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGitBranchesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGetGitBranchesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGetGitBranchesQuery, SchemaTypes.IGetGitBranchesQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGetGitBranchesQuery, SchemaTypes.IGetGitBranchesQueryVariables>(GetGitBranchesDocument, baseOptions);
      }
export function useGetGitBranchesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGetGitBranchesQuery, SchemaTypes.IGetGitBranchesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGetGitBranchesQuery, SchemaTypes.IGetGitBranchesQueryVariables>(GetGitBranchesDocument, baseOptions);
        }
export type GetGitBranchesQueryHookResult = ReturnType<typeof useGetGitBranchesQuery>;
export type GetGitBranchesLazyQueryHookResult = ReturnType<typeof useGetGitBranchesLazyQuery>;
export type GetGitBranchesQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGetGitBranchesQuery, SchemaTypes.IGetGitBranchesQueryVariables>;
export const GitFetchUserDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GitFetchUser"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"30"}},{"kind":"Argument","name":{"kind":"Name","value":"affiliations"},"value":{"kind":"ListValue","values":[{"kind":"EnumValue","value":"OWNER"},{"kind":"EnumValue","value":"COLLABORATOR"},{"kind":"EnumValue","value":"ORGANIZATION_MEMBER"}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GitRepository"},"directives":[]}]}}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GitRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"descriptionHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"languages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"30"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"forks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"refs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"refPrefix"},"value":{"kind":"StringValue","value":"refs/heads/","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"target"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Commit"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]}]}}]};

/**
 * __useGitFetchUserQuery__
 *
 * To run a query within a React component, call `useGitFetchUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGitFetchUserQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGitFetchUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useGitFetchUserQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGitFetchUserQuery, SchemaTypes.IGitFetchUserQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGitFetchUserQuery, SchemaTypes.IGitFetchUserQueryVariables>(GitFetchUserDocument, baseOptions);
      }
export function useGitFetchUserLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGitFetchUserQuery, SchemaTypes.IGitFetchUserQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGitFetchUserQuery, SchemaTypes.IGitFetchUserQueryVariables>(GitFetchUserDocument, baseOptions);
        }
export type GitFetchUserQueryHookResult = ReturnType<typeof useGitFetchUserQuery>;
export type GitFetchUserLazyQueryHookResult = ReturnType<typeof useGitFetchUserLazyQuery>;
export type GitFetchUserQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGitFetchUserQuery, SchemaTypes.IGitFetchUserQueryVariables>;
export const GetGitProfilesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGitProfiles"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGitProviders"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"getGitProfiles"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"provider"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetGitProfilesQuery__
 *
 * To run a query within a React component, call `useGetGitProfilesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGitProfilesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGitProfilesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGitProfilesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGetGitProfilesQuery, SchemaTypes.IGetGitProfilesQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGetGitProfilesQuery, SchemaTypes.IGetGitProfilesQueryVariables>(GetGitProfilesDocument, baseOptions);
      }
export function useGetGitProfilesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGetGitProfilesQuery, SchemaTypes.IGetGitProfilesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGetGitProfilesQuery, SchemaTypes.IGetGitProfilesQueryVariables>(GetGitProfilesDocument, baseOptions);
        }
export type GetGitProfilesQueryHookResult = ReturnType<typeof useGetGitProfilesQuery>;
export type GetGitProfilesLazyQueryHookResult = ReturnType<typeof useGetGitProfilesLazyQuery>;
export type GetGitProfilesQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGetGitProfilesQuery, SchemaTypes.IGetGitProfilesQueryVariables>;
export const GitBranchesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GitBranches"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGitProviders"},"arguments":[],"directives":[]}]}}]};

/**
 * __useGitBranchesQuery__
 *
 * To run a query within a React component, call `useGitBranchesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGitBranchesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGitBranchesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGitBranchesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGitBranchesQuery, SchemaTypes.IGitBranchesQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGitBranchesQuery, SchemaTypes.IGitBranchesQueryVariables>(GitBranchesDocument, baseOptions);
      }
export function useGitBranchesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGitBranchesQuery, SchemaTypes.IGitBranchesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGitBranchesQuery, SchemaTypes.IGitBranchesQueryVariables>(GitBranchesDocument, baseOptions);
        }
export type GitBranchesQueryHookResult = ReturnType<typeof useGitBranchesQuery>;
export type GitBranchesLazyQueryHookResult = ReturnType<typeof useGitBranchesLazyQuery>;
export type GitBranchesQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGitBranchesQuery, SchemaTypes.IGitBranchesQueryVariables>;
export const GetGitProvidersStateDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGitProvidersState"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGitProvidersState"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ok"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"gitlab"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"access_token"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"github"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"access_token"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"bitbucket"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"status"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"access_token"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useGetGitProvidersStateQuery__
 *
 * To run a query within a React component, call `useGetGitProvidersStateQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGitProvidersStateQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGitProvidersStateQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetGitProvidersStateQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGetGitProvidersStateQuery, SchemaTypes.IGetGitProvidersStateQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGetGitProvidersStateQuery, SchemaTypes.IGetGitProvidersStateQueryVariables>(GetGitProvidersStateDocument, baseOptions);
      }
export function useGetGitProvidersStateLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGetGitProvidersStateQuery, SchemaTypes.IGetGitProvidersStateQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGetGitProvidersStateQuery, SchemaTypes.IGetGitProvidersStateQueryVariables>(GetGitProvidersStateDocument, baseOptions);
        }
export type GetGitProvidersStateQueryHookResult = ReturnType<typeof useGetGitProvidersStateQuery>;
export type GetGitProvidersStateLazyQueryHookResult = ReturnType<typeof useGetGitProvidersStateLazyQuery>;
export type GetGitProvidersStateQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGetGitProvidersStateQuery, SchemaTypes.IGetGitProvidersStateQueryVariables>;
export const GitPullRequestsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GitPullRequests"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IGitServiceInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGitPullRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"merged"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useGitPullRequestsQuery__
 *
 * To run a query within a React component, call `useGitPullRequestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGitPullRequestsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGitPullRequestsQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGitPullRequestsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGitPullRequestsQuery, SchemaTypes.IGitPullRequestsQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGitPullRequestsQuery, SchemaTypes.IGitPullRequestsQueryVariables>(GitPullRequestsDocument, baseOptions);
      }
export function useGitPullRequestsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGitPullRequestsQuery, SchemaTypes.IGitPullRequestsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGitPullRequestsQuery, SchemaTypes.IGitPullRequestsQueryVariables>(GitPullRequestsDocument, baseOptions);
        }
export type GitPullRequestsQueryHookResult = ReturnType<typeof useGitPullRequestsQuery>;
export type GitPullRequestsLazyQueryHookResult = ReturnType<typeof useGitPullRequestsLazyQuery>;
export type GitPullRequestsQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGitPullRequestsQuery, SchemaTypes.IGitPullRequestsQueryVariables>;
export const GitRepositoriesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GitRepositories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IGitServiceInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getGitRepositories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"path"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"private"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"clone"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"ssh"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"https"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useGitRepositoriesQuery__
 *
 * To run a query within a React component, call `useGitRepositoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGitRepositoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGitRepositoriesQuery({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useGitRepositoriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGitRepositoriesQuery, SchemaTypes.IGitRepositoriesQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGitRepositoriesQuery, SchemaTypes.IGitRepositoriesQueryVariables>(GitRepositoriesDocument, baseOptions);
      }
export function useGitRepositoriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGitRepositoriesQuery, SchemaTypes.IGitRepositoriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGitRepositoriesQuery, SchemaTypes.IGitRepositoriesQueryVariables>(GitRepositoriesDocument, baseOptions);
        }
export type GitRepositoriesQueryHookResult = ReturnType<typeof useGitRepositoriesQuery>;
export type GitRepositoriesLazyQueryHookResult = ReturnType<typeof useGitRepositoriesLazyQuery>;
export type GitRepositoriesQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGitRepositoriesQuery, SchemaTypes.IGitRepositoriesQueryVariables>;
export const GitRepositoryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GitRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"owner"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"owner"},"value":{"kind":"Variable","name":{"kind":"Name","value":"owner"}}},{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"FullRepository"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"FullRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"descriptionHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"languages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"30"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"forks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"pullRequests"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"10"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"PullRequest"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"body"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"merged"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"changedFiles"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"baseRefName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"headRefName"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"mergeCommit"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"oid"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"messageBodyHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"commitUrl"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"refs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"refPrefix"},"value":{"kind":"StringValue","value":"refs/heads/","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"prefix"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"target"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Commit"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"oid"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"messageBodyHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"committedDate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"5"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]}]}}]};

/**
 * __useGitRepositoryQuery__
 *
 * To run a query within a React component, call `useGitRepositoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGitRepositoryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGitRepositoryQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGitRepositoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGitRepositoryQuery, SchemaTypes.IGitRepositoryQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGitRepositoryQuery, SchemaTypes.IGitRepositoryQueryVariables>(GitRepositoryDocument, baseOptions);
      }
export function useGitRepositoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGitRepositoryQuery, SchemaTypes.IGitRepositoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGitRepositoryQuery, SchemaTypes.IGitRepositoryQueryVariables>(GitRepositoryDocument, baseOptions);
        }
export type GitRepositoryQueryHookResult = ReturnType<typeof useGitRepositoryQuery>;
export type GitRepositoryLazyQueryHookResult = ReturnType<typeof useGitRepositoryLazyQuery>;
export type GitRepositoryQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGitRepositoryQuery, SchemaTypes.IGitRepositoryQueryVariables>;
export const GitRepositoryOwnerDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GitRepositoryOwner"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"login"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositoryOwner"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"login"},"value":{"kind":"Variable","name":{"kind":"Name","value":"login"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repository"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"repositories"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"forks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"issues"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]}}]}}]};

/**
 * __useGitRepositoryOwnerQuery__
 *
 * To run a query within a React component, call `useGitRepositoryOwnerQuery` and pass it any options that fit your needs.
 * When your component renders, `useGitRepositoryOwnerQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGitRepositoryOwnerQuery({
 *   variables: {
 *      login: // value for 'login'
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGitRepositoryOwnerQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGitRepositoryOwnerQuery, SchemaTypes.IGitRepositoryOwnerQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGitRepositoryOwnerQuery, SchemaTypes.IGitRepositoryOwnerQueryVariables>(GitRepositoryOwnerDocument, baseOptions);
      }
export function useGitRepositoryOwnerLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGitRepositoryOwnerQuery, SchemaTypes.IGitRepositoryOwnerQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGitRepositoryOwnerQuery, SchemaTypes.IGitRepositoryOwnerQueryVariables>(GitRepositoryOwnerDocument, baseOptions);
        }
export type GitRepositoryOwnerQueryHookResult = ReturnType<typeof useGitRepositoryOwnerQuery>;
export type GitRepositoryOwnerLazyQueryHookResult = ReturnType<typeof useGitRepositoryOwnerLazyQuery>;
export type GitRepositoryOwnerQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGitRepositoryOwnerQuery, SchemaTypes.IGitRepositoryOwnerQueryVariables>;
export const GitSearchRepositoryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GitSearchRepository"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"query"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"search"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"query"},"value":{"kind":"Variable","name":{"kind":"Name","value":"query"}}},{"kind":"Argument","name":{"kind":"Name","value":"type"},"value":{"kind":"EnumValue","value":"REPOSITORY"}},{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"20"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"repositoryCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"GitRepository"},"directives":[]}]}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GitRepository"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Repository"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"descriptionHTML"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"isPrivate"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"languages"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"last"},"value":{"kind":"IntValue","value":"30"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"primaryLanguage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"color"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"owner"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"avatarUrl"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"stargazers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"forks"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"refs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"100"}},{"kind":"Argument","name":{"kind":"Name","value":"refPrefix"},"value":{"kind":"StringValue","value":"refs/heads/","block":false}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"edges"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"node"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"target"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Commit"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"history"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"IntValue","value":"0"}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"totalCount"},"arguments":[],"directives":[]}]}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"},"arguments":[],"directives":[]}]}}]};

/**
 * __useGitSearchRepositoryQuery__
 *
 * To run a query within a React component, call `useGitSearchRepositoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGitSearchRepositoryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGitSearchRepositoryQuery({
 *   variables: {
 *      query: // value for 'query'
 *   },
 * });
 */
export function useGitSearchRepositoryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGitSearchRepositoryQuery, SchemaTypes.IGitSearchRepositoryQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGitSearchRepositoryQuery, SchemaTypes.IGitSearchRepositoryQueryVariables>(GitSearchRepositoryDocument, baseOptions);
      }
export function useGitSearchRepositoryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGitSearchRepositoryQuery, SchemaTypes.IGitSearchRepositoryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGitSearchRepositoryQuery, SchemaTypes.IGitSearchRepositoryQueryVariables>(GitSearchRepositoryDocument, baseOptions);
        }
export type GitSearchRepositoryQueryHookResult = ReturnType<typeof useGitSearchRepositoryQuery>;
export type GitSearchRepositoryLazyQueryHookResult = ReturnType<typeof useGitSearchRepositoryLazyQuery>;
export type GitSearchRepositoryQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGitSearchRepositoryQuery, SchemaTypes.IGitSearchRepositoryQueryVariables>;
export const CreateMonocularRegistryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createMonocularRegistry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IMonocularRegistry"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createMonocularRegistry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner_id"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useCreateMonocularRegistryMutation__
 *
 * To run a mutation, you first call `useCreateMonocularRegistryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMonocularRegistryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMonocularRegistryMutation, { data, loading, error }] = useCreateMonocularRegistryMutation({
 *   variables: {
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useCreateMonocularRegistryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.ICreateMonocularRegistryMutation, SchemaTypes.ICreateMonocularRegistryMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.ICreateMonocularRegistryMutation, SchemaTypes.ICreateMonocularRegistryMutationVariables>(CreateMonocularRegistryDocument, baseOptions);
      }
export type CreateMonocularRegistryMutationHookResult = ReturnType<typeof useCreateMonocularRegistryMutation>;
export type CreateMonocularRegistryMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.ICreateMonocularRegistryMutation>;
export type CreateMonocularRegistryMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.ICreateMonocularRegistryMutation, SchemaTypes.ICreateMonocularRegistryMutationVariables>;
export const RemoveMonocularRegistryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"removeMonocularRegistry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"removeMonocularRegistry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}}],"directives":[]}]}}]};

/**
 * __useRemoveMonocularRegistryMutation__
 *
 * To run a mutation, you first call `useRemoveMonocularRegistryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveMonocularRegistryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeMonocularRegistryMutation, { data, loading, error }] = useRemoveMonocularRegistryMutation({
 *   variables: {
 *      _id: // value for '_id'
 *   },
 * });
 */
export function useRemoveMonocularRegistryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IRemoveMonocularRegistryMutation, SchemaTypes.IRemoveMonocularRegistryMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IRemoveMonocularRegistryMutation, SchemaTypes.IRemoveMonocularRegistryMutationVariables>(RemoveMonocularRegistryDocument, baseOptions);
      }
export type RemoveMonocularRegistryMutationHookResult = ReturnType<typeof useRemoveMonocularRegistryMutation>;
export type RemoveMonocularRegistryMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IRemoveMonocularRegistryMutation>;
export type RemoveMonocularRegistryMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IRemoveMonocularRegistryMutation, SchemaTypes.IRemoveMonocularRegistryMutationVariables>;
export const UpdateMonocularRegistryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateMonocularRegistry"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"_id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"payload"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"IMonocularRegistry"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateMonocularRegistry"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"_id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"_id"}}},{"kind":"Argument","name":{"kind":"Name","value":"payload"},"value":{"kind":"Variable","name":{"kind":"Name","value":"payload"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"owner_id"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useUpdateMonocularRegistryMutation__
 *
 * To run a mutation, you first call `useUpdateMonocularRegistryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateMonocularRegistryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateMonocularRegistryMutation, { data, loading, error }] = useUpdateMonocularRegistryMutation({
 *   variables: {
 *      _id: // value for '_id'
 *      payload: // value for 'payload'
 *   },
 * });
 */
export function useUpdateMonocularRegistryMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IUpdateMonocularRegistryMutation, SchemaTypes.IUpdateMonocularRegistryMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IUpdateMonocularRegistryMutation, SchemaTypes.IUpdateMonocularRegistryMutationVariables>(UpdateMonocularRegistryDocument, baseOptions);
      }
export type UpdateMonocularRegistryMutationHookResult = ReturnType<typeof useUpdateMonocularRegistryMutation>;
export type UpdateMonocularRegistryMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IUpdateMonocularRegistryMutation>;
export type UpdateMonocularRegistryMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IUpdateMonocularRegistryMutation, SchemaTypes.IUpdateMonocularRegistryMutationVariables>;
export const GetAllMonocularRegistriesDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllMonocularRegistries"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allMonocularRegistries"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"url"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useGetAllMonocularRegistriesQuery__
 *
 * To run a query within a React component, call `useGetAllMonocularRegistriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllMonocularRegistriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllMonocularRegistriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllMonocularRegistriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGetAllMonocularRegistriesQuery, SchemaTypes.IGetAllMonocularRegistriesQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGetAllMonocularRegistriesQuery, SchemaTypes.IGetAllMonocularRegistriesQueryVariables>(GetAllMonocularRegistriesDocument, baseOptions);
      }
export function useGetAllMonocularRegistriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGetAllMonocularRegistriesQuery, SchemaTypes.IGetAllMonocularRegistriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGetAllMonocularRegistriesQuery, SchemaTypes.IGetAllMonocularRegistriesQueryVariables>(GetAllMonocularRegistriesDocument, baseOptions);
        }
export type GetAllMonocularRegistriesQueryHookResult = ReturnType<typeof useGetAllMonocularRegistriesQuery>;
export type GetAllMonocularRegistriesLazyQueryHookResult = ReturnType<typeof useGetAllMonocularRegistriesLazyQuery>;
export type GetAllMonocularRegistriesQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGetAllMonocularRegistriesQuery, SchemaTypes.IGetAllMonocularRegistriesQueryVariables>;
export const GetRegistryChartsDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getRegistryCharts"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"registry"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"search"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filtered"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Boolean"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"registryCharts"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"registry"},"value":{"kind":"Variable","name":{"kind":"Name","value":"registry"}}},{"kind":"Argument","name":{"kind":"Name","value":"search"},"value":{"kind":"Variable","name":{"kind":"Name","value":"search"}}},{"kind":"Argument","name":{"kind":"Name","value":"filtered"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filtered"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"short"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"icon"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"latest"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"readme"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"version"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"created"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"app_version"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"versions"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"version"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"created"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"app_version"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"home"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"repo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"URL"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"source"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"maintainers"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]}]}}]}}]}}]}}]};

/**
 * __useGetRegistryChartsQuery__
 *
 * To run a query within a React component, call `useGetRegistryChartsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRegistryChartsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRegistryChartsQuery({
 *   variables: {
 *      registry: // value for 'registry'
 *      search: // value for 'search'
 *      filtered: // value for 'filtered'
 *   },
 * });
 */
export function useGetRegistryChartsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IGetRegistryChartsQuery, SchemaTypes.IGetRegistryChartsQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IGetRegistryChartsQuery, SchemaTypes.IGetRegistryChartsQueryVariables>(GetRegistryChartsDocument, baseOptions);
      }
export function useGetRegistryChartsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IGetRegistryChartsQuery, SchemaTypes.IGetRegistryChartsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IGetRegistryChartsQuery, SchemaTypes.IGetRegistryChartsQueryVariables>(GetRegistryChartsDocument, baseOptions);
        }
export type GetRegistryChartsQueryHookResult = ReturnType<typeof useGetRegistryChartsQuery>;
export type GetRegistryChartsLazyQueryHookResult = ReturnType<typeof useGetRegistryChartsLazyQuery>;
export type GetRegistryChartsQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IGetRegistryChartsQuery, SchemaTypes.IGetRegistryChartsQueryVariables>;
export const AddCardDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"addCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"addCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[]}]}}]};

/**
 * __useAddCardMutation__
 *
 * To run a mutation, you first call `useAddCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCardMutation, { data, loading, error }] = useAddCardMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useAddCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IAddCardMutation, SchemaTypes.IAddCardMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IAddCardMutation, SchemaTypes.IAddCardMutationVariables>(AddCardDocument, baseOptions);
      }
export type AddCardMutationHookResult = ReturnType<typeof useAddCardMutation>;
export type AddCardMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IAddCardMutation>;
export type AddCardMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IAddCardMutation, SchemaTypes.IAddCardMutationVariables>;
export const CancelDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"cancel"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cancel"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscriptionInfo"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"errors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserSubscription"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]}]}}]};

/**
 * __useCancelMutation__
 *
 * To run a mutation, you first call `useCancelMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCancelMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [cancelMutation, { data, loading, error }] = useCancelMutation({
 *   variables: {
 *   },
 * });
 */
export function useCancelMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.ICancelMutation, SchemaTypes.ICancelMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.ICancelMutation, SchemaTypes.ICancelMutationVariables>(CancelDocument, baseOptions);
      }
export type CancelMutationHookResult = ReturnType<typeof useCancelMutation>;
export type CancelMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.ICancelMutation>;
export type CancelMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.ICancelMutation, SchemaTypes.ICancelMutationVariables>;
export const ChangePlanDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"changePlan"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"oldPlanId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"planId"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"changePlan"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"oldPlanId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"oldPlanId"}}},{"kind":"Argument","name":{"kind":"Name","value":"planId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"planId"}}}],"directives":[]}]}}]};

/**
 * __useChangePlanMutation__
 *
 * To run a mutation, you first call `useChangePlanMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePlanMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePlanMutation, { data, loading, error }] = useChangePlanMutation({
 *   variables: {
 *      oldPlanId: // value for 'oldPlanId'
 *      planId: // value for 'planId'
 *   },
 * });
 */
export function useChangePlanMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IChangePlanMutation, SchemaTypes.IChangePlanMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IChangePlanMutation, SchemaTypes.IChangePlanMutationVariables>(ChangePlanDocument, baseOptions);
      }
export type ChangePlanMutationHookResult = ReturnType<typeof useChangePlanMutation>;
export type ChangePlanMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IChangePlanMutation>;
export type ChangePlanMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IChangePlanMutation, SchemaTypes.IChangePlanMutationVariables>;
export const DeleteCardDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"deleteCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"deleteCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cardId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}}],"directives":[]}]}}]};

/**
 * __useDeleteCardMutation__
 *
 * To run a mutation, you first call `useDeleteCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteCardMutation, { data, loading, error }] = useDeleteCardMutation({
 *   variables: {
 *      cardId: // value for 'cardId'
 *   },
 * });
 */
export function useDeleteCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IDeleteCardMutation, SchemaTypes.IDeleteCardMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IDeleteCardMutation, SchemaTypes.IDeleteCardMutationVariables>(DeleteCardDocument, baseOptions);
      }
export type DeleteCardMutationHookResult = ReturnType<typeof useDeleteCardMutation>;
export type DeleteCardMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IDeleteCardMutation>;
export type DeleteCardMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IDeleteCardMutation, SchemaTypes.IDeleteCardMutationVariables>;
export const SubscribeDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"subscribe"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"SubscribeInput"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribe"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"SubscriptionInfo"},"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"errors"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"field"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"message"},"arguments":[],"directives":[]}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SubscriptionInfo"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserSubscription"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]}]}}]};

/**
 * __useSubscribeMutation__
 *
 * To run a mutation, you first call `useSubscribeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscribeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscribeMutation, { data, loading, error }] = useSubscribeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSubscribeMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.ISubscribeMutation, SchemaTypes.ISubscribeMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.ISubscribeMutation, SchemaTypes.ISubscribeMutationVariables>(SubscribeDocument, baseOptions);
      }
export type SubscribeMutationHookResult = ReturnType<typeof useSubscribeMutation>;
export type SubscribeMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.ISubscribeMutation>;
export type SubscribeMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.ISubscribeMutation, SchemaTypes.ISubscribeMutationVariables>;
export const UpdateCardDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"updateCard"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"cardData"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"UpdateCardInfo"}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"updateCard"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"cardId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardId"}}},{"kind":"Argument","name":{"kind":"Name","value":"cardData"},"value":{"kind":"Variable","name":{"kind":"Name","value":"cardData"}}}],"directives":[]}]}}]};

/**
 * __useUpdateCardMutation__
 *
 * To run a mutation, you first call `useUpdateCardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCardMutation, { data, loading, error }] = useUpdateCardMutation({
 *   variables: {
 *      cardId: // value for 'cardId'
 *      cardData: // value for 'cardData'
 *   },
 * });
 */
export function useUpdateCardMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IUpdateCardMutation, SchemaTypes.IUpdateCardMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IUpdateCardMutation, SchemaTypes.IUpdateCardMutationVariables>(UpdateCardDocument, baseOptions);
      }
export type UpdateCardMutationHookResult = ReturnType<typeof useUpdateCardMutation>;
export type UpdateCardMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IUpdateCardMutation>;
export type UpdateCardMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IUpdateCardMutation, SchemaTypes.IUpdateCardMutationVariables>;
export const CardInfoQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CardInfoQuery"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionCardInfo"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"expiryMonth"},"name":{"kind":"Name","value":"exp_month"},"arguments":[],"directives":[]},{"kind":"Field","alias":{"kind":"Name","value":"expiryYear"},"name":{"kind":"Name","value":"exp_year"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"last4"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useCardInfoQueryQuery__
 *
 * To run a query within a React component, call `useCardInfoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardInfoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardInfoQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCardInfoQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.ICardInfoQueryQuery, SchemaTypes.ICardInfoQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.ICardInfoQueryQuery, SchemaTypes.ICardInfoQueryQueryVariables>(CardInfoQueryDocument, baseOptions);
      }
export function useCardInfoQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.ICardInfoQueryQuery, SchemaTypes.ICardInfoQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.ICardInfoQueryQuery, SchemaTypes.ICardInfoQueryQueryVariables>(CardInfoQueryDocument, baseOptions);
        }
export type CardInfoQueryQueryHookResult = ReturnType<typeof useCardInfoQueryQuery>;
export type CardInfoQueryLazyQueryHookResult = ReturnType<typeof useCardInfoQueryLazyQuery>;
export type CardInfoQueryQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.ICardInfoQueryQuery, SchemaTypes.ICardInfoQueryQueryVariables>;
export const CardsInfoQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CardsInfoQuery"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionCards"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"exp_month"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"exp_year"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"last4"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"brand"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useCardsInfoQueryQuery__
 *
 * To run a query within a React component, call `useCardsInfoQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useCardsInfoQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCardsInfoQueryQuery({
 *   variables: {
 *   },
 * });
 */
export function useCardsInfoQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.ICardsInfoQueryQuery, SchemaTypes.ICardsInfoQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.ICardsInfoQueryQuery, SchemaTypes.ICardsInfoQueryQueryVariables>(CardsInfoQueryDocument, baseOptions);
      }
export function useCardsInfoQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.ICardsInfoQueryQuery, SchemaTypes.ICardsInfoQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.ICardsInfoQueryQuery, SchemaTypes.ICardsInfoQueryQueryVariables>(CardsInfoQueryDocument, baseOptions);
        }
export type CardsInfoQueryQueryHookResult = ReturnType<typeof useCardsInfoQueryQuery>;
export type CardsInfoQueryLazyQueryHookResult = ReturnType<typeof useCardsInfoQueryLazyQuery>;
export type CardsInfoQueryQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.ICardsInfoQueryQuery, SchemaTypes.ICardsInfoQueryQueryVariables>;
export const PlansListDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlansList"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plansList"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"billing_scheme"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"interval"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"order"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"transform_usage"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"divide_by"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __usePlansListQuery__
 *
 * To run a query within a React component, call `usePlansListQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlansListQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlansListQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlansListQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IPlansListQuery, SchemaTypes.IPlansListQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IPlansListQuery, SchemaTypes.IPlansListQueryVariables>(PlansListDocument, baseOptions);
      }
export function usePlansListLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IPlansListQuery, SchemaTypes.IPlansListQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IPlansListQuery, SchemaTypes.IPlansListQueryVariables>(PlansListDocument, baseOptions);
        }
export type PlansListQueryHookResult = ReturnType<typeof usePlansListQuery>;
export type PlansListLazyQueryHookResult = ReturnType<typeof usePlansListLazyQuery>;
export type PlansListQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IPlansListQuery, SchemaTypes.IPlansListQueryVariables>;
export const SubscriberPlanDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscriberPlan"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriberPlan"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"active"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"billing_scheme"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"interval"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"itemId"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"metadata"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useSubscriberPlanQuery__
 *
 * To run a query within a React component, call `useSubscriberPlanQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriberPlanQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriberPlanQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubscriberPlanQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.ISubscriberPlanQuery, SchemaTypes.ISubscriberPlanQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.ISubscriberPlanQuery, SchemaTypes.ISubscriberPlanQueryVariables>(SubscriberPlanDocument, baseOptions);
      }
export function useSubscriberPlanLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.ISubscriberPlanQuery, SchemaTypes.ISubscriberPlanQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.ISubscriberPlanQuery, SchemaTypes.ISubscriberPlanQueryVariables>(SubscriberPlanDocument, baseOptions);
        }
export type SubscriberPlanQueryHookResult = ReturnType<typeof useSubscriberPlanQuery>;
export type SubscriberPlanLazyQueryHookResult = ReturnType<typeof useSubscriberPlanLazyQuery>;
export type SubscriberPlanQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.ISubscriberPlanQuery, SchemaTypes.ISubscriberPlanQueryVariables>;
export const SubscribersOnlyNumberDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscribersOnlyNumber"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscribersOnlyNumber"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"number"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useSubscribersOnlyNumberQuery__
 *
 * To run a query within a React component, call `useSubscribersOnlyNumberQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscribersOnlyNumberQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscribersOnlyNumberQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubscribersOnlyNumberQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.ISubscribersOnlyNumberQuery, SchemaTypes.ISubscribersOnlyNumberQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.ISubscribersOnlyNumberQuery, SchemaTypes.ISubscribersOnlyNumberQueryVariables>(SubscribersOnlyNumberDocument, baseOptions);
      }
export function useSubscribersOnlyNumberLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.ISubscribersOnlyNumberQuery, SchemaTypes.ISubscribersOnlyNumberQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.ISubscribersOnlyNumberQuery, SchemaTypes.ISubscribersOnlyNumberQueryVariables>(SubscribersOnlyNumberDocument, baseOptions);
        }
export type SubscribersOnlyNumberQueryHookResult = ReturnType<typeof useSubscribersOnlyNumberQuery>;
export type SubscribersOnlyNumberLazyQueryHookResult = ReturnType<typeof useSubscribersOnlyNumberLazyQuery>;
export type SubscribersOnlyNumberQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.ISubscribersOnlyNumberQuery, SchemaTypes.ISubscribersOnlyNumberQueryVariables>;
export const SubscriptionDataDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"SubscriptionData"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"subscriptionData"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"account_balance"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"billing_scheme"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"email"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"invoice_prefix"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"invoices"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount_due"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount_paid"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"amount_remaining"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"paid"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"date"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"due_date"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"number"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"upcomingInvoice"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"amount"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"description"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"quantity"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"period"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"start"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"end"},"arguments":[],"directives":[]}]}},{"kind":"Field","name":{"kind":"Name","value":"plan"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"bankAccounts"},"arguments":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"currency"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"country"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"last4"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"account_holder_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"bank_name"},"arguments":[],"directives":[]}]}}]}}]}}]};

/**
 * __useSubscriptionDataQuery__
 *
 * To run a query within a React component, call `useSubscriptionDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionDataQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSubscriptionDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useSubscriptionDataQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.ISubscriptionDataQuery, SchemaTypes.ISubscriptionDataQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.ISubscriptionDataQuery, SchemaTypes.ISubscriptionDataQueryVariables>(SubscriptionDataDocument, baseOptions);
      }
export function useSubscriptionDataLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.ISubscriptionDataQuery, SchemaTypes.ISubscriptionDataQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.ISubscriptionDataQuery, SchemaTypes.ISubscriptionDataQueryVariables>(SubscriptionDataDocument, baseOptions);
        }
export type SubscriptionDataQueryHookResult = ReturnType<typeof useSubscriptionDataQuery>;
export type SubscriptionDataLazyQueryHookResult = ReturnType<typeof useSubscriptionDataLazyQuery>;
export type SubscriptionDataQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.ISubscriptionDataQuery, SchemaTypes.ISubscriptionDataQueryVariables>;
export const CollectDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Collect"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"request"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"IActivityCollectRequest"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"collect"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"request"},"value":{"kind":"Variable","name":{"kind":"Name","value":"request"}}}],"directives":[]}]}}]};

/**
 * __useCollectMutation__
 *
 * To run a mutation, you first call `useCollectMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCollectMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [collectMutation, { data, loading, error }] = useCollectMutation({
 *   variables: {
 *      request: // value for 'request'
 *   },
 * });
 */
export function useCollectMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.ICollectMutation, SchemaTypes.ICollectMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.ICollectMutation, SchemaTypes.ICollectMutationVariables>(CollectDocument, baseOptions);
      }
export type CollectMutationHookResult = ReturnType<typeof useCollectMutation>;
export type CollectMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.ICollectMutation>;
export type CollectMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.ICollectMutation, SchemaTypes.ICollectMutationVariables>;
export const RegisterUserMutationDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUserMutation"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createSshKey"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authProvider"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auth0"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}]}}]}}],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createStripeSubscription"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authProvider"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auth0"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}]}}]}}],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"createAuth0User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authProvider"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auth0"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthUser"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]};

/**
 * __useRegisterUserMutationMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutationMutation, { data, loading, error }] = useRegisterUserMutationMutation({
 *   variables: {
 *      idToken: // value for 'idToken'
 *   },
 * });
 */
export function useRegisterUserMutationMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IRegisterUserMutationMutation, SchemaTypes.IRegisterUserMutationMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IRegisterUserMutationMutation, SchemaTypes.IRegisterUserMutationMutationVariables>(RegisterUserMutationDocument, baseOptions);
      }
export type RegisterUserMutationMutationHookResult = ReturnType<typeof useRegisterUserMutationMutation>;
export type RegisterUserMutationMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IRegisterUserMutationMutation>;
export type RegisterUserMutationMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IRegisterUserMutationMutation, SchemaTypes.IRegisterUserMutationMutationVariables>;
export const RegisterUserMutationOldDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"registerUserMutationOld"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createAuth0User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authProvider"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"auth0"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"idToken"},"value":{"kind":"Variable","name":{"kind":"Name","value":"idToken"}}}]}}]}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthUser"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]};

/**
 * __useRegisterUserMutationOldMutation__
 *
 * To run a mutation, you first call `useRegisterUserMutationOldMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterUserMutationOldMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerUserMutationOldMutation, { data, loading, error }] = useRegisterUserMutationOldMutation({
 *   variables: {
 *      idToken: // value for 'idToken'
 *   },
 * });
 */
export function useRegisterUserMutationOldMutation(baseOptions?: ApolloReactHooks.MutationHookOptions<SchemaTypes.IRegisterUserMutationOldMutation, SchemaTypes.IRegisterUserMutationOldMutationVariables>) {
        return ApolloReactHooks.useMutation<SchemaTypes.IRegisterUserMutationOldMutation, SchemaTypes.IRegisterUserMutationOldMutationVariables>(RegisterUserMutationOldDocument, baseOptions);
      }
export type RegisterUserMutationOldMutationHookResult = ReturnType<typeof useRegisterUserMutationOldMutation>;
export type RegisterUserMutationOldMutationResult = ApolloReactCommon.MutationResult<SchemaTypes.IRegisterUserMutationOldMutation>;
export type RegisterUserMutationOldMutationOptions = ApolloReactCommon.BaseMutationOptions<SchemaTypes.IRegisterUserMutationOldMutation, SchemaTypes.IRegisterUserMutationOldMutationVariables>;
export const FetchUserProfileDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"FetchUserProfile"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserProfile"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserProfile"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserProfile"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"family_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"given_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sub"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]}]}}]};

/**
 * __useFetchUserProfileQuery__
 *
 * To run a query within a React component, call `useFetchUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useFetchUserProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IFetchUserProfileQuery, SchemaTypes.IFetchUserProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IFetchUserProfileQuery, SchemaTypes.IFetchUserProfileQueryVariables>(FetchUserProfileDocument, baseOptions);
      }
export function useFetchUserProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IFetchUserProfileQuery, SchemaTypes.IFetchUserProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IFetchUserProfileQuery, SchemaTypes.IFetchUserProfileQueryVariables>(FetchUserProfileDocument, baseOptions);
        }
export type FetchUserProfileQueryHookResult = ReturnType<typeof useFetchUserProfileQuery>;
export type FetchUserProfileLazyQueryHookResult = ReturnType<typeof useFetchUserProfileLazyQuery>;
export type FetchUserProfileQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IFetchUserProfileQuery, SchemaTypes.IFetchUserProfileQueryVariables>;
export const FetchUserQueryDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"fetchUserQuery"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},"directives":[]}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"fetchAuth0User"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"auth0UserId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userId"}}}],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"UserFragment"},"directives":[]}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"UserFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"AuthUser"}},"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"},"arguments":[],"directives":[]}]}}]};

/**
 * __useFetchUserQueryQuery__
 *
 * To run a query within a React component, call `useFetchUserQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useFetchUserQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFetchUserQueryQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFetchUserQueryQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IFetchUserQueryQuery, SchemaTypes.IFetchUserQueryQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IFetchUserQueryQuery, SchemaTypes.IFetchUserQueryQueryVariables>(FetchUserQueryDocument, baseOptions);
      }
export function useFetchUserQueryLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IFetchUserQueryQuery, SchemaTypes.IFetchUserQueryQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IFetchUserQueryQuery, SchemaTypes.IFetchUserQueryQueryVariables>(FetchUserQueryDocument, baseOptions);
        }
export type FetchUserQueryQueryHookResult = ReturnType<typeof useFetchUserQueryQuery>;
export type FetchUserQueryLazyQueryHookResult = ReturnType<typeof useFetchUserQueryLazyQuery>;
export type FetchUserQueryQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IFetchUserQueryQuery, SchemaTypes.IFetchUserQueryQueryVariables>;
export const ProfileDocument: DocumentNode = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"profile"},"variableDefinitions":[],"directives":[],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"profile"},"arguments":[],"directives":[{"kind":"Directive","name":{"kind":"Name","value":"client"},"arguments":[]}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"accessToken"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"family_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"given_name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"locale"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"name"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"nickname"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"picture"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"sub"},"arguments":[],"directives":[]},{"kind":"Field","name":{"kind":"Name","value":"updated_at"},"arguments":[],"directives":[]}]}}]}}]};

/**
 * __useProfileQuery__
 *
 * To run a query within a React component, call `useProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProfileQuery({
 *   variables: {
 *   },
 * });
 */
export function useProfileQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<SchemaTypes.IProfileQuery, SchemaTypes.IProfileQueryVariables>) {
        return ApolloReactHooks.useQuery<SchemaTypes.IProfileQuery, SchemaTypes.IProfileQueryVariables>(ProfileDocument, baseOptions);
      }
export function useProfileLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<SchemaTypes.IProfileQuery, SchemaTypes.IProfileQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<SchemaTypes.IProfileQuery, SchemaTypes.IProfileQueryVariables>(ProfileDocument, baseOptions);
        }
export type ProfileQueryHookResult = ReturnType<typeof useProfileQuery>;
export type ProfileLazyQueryHookResult = ReturnType<typeof useProfileLazyQuery>;
export type ProfileQueryResult = ApolloReactCommon.QueryResult<SchemaTypes.IProfileQuery, SchemaTypes.IProfileQueryVariables>;
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