// tslint:disable:jsx-wrap-multiline

import * as _ from 'lodash';
import * as React from 'react';
import * as Base64 from 'base-64';
import * as PropTypes from 'prop-types';
import * as Identicon from 'identicon.js';
import { Form, Button, Input, Row, Col, Checkbox, Modal } from 'antd';
import { compose } from 'redux';

const { Item } = Form;

export function InvitationFormComponent(props: any) {
    const { form } = props;

    const onSubmit = e => {
        e.preventDefault();
        form.validateFields((err, values) => {
            if (err) { return; }
        });
    }

    return (
        <Modal {...props}>
            <Form onSubmit={onSubmit}>
                <Item label="Email">
                    {form.getFieldDecorator('email', { rules: [{ required: true, message: 'User email is required' }] })(
                        <Input type="email" />,
                    )}
                </Item>
                <Item>
                    {form.getFieldDecorator('permissions')(
                        <Checkbox.Group style={{ width: '100%' }}>
                            <Row>
                                <Col span={8}>
                                    <Checkbox value="admin">Admin</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="read">Read</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="run">Run</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="writ">Write</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="configure">Configure</Checkbox>
                                </Col>
                                <Col span={8}>
                                    <Checkbox value="permissions">Set Permissions</Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>,
                    )}
                </Item>
            </Form>
        </Modal>
    );
}

export const InvitationForm: any = compose(
    Form.create(),
)(InvitationFormComponent as any);
