import * as _ from 'lodash';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Table, Select } from 'antd';
import { StackType, IStack } from '@adminide-stack/core';
import { TagsDocument, DockerCatalogDocument } from '@adminide-stack/core';

const { Option } = Select;

export class DockerSelector extends React.Component<any, any> {
    public state = {
        image: null,
        version: 'latest',
    };

    public onVersionChange = record => version => {
        return this.onInstall(record.name, this.stack(record, version));
    }

    public columns = [
        {
            title: 'Image',
            dataIndex: 'name',
        },
        {
            title: 'Version',
            render: record => (
                <Query query={TagsDocument} variables={{ image: record.name }}>
                    {({ data, loading }) => (
                        <Select
                            onChange={this.onVersionChange(record)}
                            disabled={loading || !_.find(this.props.stacks, { chartName: record.name })}
                            value={_.get(_.find(this.props.stacks, { chartName: record.name }), 'chartVersion', 'latest')}
                        >
                            {_.map(_.get(data, 'imageTags.tags', []), tag => <Option key={tag}>{tag}</Option>)}
                        </Select>
                    )}
                </Query>
            ),
        },
    ];

    public onInstall(chart, stack) {
        const { onChange } = this.props;
        onChange([stack]);
    }

    private stack(record, version = 'latest'): IStack {
        return {
            repository: '',
            chartName: record.id,
            chartVersion: version,
            releaseName: record.id,
            type: StackType.IDE_STACK,
        };
    }

    public render() {
        return (
            <Query query={DockerCatalogDocument}>
                {({ data, loading, error }) => (
                    error 
                    ? <div>{JSON.stringify(error)}</div> 
                    : <Table
                        rowKey="id"
                        loading={loading}
                        columns={this.columns}
                        dataSource={_.get(data, 'dockerCatalog.repositories', []).map((name, id) => ({ name, id: name }))}
                        rowSelection={{
                            selectedRowKeys: _.map(this.props.stacks, 'chartName'),
                            onSelect: (chart: any, selected) => this.onInstall(chart.id, this.stack(chart, 'latest')),
                        }}
                    />
                )}
            </Query>
        );
    }
}
