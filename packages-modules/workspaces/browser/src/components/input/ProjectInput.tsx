import * as _ from 'lodash';
import * as React from 'react';
import Rx, { Subject } from 'rxjs';
import { IProjectSource, ProjectSourceType, ProjectSourceProviders } from '@adminide-stack/core';
import { Input, Form, Row, Col, Radio, Button as AntdButton } from 'antd';

import { SourceInput } from './SourceInput';
import { PROJECT_TYPES } from '../../constants';
import { ThrottledInput } from '../ThrottledInput';

const { TextArea } = Input;
const { create, Item } = Form;
const { Group, Button } = Radio;

const transform = {
    fromStr: (str = '') => {
        const [ type, provider ] = str.split('.');
        return { type, provider };
    },
    toStr: ({ provider = ProjectSourceProviders.NONE, type = ProjectSourceType.BLANK }) => `${type}.${provider}`,
};

class ProjectInputComponent extends React.Component<any, any> {
    public state = {
        value: this.__value,
        provider: transform.toStr({}),
    };

    get __value() { return this.props.value || {}; }

    public UNSAFE_componentWillReceiveProps(props) {
        if ('value' in props) {
            this.setState({ value: props.value || {} });
        }
    }

    public onSelectType = e => {
        this.setState({ provider: e.target.value });
    }

    public onSourceChange = e => {
        //
    }

    public render() {
        const { value = {}, provider } = this.state;
        const { form, hasRemoveButton, providers, user } = this.props;

        return (
            <React.Fragment>
                <Row gutter={16}>
                    <Col md={hasRemoveButton ? 18 : 24}>
                        <Group
                            onChange={this.onSelectType}
                            defaultValue={transform.toStr(value.source || {})}
                        >
                            {PROJECT_TYPES.map((type, i) => (
                                <Button key={i} value={transform.toStr(type)}>
                                    {type.name}
                                </Button>
                            ))}
                        </Group>
                    </Col>
                    {hasRemoveButton ? (
                        <Col md={6}>
                            <AntdButton type="danger" onClick={this.props.onRemove}>Remove</AntdButton>
                        </Col>
                    ) : null}
                </Row>
                <Item label="Name">
                    {form.getFieldDecorator('name', {
                        initialValue: value.name,
                        validateTrigger: ['onChange', 'onBlur'],
                        normalize: val => (val || '').replace(/[^a-zA-Z0-9]/g, ''),
                        rules: [{ required: true, message: 'Project name is required' }],
                    })(
                        <ThrottledInput size="large" />,
                    )}
                </Item>
                <Item label="Description">
                    {form.getFieldDecorator('description', {
                        initialValue: value.description,
                    })(
                        <TextArea />,
                    )}
                </Item>
                {form.getFieldDecorator('source', { initialValue: value.source || {} })(
                    <SourceInput
                        user={user}
                        providers={providers}
                        source={value.source || {}}
                        {...transform.fromStr(provider)}
                    />,
                )}
            </React.Fragment>
        );
    }
}

export const ProjectInput = create({
    onValuesChange: (props: any, changes, value) => props.onChange(value),
})(ProjectInputComponent as any) as any;
