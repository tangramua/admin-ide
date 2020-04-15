import * as _ from 'lodash';
import * as React from 'react';
import { List, Modal, message, Button } from 'antd';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { GetAllDockerRegistriesDocument, RemoveDockerRegistryDocument } from '@adminide-stack/core';
import { RegistryCard } from '../components';
import { RegistryForm } from './RegistryForm';

export function Registries() {
    const [ modal, setModal ] = React.useState<any>(null);

    const { loading, data, refetch } = useQuery(GetAllDockerRegistriesDocument);

    const [ remove ] = useMutation(RemoveDockerRegistryDocument);
    const onRemove = (registry) => {
        remove({ variables: { _id: registry._id } })
            .then(() => refetch())
            .catch(() => message.error('Can not remove registry.'));
    };

    const list = React.useMemo(() => _.get(data, 'allDockerRegistries', []), [ data ]);


    const save = () => {
        refetch();
        setModal(null);
        message.success('New Registry created!');
    };

    const close = () => setModal(null);
    const open = (input: any) => () => setModal(input);
    const error = (err: any) => message.error(err.message);

    function renderItem(item) {
        return (
            <List.Item>
                <RegistryCard onRemove={onRemove} onEdit={setModal} registry={item} />
            </List.Item>
        );
    }

    return (
        <>
            <div className="row mb-3">
                <div className="col-8 d-flex align-items-center">
                    <i style={{ fontSize: '24px', color: '#1890ff' }} className="mr-2 fab fa-docker" />
                    <span style={{ fontSize: '32px', fontWeight: 'bold', color: '#333' }}>Docker Registries</span>
                </div>
                <div className="col-4 text-right">
                    <Button type="primary" icon="plus" onClick={open({})}>New Registry</Button>
                </div>
            </div>

            <List
                rowKey="_id"
                dataSource={list}
                loading={loading}
                renderItem={renderItem}
                grid={{ gutter: 16, column: 1 }}
            />

            <Modal onCancel={close} visible={modal} destroyOnClose={true} footer={false} title={null}>
                <RegistryForm registry={modal} onSave={save} onError={error} />
            </Modal>
        </>
    );
}
