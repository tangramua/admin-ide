import * as _ from 'lodash';
import * as React from 'react';
import { Query } from 'react-apollo';
import { IStackType, IStack } from '@adminide-stack/core';
import { Table, Button, Icon, Tag, Modal, Spin } from 'antd';
import { ChartInstallation } from '@adminide-stack/react-shared-components';
import { GetRegistryChartsDocument } from '@adminide-stack/core'

export class StackSelectionComponent extends React.Component<any, any> {
    public state = {
        stack: {},
        charts: {},
        modal: false,
        chart: false,
    };

    public onConfigureOrInstall = chart => e => {
        _.includes(_.map(this.props.stacks, StackSelection.getStackId), StackSelection.id(chart))
            ? this.displayChart(chart)
            : this.onInstall(chart, this.stack(chart), false);
    }

    public columns = [
        {
            title: 'Chart name',
            render: record => _.get(record, 'attributes.name'),
            width: '200px',
        },
        {
            title: 'Description',
            render: record => _.get(record, 'short'),
        },
        {
            title: 'Version',
            render: record => (
                <Tag color="blue">
                    {_.get(record, 'latest.version')}
                </Tag>
            ),
        },
        {
            title: 'Actions',
            render: chart => (
                <Button
                    size="small"
                    type="primary"
                    onClick={this.onConfigureOrInstall(chart)}
                >
                    {_.includes(_.map(this.props.stacks, StackSelection.getStackId), StackSelection.id(chart)) ? `Configure` : `Install`}
                </Button>
            ),
        },
    ];

    public displayChart = chart => {
        this.setState({
            stack: chart.attributes.name,
            chart: {
                chart: _.get(chart, 'attributes.name'),
                version: _.get(chart, 'latest.version'),
                repo: _.get(chart, 'attributes.repo.name'),
            },
            modal: true,
        });
    }

    public static id(chart) {
        return `${_.get(chart, 'attributes.name')}` +
            `.${_.get(chart, 'attributes.repo.name')}` +
            `.${_.get(chart, 'latest.version')}`;
    }

    public onInstall(chart, stack, toggle = false) {
        const { onChange } = this.props;
        const exists = _.includes(_.map(this.props.stacks, StackSelection.getStackId), StackSelection.id(chart));

        const charts = (toggle && exists)
            ? _.filter(this.props.stacks, record => StackSelection.getStackId(record) !== StackSelection.getStackId(this.stack(chart)))
            : !exists
                ? this.props.stacks.concat([stack])
                : _.map(this.props.stacks, (record: IStack) =>
                    StackSelection.getStackId(record) !== StackSelection.getStackId(this.stack(chart) as IStack)
                        ? record
                        : stack,
                );

        this.setState({
            charts,
            chart: {},
            modal: false,
        });

        onChange(_.uniqBy(charts, StackSelection.getStackId));
    }

    private stack(record): IStack {
        return {
            type: IStackType.MonocularStack,
            chartName: record.attributes.name,
            chartVersion: record.latest.version,
            releaseName: record.attributes.name,
            repository: record.attributes.repo.name,
        };
    }

    public static getStackId({ chartVersion, chartName, repository }: any) {
        return `${chartName}` +
            `.${repository}` +
            `.${chartVersion}`;
    }

    public render() {
        const { stacks, tooltip = true } = this.props;

        return (
            <div>
                {!tooltip ? null : (
                    <b> Additional Selection (This environment will be shared with the team members of this workspace.) </b>
                )}
                <Query query={GetRegistryChartsDocument} variables={{ filtered: true }}>
                    {({ data, loading }) => (
                        <React.Fragment>
                            <Table
                                loading={loading}
                                rowSelection={{
                                    selectedRowKeys: _.map(stacks, StackSelection.getStackId),
                                    onSelect: (chart, selected) => this.onInstall(chart, this.stack(chart), true),
                                } as any}
                                columns={this.columns}
                                dataSource={_.get(data, 'charts', [])}
                                // className={"styles.table"}
                                rowKey={StackSelection.id}
                            />
                            {!this.state.modal ? null : (
                                <Modal
                                    width={780}
                                    footer={false}
                                    visible={this.state.modal}
                                    onCancel={this.cancelModal}
                                >
                                    <Query variables={this.state.chart as any} query={GetRegistryChartsDocument}>
                                        {(result) => result.loading ? (
                                            <div className="text-center">
                                                <Spin />
                                            </div>
                                        ) : (
                                            <ChartInstallation
                                                chart={result.data.chart}
                                                onInstall={this.installChart(result.data.chart)}
                                                stack={_.find(stacks, stack => stack.chartName === this.state.stack)}
                                            />
                                        )}
                                    </Query>
                                </Modal>
                            )}
                        </React.Fragment>
                    )}
                </Query>
            </div>
        );
    }

    public installChart = chart => stack => this.onInstall(chart, stack, false);

    public cancelModal = () => this.setState({ modal: false, stack: {}, chart: {} });
}

const styles: any = {
    centered: props => ({
        textAlign: 'center',
    }),
    table: props => ({
        '& .ant-table': {
            border: '1px solid #d3d3d3',
        },
        '& .ant-table-placeholder': {
            border: 'none',
        },
    }),
};

export const StackSelection: any = (StackSelectionComponent);
