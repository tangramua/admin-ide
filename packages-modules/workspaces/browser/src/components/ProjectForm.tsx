import * as _ from 'lodash';
import * as React from 'react';
import { Input, Form, Radio, Row, Col, Button as AntdButton } from 'antd';
import { ProjectSourceProviders, ProjectSourceType } from '@adminide-stack/core';

import { PROJECT_TYPES } from '../constants';
import { ProjectSource } from './ProjectSource';
import { ThrottledInput } from './ThrottledInput';

const { Item } = Form;
const { TextArea } = Input;
const { Button, Group } = Radio;

const transform = {
    fromStr: (str = '') => {
        const [type, provider] = str.split('.');
        return { type, provider };
    },
    toStr: ({ provider = ProjectSourceProviders.NONE, type = ProjectSourceType.BLANK }) => `${type}.${provider}`,
};

export function ProjectForm(props) {
    function field(name: any) {
        const { scope } = props;
        return scope ? `${scope}.${name}` : name;
    }

    const { form, project, onRemove, providers, user } = props;

    const [selected, setProject] = React.useState(
        transform.toStr({
            type: ProjectSourceType.BLANK,
            provider: ProjectSourceProviders.NONE,
        }),
    );

    const onSelectType = e => setProject(e.target.value);


    return (
        <React.Fragment>
            <Row gutter={16}>
                <Col md={12}>
                    <Group
                        onChange={onSelectType}
                        defaultValue={!project
                            ? selected
                            : transform.toStr(_.get(project, 'source', {}))}
                    >
                        {PROJECT_TYPES.map((type, i) => (
                            <Button key={i} value={transform.toStr(type)}>
                                {type.name}
                            </Button>
                        ))}
                    </Group>
                </Col>
                {onRemove ? (
                    <Col className="text-right" md={12}>
                        <AntdButton type="danger" className="mb-0" onClick={onRemove}>Remove</AntdButton>
                    </Col>
                ) : null}
            </Row>
            <Item label="Name">
                {form.getFieldDecorator(field('name'), {
                    initialValue: _.get(project, 'name'),
                    validateTrigger: ['onChange', 'onBlur'],
                    normalize: value => (value || '').replace(/[^a-zA-Z0-9]/g, ''),
                    rules: [{ required: true, message: 'Project name is required' }],
                })(
                    <ThrottledInput size="large" />,
                )}
            </Item>
            <Item label="Description">
                {form.getFieldDecorator(field('description'), {
                    initialValue: _.get(project, 'description'),
                })(
                    <TextArea />,
                )}
            </Item>
            <ProjectSource
                form={form}
                user={user}
                providers={providers}
                scope={field('source')}
                source={_.get(project, 'source')}
                {...transform.fromStr(selected)}
            />
        </React.Fragment>
    );
}
