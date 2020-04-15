import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { REGISTRY_CHART } from '../graphql/gql';
import { InstallationModalComponent, ChartInstallation } from '../components';
import { Spin } from 'antd';

export function InstallationModal({ registry, chart, onInstall }) {
    const { name, repo } = chart.attributes;
    const { data = {} as any, loading, error } = useQuery(REGISTRY_CHART, { variables: { registry, chart: name, repo: repo.name } });

    return (
        <Spin spinning={loading}>
            <ChartInstallation
                onInstall={onInstall}
                chart={data.getRegistryChart}
                versions={data.getRegistryChartVersions}
                values={data.getRegistryChartValues || ''}
            />
        </Spin>
    );
}
