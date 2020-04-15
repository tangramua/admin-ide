import { Layout } from 'antd';
import * as React from 'react';
import { Registries as DockerRegistries, PageView } from '@adminide-stack/react-shared-components';
import { Registries as MonocularRegistries } from '@adminide-stack/monocular-api-browser';

export function Registries() {
    return (
        <PageView title="Registries">
            <Layout.Content style={{ height: '100%', overflowY: 'auto' }}>
                <div className="container">
                    <MonocularRegistries />
                    <br/>
                    <DockerRegistries />
                </div>
            </Layout.Content>
        </PageView>
    );
}
