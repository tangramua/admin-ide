import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Card, Row, Col, Icon } from 'antd';

import { styles } from './styles';

const Methods = [
    {
        key: 'Yaml',
        title: 'I have a YAML file',
        description: 'I have used codefresh previously and my repo has a Codefresh.yml file already.',
    },
    {
        key: 'Dockerfile',
        title: 'My repo has a Dockerfile',
        description: 'Codefresh will use your repo\'s Dockerfile to set up the default build and launch configuration.',
    },
    {
        key: 'Template',
        title: 'Start from template',
        description: 'My repo doesn\'t have a Dockerfile and I would like to start from Codefresh template Dockerfiles.',
    },
];

export function BuildMethod({ data, onSelect, ...props }) {
    const { css } = useFela(props);

    return (
        <div>
            <div className={css(styles.step.title)}>Build Method</div>
            <br/>
            <Row gutter={8}>
                {Methods.map((item, index) => (
                    <Col key={index} md={8}>
                        <Card
                            actions={[
                                <a key={1} href="javascript:void(0)" onClick={_ => onSelect(item)}>Select</a>,
                            ]}
                            title={(
                                <div>
                                    <small>
                                        {item.key}
                                    </small>
                                    {' '}
                                    {_.get(data, 'build.key') === item.key ? <Icon type="check" /> : null}
                                </div>
                            )}
                        >
                            <div>
                                <div>
                                    <strong>
                                        <small>{item.title}</small>
                                    </strong>
                                </div>
                                <small>{item.description}</small>
                            </div>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
