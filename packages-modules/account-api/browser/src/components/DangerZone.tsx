import * as _ from 'lodash';
import * as React from 'react';
import { Button, Card } from 'antd';

export function DangerZone({ loading, ...props }) {
    return (
        <Card loading={loading} title="Danger Zone">
            <Button
                size="small"
                type="danger"
                className="mb-3"
            >
                Delete Team
            </Button>
            <p>Note: This can’t be undone.</p>
        </Card>
    );
}
