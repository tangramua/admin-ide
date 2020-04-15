/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: registerUserMutation
// ====================================================

export interface registerUserMutation_createAuth0User {
  id: string;
}

export interface registerUserMutation {
  createAuth0User: registerUserMutation_createAuth0User | null;
}

export interface registerUserMutationVariables {
  idToken: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: fetchUserQuery
// ====================================================

export interface fetchUserQuery_fetchAuth0User {
  id: string;
}

export interface fetchUserQuery {
  fetchAuth0User: fetchUserQuery_fetchAuth0User | null;
}

export interface fetchUserQueryVariables {
  userId: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: profile
// ====================================================

export interface profile_profile {
  accessToken: string | null;
  family_name: string | null;
  given_name: string | null;
  locale: string | null;
  name: string | null;
  nickname: string | null;
  picture: string | null;
  sub: string | null;
  updated_at: string | null;
}

export interface profile {
  profile: profile_profile | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: UserFragment
// ====================================================

export interface UserFragment {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
