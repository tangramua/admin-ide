import * as _ from 'lodash';
import * as React from 'react';
import { Button, message } from 'antd';
import { IWorkspace, IStack } from '@adminide-stack/core';

import { StackSelection } from './StackSelection';
import { StackSelector } from './StackSelectors/StackSelectror';

export interface IStacksComponentProps {
    addStacks?: any;
    stacks: IStack[];
    workspace: IWorkspace;
}

export class StacksComponent extends React.Component<IStacksComponentProps, any> {
    public state = {
        updates: [],
    };

    public get isEmpty() {
        return _.isEmpty(this.state.updates);
    }

    public installStacks = e => {
        e.preventDefault();
        const { updates } = this.state;
        const { addStacks, workspace } = this.props;

        addStacks(workspace.id, updates)
            .then(() => {
                this.handleUpdates([]);
                message.success('New stacks is installing');
            })
            .catch(() => message.error('Can not install new stacks to workspace! Check your data and try later...'));
    }

    public get button() {
        const { updates } = this.state;

        return (
            <div className="text-right">
                <Button
                    type="primary"
                    className="mb-0"
                    disabled={this.isEmpty}
                    onClick={this.installStacks}
                >
                    {this.isEmpty
                        ? `Nothing to install...`
                        : `Install ${_.size(updates)} in workspace`
                    }
                </Button>
            </div>
        );
    }

    public handleUpdates = updates => {
        this.setState({ updates });
        // this.setState({
        //     updates: stacks
        //         .filter(record => !record.connectionId)
        //         .map(recold => _.pick(recold, [
        //             'type', 'valuesFile', 'chartName',
        //             'repository', 'releaseName', 'chartVersion', 'variables',
        //         ])),
        //     })
    }

    public render() {
        const { updates } = this.state;
        const { stacks = [] } = this.props;

        return (
            <React.Fragment>
                <StackSelector
                    tooltip={false}
                    extra={this.button}
                    onChange={this.handleUpdates}
                    stacks={stacks.concat(updates)}
                    styles={{ toolbar: { marginBottom: '20px' } }}
                />
            </React.Fragment>
        );
    }
}
