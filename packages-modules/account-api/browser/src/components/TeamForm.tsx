import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { useFela } from 'react-fela';
import * as PropTypes from 'prop-types';
import { IOrganization } from '@adminide-stack/account';
import { Form, Select, Radio, Input, Button, Row, Col } from 'antd';

const { Item } = Form;
const { Option } = Select;
const { TextArea } = Input;

export function TeamFormComponent(props) {
    const { css } = useFela(props);
    const { form, createTeam, onDone, onError, organizations } = props;

    const onSubmit = e => {
        e.preventDefault();

        const values = form.getFieldsValue();
        return createTeam(values)
            .then(data => onDone(data))
            .catch(err => onError && onError(err));
    };

    return (
        <Form onSubmit={onSubmit}>
            <Row key={0} gutter={16}>
                <Col key={0} md={12}>
                    <Item label="Organization">
                        {form.getFieldDecorator('orgId', { rules: [{ required: true }] })(
                            <Select defaultActiveFirstOption={true} size="large">
                                {_.map(organizations, (organization: IOrganization) => (
                                    <Option key={organization.id} value={organization.id}>{organization.name}</Option>
                                ))}
                            </Select>,
                        )}
                    </Item>
                </Col>
                <Col key={1} md={12}>
                    <Item label="Team name">
                        {form.getFieldDecorator('name', { rules: [{ required: true }] })(
                            <Input size="large" />,
                        )}
                    </Item>
                </Col>
            </Row>
            <Row key={1}>
                <Col key={2}>
                    <Item label="Tags">
                        {form.getFieldDecorator('tags', {})(
                            <Select size="large" mode="tags" />,
                        )}
                    </Item>
                </Col>
                <Col key={3}>
                    <Item label="Emails">
                        {form.getFieldDecorator('emails', {})(
                            <Select size="large" mode="tags" />,
                        )}
                    </Item>
                </Col>
            </Row>
            <Item label="Description">
                {form.getFieldDecorator('description', {})(
                    <TextArea className={css(styles.textArea)} />,
                )}
            </Item>
            <div>
                <Button
                    size="large"
                    type="primary"
                    htmlType="submit"
                    className={css(styles.button)}
                >
                    Create Team
                </Button>
            </div>
        </Form>
    );
}

const styles = {
    textArea: props => ({
        height: '250px',
    }),
    button: props => ({
        margin: 0,
    }),
};

export const TeamForm = compose(
    Form.create(),
)(TeamFormComponent as any) as any;
