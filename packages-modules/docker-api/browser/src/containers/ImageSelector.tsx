import * as _ from 'lodash';
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { DockerRegistryCatalogDocument } from '@adminide-stack/core';
import { TagSelector } from './TagSelector';
import { ImageSelectorComponent } from '../components';

export function ImageSelector({ registry, onChange, values = [], ...rest }: any) {
    const { data, loading } = useQuery(DockerRegistryCatalogDocument, { skip: !registry, variables: { registry } });

    // const [ selected, setSelected ] = React.useState<any>(values);

    const select = (record, isSelected, images) => onChange(images);

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
                selected={values}
                renderTagSelector={renderTagSelector}
                images={(_.get(data, 'dockerRegistryCatalog.repositories') || []).map(name => ({ id: name, name }))}
            />
        </>
    );
}
