import { Layout } from 'antd';
import * as React from 'react';
import { renderRoutes } from 'react-router-config';
import { PageView } from '@adminide-stack/react-shared-components';

const { Content } = Layout;

export const ModuleWrapper = ({ router, children, match, route, ...props }) => {
    return (
        <PageView title="Teams">
            <Content className="p-3">
                {renderRoutes(route.routes, { matchPath: route.path })}
            </Content>
        </PageView>
    );
};
