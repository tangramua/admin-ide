import * as React from 'react';
import { useFela } from 'react-fela';
import { RouteProps } from 'react-router';
import { Layout, Form, Input, Col, Row } from 'antd';

import { ChartList } from './ChartList';
import { RegistrySelector } from '../containers';


const { Item } = Form;
const { Search } = Input;
const { Content } = Layout;

export namespace IDashboard {

    export interface ComponentProps {
        form: any;
        data?: any;
        history: any;
        charts: any[];
        route: any;
        matchPath: string;
    }
    export type Props = ComponentProps & RouteProps;
}

const styles: any = {
    container: props => ({
        padding: '15px',
        overflowY: 'auto',
        background: '#fff',
        height: 'calc(100vh - 64px)',
    }),
};

export function Dashboard(props: any) {
    const { data = {}, form, history, matchPath } = props;

    const { css } = useFela(props);
    const values = form.getFieldsValue();

    const onSearch = e => {
        e.preventDefault();

        history.push(`${matchPath}?q=${values.search}`);
    };

    return (
        <Content>
            <Row gutter={16}>
                <Col offset={12} md={6}>
                    <Item label="Registry" required={true}>
                        {form.getFieldDecorator('registry')(
                            <RegistrySelector style={{ width: '100%' }} size="large" />,
                        )}
                    </Item>
                </Col>
                <Col md={6}>
                    <Form onSubmit={onSearch}>
                        <Item label="Search term">
                            {form.getFieldDecorator('search')(
                                <Search disabled={true} size="large" placeholder="Chart search..." />,
                            )}
                        </Item>
                    </Form>
                </Col>
            </Row>
            <div className={css(styles.container)}>
                <ChartList
                    matchPath={matchPath}
                    loading={data.loading}
                    registry={values.registry}
                    charts={data.registryCharts || []}
                />
            </div>
        </Content>
    );
}
