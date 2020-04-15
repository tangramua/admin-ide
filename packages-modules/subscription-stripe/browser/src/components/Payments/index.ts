import { compose } from 'redux';
import { graphql } from 'react-apollo';
import { createSelector } from 'reselect';
import { PaymentsComponent } from './Payments';
import { SubscriptionDataDocument,
         CardsInfoQueryDocument,
         DeleteCardDocument,
         UpdateCardDocument } from '@adminide-stack/core'

const PaymentsComponentWithData: React.ComponentClass<any> | React.StatelessComponent<{}> = compose(
    graphql(SubscriptionDataDocument, {
        props: createSelector(
            ({ ownProps, data }) => data,
            (data) => {
                return {
                    customerData: (data as any).subscriptionData,
                };
            }),
    }),
    graphql(CardsInfoQueryDocument, {
        props: createSelector(
            ({ ownProps, data }) => data,
            (data) => {
                return {
                    cardsList: (data as any).subscriptionCards,
                    cardsListRefetch: (data as any).refetch,
                };
            }),
    }),
    graphql(DeleteCardDocument, { name: 'deleteCardMutate' }),
    graphql(UpdateCardDocument, { name: 'updateCardMutate' }),
)(PaymentsComponent);

export default PaymentsComponentWithData;
