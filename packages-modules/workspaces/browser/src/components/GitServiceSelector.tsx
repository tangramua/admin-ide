import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { Query } from 'react-apollo';
import { Table, Button, Select, Form } from 'antd';
import { GitRepositoriesDocument, GetGitBranchesDocument } from '@adminide-stack/core';

const { Option } = Select;

export namespace GitSelector {
    export interface IGitServiceSelectorProps {
        user: any;
        form: any;
        onSelect: any;
        onBranch: any;
        useId: boolean;
        linked: boolean;
        provider: string;
    }
}

export class GitServiceSelectorComponent extends React.Component<GitSelector.IGitServiceSelectorProps, any> {
    public get columns() {
        return [
            {
                dataIndex: 'path',
                className: 'w-100',
                title: 'Repository',
                render: text => <div style={{ width: '100%' }}>{text}</div>,
            },
            {
                title: 'Branch',
                render: record => (
                    <Query
                        skip={record.id !== this.props.form.getFieldValue('id')}
                        variables={{
                            input: {
                                provider: this.props.provider.toLowerCase(),
                                user: {
                                    nickname: this.props.form.getFieldValue('owner'),
                                },
                                repository: this.props.useId
                                    ? this.props.form.getFieldValue('id')
                                    : this.props.form.getFieldValue('name'),
                            },
                        }}
                        query={GetGitBranchesDocument}
                    >
                        {({ data, loading }) => (
                            <Select
                                defaultValue="master"
                                style={{ width: '220px' }}
                                onChange={branch => this.props.onBranch(branch)}
                                disabled={record.id !== this.props.form.getFieldValue('id')}
                            >
                                {loading ? null : _.map(_.get(data, 'getGitBranches'), branch => (
                                    <Option
                                        key={branch.name}
                                        value={branch.name}
                                    >
                                        {branch.name}
                                    </Option>
                                ))}
                            </Select>
                        )}
                    </Query>
                ),
            },
        ];
    }

    public render() {
        const { provider, user, form, linked, onSelect } = this.props;

        form.getFieldDecorator('id', {});
        form.getFieldDecorator('name', {});

        return (
            <div>
                {linked ? (
                    <Query
                        query={GitRepositoriesDocument}
                        variables={{
                            input: {
                                provider: provider.toLowerCase(),
                                user: _.pick(user, ['nickname']),
                            },
                        }}
                    >
                        {({ data, loading }) => (
                            <Table
                                rowKey="id"
                                rowSelection={{
                                    selectedRowKeys: [form.getFieldValue('id')],
                                    onSelect: (record: any) => {
                                        if (form.getFieldValue('id') === record.id) {
                                            onSelect(null);
                                            form.setFieldsValue({ id: null, name: null });
                                        } else {
                                            onSelect(record);
                                            form.setFieldsValue({ id: record.id, owner: record.owner, name: record.name });
                                        }
                                    },
                                }}
                                loading={loading}
                                columns={this.columns}
                                dataSource={_.get(data, 'getGitRepositories')}
                            />
                        )}
                    </Query>
                ) : <p>Connect your account</p>}
            </div>
        );
    }
}

export const GitServiceSelector: any = compose(
    Form.create(),
)(GitServiceSelectorComponent as any);
