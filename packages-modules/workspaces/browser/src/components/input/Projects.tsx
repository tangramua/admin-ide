import * as _ from 'lodash';
import * as React from 'react';
import Rx, { Subject } from 'rxjs';
import { Icon, Form, Row, Col, Tabs } from 'antd';
import { ProjectSourceProviders, ProjectSourceType } from '@adminide-stack/core';

import { ProjectInput } from './ProjectInput';
import { ThrottledInput } from '../ThrottledInput';
import { PROJECT_TYPES } from '../../constants/route-constants';
import { takeUntil } from 'rxjs/operators';

const { create } = Form;
const { TabPane } = Tabs;

const INITIAL_VALUE = [{}];

class ProjectsComponent extends React.Component<any, any> {
    public stop$ = new Subject();
    public changes$ = new Subject();

    public state = {
        value: this.__value,
    };

    get value() { return this.state.value || INITIAL_VALUE; }
    get __value() { return this.props.value || INITIAL_VALUE; }

    public componentDidMount() {
        this
            .changes$
            .pipe(
                takeUntil(this.stop$),
            )
            .subscribe(value => {
                this.setState({ value });
                this.props.onChange(value);
            });
    }

    public componentWillUnmount() {
        this.stop$.next();
        this.stop$.complete();
    }

    public UNSAFE_componentWillReceiveProps(props) {
        if ('value' in props) {
            this.setState({ value: props.value || INITIAL_VALUE });
        }
    }

    public addProject = e => {
        this.changes$.next(this.value.concat({}));
    }

    public removeProject = index => e => {
        this.changes$.next(this.value.filter((record, i) => index !== i));
    }

    public onProjectChange = index => project => {
        const values = this.value;
        values[index] = project;

        this.changes$.next(values);
    }

    public render() {
        const { form, providers } = this.props;
        const { value = INITIAL_VALUE } = this.state;

        const hasRemoveButton = value.length > 1;

        return (
            <Tabs
                type="card"
                tabPosition="left"
                tabBarExtraContent={(
                    <div onClick={this.addProject}>
                        <Icon type="plus" />{' '}Add
                    </div>
                )}
            >
                {_.map(value, (project, index) => (
                    <TabPane
                        key={index}
                        tab={project.name || 'Undefined'}
                    >
                        <ProjectInput
                            hasRemoveButton={hasRemoveButton}
                            onRemove={this.removeProject(index)}
                            onChange={this.onProjectChange(index)}
                            providers={_.get(providers, 'getGitProvidersState')}
                        />
                    </TabPane>
                ))}
            </Tabs>
        );
    }
}

export const Projects = create({
    onValuesChange: (props: any, value) => props.onChange(value),
})(ProjectsComponent as any) as any;
