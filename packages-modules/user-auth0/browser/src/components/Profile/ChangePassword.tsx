import * as _ from 'lodash';
import * as React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { IUserProfile } from '@adminide-stack/core';
const { Item } = Form;


export interface IChangePassword {
  profile: IUserProfile;
  form: any;
}
export const ChangePassword = Form.create<IChangePassword>()(function ChangePasswordComponent({ profile, form, changePassword }: any) {
  const onSubmit = e => {
    e.preventDefault();

    form.validateFields((err) => {
      if (err) {
        return;
      }
      changePassword(form.getFieldsValue());
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Item label="Old password">
        {form.getFieldDecorator('oldPassword', {
          rules: [
            { required: true, message: 'Old password is required' },
          ],
        })(<Input id="oldPass" size="large" type="password"/>)}
      </Item>
      <Row gutter={8}>
        <Col md={12}>
          <Item label="New Password">
            {form.getFieldDecorator('newPassword', {
              rules: [
                { required: true, message: 'Type new password' },
              ],
            })(<Input id="newPass" size="large" type="password" />)}
          </Item>
        </Col>
        <Col md={12}>
          <Item label="Confirm Password">
            {form.getFieldDecorator('confirmPassword', {
              rules: [
                { required: true, message: 'Confirm your password' },
              ],
            })(<Input id="confPass" size="large" type="password" />)}
          </Item>
        </Col>
      </Row>
      <Button htmlType="submit" className="m-0" type="primary">Update Password</Button>
    </Form>
  );
});
