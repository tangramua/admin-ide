import * as _ from 'lodash';
import { Modal } from 'antd';
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { TagSelector } from './TagSelector';
import { InstallationModal } from './InstallationModal';
import { GetRegistryChartsDocument } from '@adminide-stack/core';
import { ImageSelectorComponent } from '../components';

export function ImageSelector({ registry, values, onChange = [], ...rest }: any) {
    const [ modal, setModal ] = React.useState(null);
    const { data, loading } = useQuery(GetRegistryChartsDocument, { skip: !registry, variables: { registry } });

    const toggle = (status: boolean) => () => setModal(status);

    const select = (record, isSelected, images) => {
        if (isSelected) {
            setModal(record);
        }
    };

    const install = chart => {
        setModal(null);
        onChange(values.concat([chart]));
    };

    const selected = React.useMemo(() => values.map(c => Object.assign(c, { id: c.chartName })), [ values ]);

    const renderTagSelector = (image, options)  => {
        return (
            <TagSelector
                image={image}
                selected={true}
                registry={registry}
            />
        );
    };

    return (
        <>
            <ImageSelectorComponent
                {...rest}
                loading={loading}
                onSelect={select}
                selected={selected}
                renderTagSelector={renderTagSelector}
                images={(_.get(data, 'registryCharts') || [])}
            />

            <Modal
                title={false}
                footer={false}
                visible={!!modal}
                destroyOnClose={true}
                style={{ top: '15px' }}
                onCancel={toggle(false)}
            >
                <InstallationModal
                    chart={modal}
                    registry={registry}
                    onInstall={install}
                />
            </Modal>
        </>
    );
}
