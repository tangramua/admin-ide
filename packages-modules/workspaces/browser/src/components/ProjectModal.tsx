// tslint:disable:jsx-wrap-multiline

import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { ModalProps } from 'antd/lib/modal';
import { FormComponentProps } from 'antd/lib/form';
import { IProject_Input, IWorkspace } from '@adminide-stack/core';
import { Button, Col, Row, Card, Modal, Form, message } from 'antd';

import { ProjectInput } from './input/ProjectInput';

export interface IProjectModalProps extends FormComponentProps, ModalProps {
    onCancel: any;
    providers: any;
    loading: boolean;
    onProjectSubmit: any;
    projects: IProject_Input[];
    workspace: IWorkspace;
}

export class ProjectModalComponent extends React.Component<IProjectModalProps, any> {
    public handleSubmit = e => {
        const { form, onProjectSubmit, onCancel, workspace } = this.props;
        form.validateFields((err, values) => {
            if (!err) {
                return onProjectSubmit(workspace.id, values.project)
                    .then(() => {
                        onCancel();
                        message.success('Project created!');
                    })
                    .catch(() => message.error('Can not create project! Check your data and try later...'));
            } else {
                message.error('Can not create project! Check your data and try later...');
                return;
            }
        });
    }

    public render() {
        const { visible, onCancel, form, providers } = this.props;

        return (
            <Modal
                width={820}
                visible={visible}
                onCancel={onCancel}
                onOk={this.handleSubmit}
                title="Add project to workspace"
            >
                {form.getFieldDecorator('project', { rules: [{ required: true }] })(
                    <ProjectInput
                        providers={providers}
                        hasRemoveButton={false}
                    />,
                )}
            </Modal>
        );
    }
}

export const ProjectModal = compose(
    Form.create(),
)(ProjectModalComponent) as any;
