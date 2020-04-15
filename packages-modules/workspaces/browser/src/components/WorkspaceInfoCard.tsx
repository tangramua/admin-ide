import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Card, Input, Form, Button } from 'antd';
import * as _ from 'lodash';


const { Item } = Form;

export class WorkspaceInfoCardComponent extends React.Component<any, any> {
  private onSubmit = e => {
    e.preventDefault();

    const { form, updateGeneral } = this.props;

    form.validateFields((err) => {
      if (err) {
        return;
      }
      const values = form.getFieldsValue();
      updateGeneral(values);
    });
  }

  public render() {
    const { form, workspace, loading } = this.props;

    form.getFieldDecorator('id', { initialValue: workspace.id });

    return (
      <Form onSubmit={this.onSubmit}>
        <Card loading={loading} title="General Information">
          <Item label="Workspace Name">
            {form.getFieldDecorator('name', {
              rules: [{ required: true }],
              initialValue: _.get(workspace, 'name'),
              normalize: value => (value || '').replace(/[^a-zA-Z0-9]/g, ''),
            })
                (<Input size="large" type="text" />)}
          </Item>
          <div>
            <Button htmlType="submit" size="large" type="primary">Save</Button>
          </div>
        </Card>
      </Form>
    );
  }
}

export const WorkspaceInfoCard = Form.create()(WorkspaceInfoCardComponent) as any;
