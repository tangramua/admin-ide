import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { Card, Input, InputNumber, Form, Button, Table, message } from 'antd';

const { Item } = Form;

export function LaunchSettingsCardComponent(props: any) {
  const [loading, setLoading] = React.useState(false);

  const title = () => (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <strong>Environment variables</strong>
      <Button size="small" type="primary" onClick={onAddRow}>
        Add env variables
      </Button>
    </div>
  );

  const { form, setVariables, workspace, refetch } = props;

  const values = form.getFieldsValue();
  const keys = form.getFieldValue('keys') || _.keys(_.get(workspace, 'config.globalVariables', []));

  const onAddRow = e => {
    form.setFieldsValue({ keys: (values.keys || []).concat([_.size(values.keys) || 0]) });
  };

  const onRemoveRow = record => e => {
    form.setFieldsValue({ keys: _.filter(values.keys, val => val !== record.index) });
  };

  const columns = [
    {
      key: 'evar',
      title: 'Env. variable',
      render: record =>
        form.getFieldDecorator(`env[${record.index}].field`, { initialValue: record.field })(<Input placeholder="Variable name" />),
    },
    {
      key: 'eval',
      title: 'Value',
      render: record =>
        form.getFieldDecorator(`env[${record.index}].value`, { initialValue: record.value })(<Input placeholder="Value" />),
    },
    {
      key: 'evac',
      title: 'Actions',
      render: record => (
        <div className="text-right">
          <Button
            type="danger"
            className="m-0"
            onClick={onRemoveRow(record)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  const onSubmit = e => {
    e.preventDefault();

    form.validateFields((err) => {
      if (err) { return; }
      setLoading(true);

      setVariables({
        ports: values.ports,
        workspace: workspace.id,
        globalVariables: values.env,
      })
        .then(() => refetch())
        .then(() => {
          setLoading(false);
          message.success('Env variables updated!');
        })
        .catch(() => {
          setLoading(false);
          message.error('Can not update env variables');
        });
    });
  };

  form.getFieldDecorator('keys', { initialValue: keys });
  const list = _.map(keys, key => Object.assign({}, _.get(workspace, `config.globalVariables[${key}]`, {}), { index: key }));

  return (
    <Form onSubmit={onSubmit}>
      <Card loading={props.loading} title="Launch Settings">
        <Item label="Port">
          {form.getFieldDecorator('ports.application', {
            rules: [{ required: true }],
            initialValue: _.get(workspace, 'config.ports.application'),
          })
            (<InputNumber style={{ width: '100%' }} min={3000} size="large" />)}
        </Item>
        <Table
          rowKey="index"
          title={title}
          dataSource={list}
          columns={columns}
          pagination={false}
        />
        <br />
        <div>
          <Button loading={loading} htmlType="submit" size="large" type="primary">Save</Button>
        </div>
      </Card>
    </Form>
  );
}

export const LaunchSettingsCard: any = compose(
  Form.create({
    mapPropsToFields: (props: any) => ({
      keys: Form.createFormField({ value: _.keys(_.get(props.workspace, 'config.globalVariables', [])) }),
    }),
  }),
)(LaunchSettingsCardComponent) as any;
