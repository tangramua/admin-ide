import * as _ from 'lodash';
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { TagSelectorComponent } from '../components';

export function TagSelector({ registry, image, selected }: any) {
    // const { loading, data } = useQuery(REGISTRY_IMAGE_TAGS, { skip: !selected, variables: { registry, image: image.id } });

    return (
        <>
            <TagSelectorComponent
                image={image}
                registry={registry}
                disabled={!selected}
                tags={[]}
            />
        </>
    );
}
