/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface SubscribeInput {
  token: string,
  expiryMonth: number,
  expiryYear: number,
  last4: string,
  brand: string,
};

export interface cancelMutation {
  // Cancel a user's subscription
  cancel:  {
    active: boolean,
    errors:  Array< {
      field: string,
      message: string,
    } > | null,
  },
};

export interface subscribeMutationVariables {
  input: SubscribeInput,
};

export interface subscribeMutation {
  // Subscribe a user
  subscribe:  {
    active: boolean,
    errors:  Array< {
      field: string,
      message: string,
    } > | null,
  },
};

export interface updateCardMutationVariables {
  input: SubscribeInput,
};

export interface updateCardMutation {
  // Update a user's card information
  updateCard: boolean,
};

export interface CardInfoQueryQuery {
  // Get payment information for current user's subscription
  subscriptionCardInfo:  {
    expiryMonth: number | null,
    expiryYear: number | null,
    last4: string | null,
    brand: string | null,
  } | null,
};

export interface SubscribersOnlyNumberQuery {
  // Get magic number only available to subscribers
  subscribersOnlyNumber:  {
    number: number | null,
  } | null,
};

export interface SubscriptionDataQuery {
  // Get current user's subscription
  subscription:  {
    active: boolean,
  } | null,
};

export interface SubscriptionInfoFragment {
  active: boolean,
};
