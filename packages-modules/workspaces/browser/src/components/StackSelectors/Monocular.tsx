import * as React from 'react';
import { Modal, Button } from 'antd';
import { RegistrySelector, ImageSelector, RegistryForm } from '@adminide-stack/monocular-api-browser';

export function MonocularStackSelector({ onChange, selected }) {
    const [ modal, setModal ] = React.useState<boolean| null>(null);
    const [ registry, setRegistry ] = React.useState<string | null>(null);

    const toggleModal = (payload: any) => () => setModal(payload);

    const selectRegistry = (id: string) => setRegistry(id);
    const selectStacks = (stacks: any[]) => onChange(stacks);

    return (
        <>
            <div className="row">
                <div className="col-8">
                    <RegistrySelector style={{ minWidth: '200px' }} onChange={selectRegistry} size="large" />
                </div>
                <div className="col-4 text-right">
                    <Button size="large" type="primary" onClick={toggleModal(true)}>Create</Button>
                </div>
            </div>

            {registry
                ? <ImageSelector onChange={selectStacks} values={selected} className="mt-4" bordered={true} registry={registry} />
                : <p>Select Registry</p>}

            <Modal footer={false} destroyOnClose={true} onCancel={toggleModal(null)} visible={modal}>
                <RegistryForm registry={modal} />
            </Modal>
        </>
    );
}
