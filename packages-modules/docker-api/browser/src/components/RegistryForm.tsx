import * as _ from 'lodash';
import * as React from 'react';
import { Form, Input, Button, Col, Row, Spin } from 'antd';

const { Item } = Form;

export const RegistryFormComponent: any = Form.create()(function RegistryFormView({ registry = {}, loading, form, onSubmit }: any) {
    form.getFieldDecorator('credentials.type', { initialValue: 'login-password' });

    const submit = (e: any) => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (err) {
                return;
            }

            onSubmit(values);
        });
    };

    return (
        <Spin spinning={loading}>
            <Form onSubmit={submit}>
                <Item label="Name">
                    {form.getFieldDecorator('name', { initialValue: registry.name, rules: [{ required: true }] })(
                        <Input size="large" />,
                    )}
                </Item>
                <Item label="Url">
                    {form.getFieldDecorator('url', { initialValue: registry.url, rules: [{ required: true, type: 'url' }] })(
                        <Input size="large" />,
                    )}
                </Item>
                <p>Login Credentials:</p>
                <Row gutter={8}>
                    <Col md={12}>
                        <Item label="Username">
                            {form.getFieldDecorator('credentials.username', {
                                initialValue: _.get(registry, 'credentials.username'), rules: [{ required: true }] })(
                                <Input size="large" />,
                            )}
                        </Item>
                    </Col>
                    <Col md={12}>
                        <Item label="Password">
                            {form.getFieldDecorator('credentials.password', {
                                initialValue: _.get(registry, 'credentials.password'),
                                rules: [{ required: true }] })(
                                <Input size="large" type="password" />,
                            )}
                        </Item>
                    </Col>
                </Row>

                <div className="text-right">
                    <Button size="large" type="primary" htmlType="submit">Submit</Button>
                </div>
            </Form>
        </Spin>
    );
} as any);
