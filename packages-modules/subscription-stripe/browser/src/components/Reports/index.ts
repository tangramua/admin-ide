import { compose } from 'redux';
import { createSelector } from 'reselect';
import { ReportsComponent } from './Reports';
import { graphql } from 'react-apollo';
import {SubscriptionDataDocument} from '@adminide-stack/core'

const ReportsComponentWithData: React.ComponentClass<any> | React.StatelessComponent<{}> = compose(
    // graphql(SubscriptionDataDocument, {
    //     props: createSelector(
    //         ({ ownProps, data }) => data,
    //         (data) => {
    //             return {
    //                 customerData: (data as any).subscriptionData,
    //             };
    //         }),
    // })
)(ReportsComponent);

export default ReportsComponentWithData;
