import * as React from 'react';
import { Card, Popconfirm } from 'antd';

export function RegistryCard({ registry, onEdit, onRemove }) {
    const edit = () => onEdit(registry);
    const remove = () => onRemove(registry);

    return (
        <Card
            hoverable={true}
            actions={[
                <span key="remove" onClick={edit}>Edit</span>,
                (
                    <Popconfirm title="Are you sure?" okButtonProps={{ type: 'danger' }} onConfirm={remove}  key="remove">
                        <span>Remove</span>
                    </Popconfirm>
                ),
            ]}
        >
            <Card.Meta title={registry.name} description={registry.url} />
        </Card>
    );
}
