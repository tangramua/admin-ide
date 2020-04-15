import * as _ from 'lodash';
import { Button } from 'antd';
import * as React from 'react';
import { IProject_Input, IWorkspace } from '@adminide-stack/core';

import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';

export interface IWorkspaceProjectsProps {
    styles?: any;
    providers: any;
    addProject?: any;
    loading: boolean;
    projects: IProject_Input[];
    workspace: IWorkspace;
}

export function Projects(props) {
    const [ modal, setModal ] = React.useState(false);
    const triggerModal = status => e => setModal(status);

    const { projects, workspace, providers, addProject } = props;

    return (
        <React.Fragment>
            <div className="text-right">
                <Button
                    size="large"
                    type="primary"
                    className="mt-0"
                    onClick={triggerModal(true)}
                >
                    Add Project
                </Button>
            </div>
            <br />
            <div>{_.map(projects, project => <ProjectCard key={project._id} className="mb-3" project={project} />)}</div>

            {modal ? (
                <ProjectModal
                    visible={modal}
                    workspace={workspace}
                    providers={providers}
                    onProjectSubmit={addProject}
                    onCancel={triggerModal(false)}
                />
            ) : null}
        </React.Fragment>
    );
}
