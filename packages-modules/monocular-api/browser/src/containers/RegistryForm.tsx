import * as _ from 'lodash';
import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';

import { CreateMonocularRegistryDocument, UpdateMonocularRegistryDocument } from '@adminide-stack/core';
import { RegistryFormComponent } from '../components';

export function RegistryForm({ onSave, onError, registry }: any) {
    const [ createRegistry, createResponse ] = useMutation(CreateMonocularRegistryDocument);
    const [ updateRegistry, updateResponse ] = useMutation(UpdateMonocularRegistryDocument);

    const submit = (payload: any) =>
        (
            registry._id
                ? updateRegistry({ variables: {
                    _id: registry._id, payload } })
                : createRegistry({ variables: { payload } })
        )
            .then((data) => onSave(data))
            .catch((error) => onError(error));

    return (
        <RegistryFormComponent
            onSubmit={submit}
            registry={registry}
            loading={createResponse.loading || updateResponse.loading}
        />
    );
}
