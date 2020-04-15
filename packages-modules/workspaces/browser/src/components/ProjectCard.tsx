import * as _ from 'lodash';
import * as React from 'react';
import { Button, Col, Row, Card } from 'antd';

import { ProjectForm } from './ProjectForm';
import { IProject_Input } from '@adminide-stack/core';

export interface IProjectCardProps {
    project: IProject_Input;
}

const { Meta } = Card;

export class ProjectCard extends React.Component<any, any> {
    public state = {
        edit: false,
    };
    public render() {
        const { project } = this.props;
        return (
            <Card
                {...this.props}
                title={project.name}
            >
                <Meta
                    title={project.description}
                    description={project.source.location}
                />
            </Card>
        );
    }
}
