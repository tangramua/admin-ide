import * as _ from 'lodash';
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { TagsDocument } from '@adminide-stack/core';
import { TagSelectorComponent } from '../components';

export function TagSelector({ registry, image, selected }: any) {
    const { loading, data } = useQuery(TagsDocument, { skip: !selected, variables: { registry, image: image.id } });

    return (
        <>
            <TagSelectorComponent
                image={image}
                loading={loading}
                registry={registry}
                disabled={!selected}
                tags={_.get(data, 'dockerRegistryImageTags.tags') || []}
            />
        </>
    );
}
