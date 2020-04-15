import * as React from 'react';
import { Col, Row, Input, Button } from 'antd';

export function EnvRow(props: any) {
  const { record, index, form, isLast, onAdd, onDelete } = props;

  return (
    <Row className="mb-0" gutter={8}>
      <Col md={12}>
        {form.getFieldDecorator(`env[${index}].field`, { initialValue: record.field })
          (<Input size="large" placeholder="Variable name" />)}
      </Col>
      <Col md={12}>
        {form.getFieldDecorator(`env[${index}].value`, { initialValue: record.value })
          (<Input size="large" placeholder="Value" />)}
        {isLast ? (
          <span>
            {' '}
            <Button size="small" onClick={onAdd} href="javascript:void(0)">Add row</Button>
          </span>
        ) : (
            <span>
              {' '}
              <Button size="small" onClick={onDelete} type="danger">Delete</Button>
            </span>
          )}
      </Col>
    </Row>
  );
}
