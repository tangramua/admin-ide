import * as _ from 'lodash';
import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GetAllDockerRegistriesDocument } from '@adminide-stack/core';
import { RegistrySelectorComponent } from '../components/RegistrySelector';

export function RegistrySelector({ onChange, ...rest }: any) {
    const { loading, data } = useQuery(GetAllDockerRegistriesDocument);

    return <RegistrySelectorComponent onChange={onChange} loading={loading} list={_.get(data, 'allDockerRegistries', [])} {...rest} />;
}
