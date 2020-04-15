import { compose } from 'redux';
import { graphql } from 'react-apollo';
import { createSelector } from 'reselect';
import { BillingComponent } from './Billing';
import { PlansListDocument,
         SubscriberPlanDocument,
         CardsInfoQueryDocument,
         ChangePlanDocument } from '@adminide-stack/core'

const BillingComponentWithData: React.ComponentClass<any> | React.StatelessComponent<{}> = compose(
    graphql(PlansListDocument, {
        props: createSelector(
            ({ ownProps, data }) => data,
            (data) => {
                return {
                    plans: (data as any).plansList,
                };
            }),
    }),
    graphql(SubscriberPlanDocument, {
        props: createSelector(
            ({ ownProps, data }) => data,
            (data) => {
                return {
                    subscriberPlan: (data as any).subscriberPlan,
                };
            }),
    }),
    graphql(CardsInfoQueryDocument, {
        props: createSelector(
            ({ ownProps, data }) => data,
            (data) => {
                return {
                    cardsList: (data as any).subscriptionCards,
                };
            }),
    }),
    graphql(ChangePlanDocument, { name: 'changePlanMutate' }),
)(BillingComponent);

export default BillingComponentWithData;
