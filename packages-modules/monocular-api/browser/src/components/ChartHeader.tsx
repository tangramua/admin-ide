import * as _ from 'lodash';
import * as React from 'react';
import { RouteProps } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { PageView } from '@adminide-stack/react-shared-components';

export namespace IChartHeader {
    export type props = {
        route: any;
        match: any;
        styles?: any;
    } & RouteProps;
}
export function ChartHeaderComponent(props: any) {
    const { match, route } = props;

    return (
        <PageView title="Helm Charts">
            {renderRoutes(route.routes, { matchPath: route.path })}
        </PageView>
    );
}
