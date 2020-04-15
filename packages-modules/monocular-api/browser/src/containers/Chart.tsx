import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import { REGISTRY_CHART } from '../graphql/gql';
import { ChartView, IChartCard } from '../components';

const mapStateToProps = (state, props) => {
    return ({
        params: _.get(props, 'match.params'),
    });
};

export const ChartComponent: React.ComponentClass<any> = (
    compose<React.ComponentClass<any>>(
        connect(mapStateToProps),
        graphql(REGISTRY_CHART, {
            options: (props: any) => ({
                variables: props.params,
            }),
        }),
    )(ChartView));
