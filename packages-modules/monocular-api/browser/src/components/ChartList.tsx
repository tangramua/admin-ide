import * as _ from 'lodash';
import * as React from 'react';
import { Col, Row } from 'antd';
import { RouteProps } from 'react-router';

import { ChartCard } from './ChartCard';

export namespace IChartList {
    export interface ComponentProps {
        charts: any[];
        styles?: any;
        loading: boolean;
        onView(chart: any): any;
        onInstall(chart: any): any;
        matchPath: string;
    }

    export type Props = ComponentProps & RouteProps;
}

export function ChartList(props: any) {
    const { charts, loading, onInstall, onView, matchPath, registry } = props;

    const grid = _.chunk(loading ? _.range(4) : charts, 4);

    return (
        <div>
            {_.map(grid, (row, indexRow) => (
                <Row className="mb-3" gutter={12} key={indexRow}>
                    {_.map(row, (chart, indexChart) => (
                        <Col md={6} key={indexChart}>
                            <ChartCard
                                loading={loading}
                                registry={registry}
                                matchPath={matchPath}
                                chart={chart}
                                onView={onView}
                                onInstall={onInstall}
                            />
                        </Col>
                    ))}
                </Row>
            ))}
        </div>
    );
}
