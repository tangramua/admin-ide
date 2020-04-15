import * as _ from 'lodash';
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';

import { GetAllMonocularRegistriesDocument } from '@adminide-stack/core';
import { RegistrySelectorComponent } from '../components/RegistrySelector';

export function RegistrySelector({ onChange, ...rest }: any) {
    const { loading, data } = useQuery(GetAllMonocularRegistriesDocument);

    return <RegistrySelectorComponent onChange={onChange} loading={loading} list={_.get(data, 'allMonocularRegistries', [])} {...rest} />;
}
