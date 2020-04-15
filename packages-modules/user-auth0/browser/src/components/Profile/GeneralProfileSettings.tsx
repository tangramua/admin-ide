import * as _ from 'lodash';
import * as React from 'react';
import { Form, Input, Row, Col, Button } from 'antd';
import { IUserProfile } from '@adminide-stack/core';
const { Item } = Form;

export interface IGeneralProfileSettings {
  profile: IUserProfile;
  form: any;
  updateProfile: any;
}
export const GeneralProfileSettings = Form.create<IGeneralProfileSettings>()(function({ profile, form, updateProfile }: any) {
  const onSubmit = e => {
    e.preventDefault();

    form.validateFields((err) => {
      if (err) {
        return;
      }
      updateProfile(form.getFieldsValue());
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Row gutter={8}>
        <Col md={12}>
          <Item label="Name">
            {form.getFieldDecorator('name', {
              initialValue: _.get(profile, 'name'),
              rules: [
                { required: true, message: 'Name is required' },
              ],
            })(<Input size="large" type="text"/>)}
          </Item>
        </Col>
        <Col md={12}>
          <Item label="Username">
            {form.getFieldDecorator('nickname', {
              initialValue: _.get(profile, 'nickname'),
              rules: [
                { required: true, message: 'Username is required' },
              ],
            })(<Input id="username" size="large" type="text"/>)}
          </Item>
        </Col>
      </Row>
      <Item label="Email">
        {form.getFieldDecorator('email', {
          initialValue: _.get(profile, 'email'),
          rules: [
            { type: 'email', required: true, message: 'Email is required' },
          ],
        })(<Input id="mail" size="large" type="email"/>)}
      </Item>
      <Button htmlType="submit" className="mb-0" type="primary">Save</Button>
    </Form>
  );
});
