import * as _ from 'lodash';
import moment from 'moment';
import * as React from 'react';
import { Select, Table } from 'antd';
import { Query } from 'react-apollo';
import * as PropTypes from 'prop-types';
import { IProject_Input } from '@adminide-stack/core';
import { GetGitBranchesDocument } from '@adminide-stack/core';


export interface IWorkspaceBranchesProps {
  project?: IProject_Input;
  [fieldName: string]: any;
}

const { Option } = Select;

const exp = new RegExp('(github.com|bitbucket.org|gitlab.com)?\\:(.+)/(.+)\\/?');
const getURLInfo = url => {
  if (!exp.test(url)) {
    return false;
  }

  const [ endpoint, provider, nickname, repository ] = exp.exec(url) as any || {};
  return { provider, user: { nickname }, repository: (repository || '').replace('.git', '') };
};

export class WorkspaceBranches extends React.Component<IWorkspaceBranchesProps, any> {
  public state = {
    project: false,
  };

  get columns() {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
      },
      {
        title: 'Last Commit',
        render: record =>
          <span dangerouslySetInnerHTML={{ __html: _.get(record, 'commit.message') || '<i>Commit message is empty...</i>' }} />,
      },
      {
        title: 'Commit Date',
        dataIndex: 'commit.createdAt',
        render: record => <span>{moment(record).format('llll')}</span>,
      },
      {
        title: 'SHA',
        dataIndex: 'commit.id',
        render: record => <span>{_.take(record, 7)}</span>,
      },
    ];
  }

  public select = (workspace) => project =>
    this.setState({ project: _.find(workspace.projects, (record) => record._id === project) })

  public render() {
    const { project } = this.state;
    const { workspace } = this.props;

    const provider = _.get(project, 'source.providers');
    const input = getURLInfo(_.get(project, 'source.location'));

    return (
      <React.Fragment>
        <div>
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="Select Project..."
            onSelect={this.select(workspace)}
          >
            {_.map(workspace.projects, (record) => (
              <Option key={record._id}>{record.name}</Option>
            ))}
          </Select>
          <br />
          <br />
        </div>
        {input ? (
          <Query variables={{ input: { ...input, provider: provider.toLowerCase() } }} query={GetGitBranchesDocument}>
            {({ data, loading }) => (
              <Table
                rowKey="id"
                loading={loading}
                columns={this.columns}
                dataSource={_.get(data, 'getGitBranches', [])}
              />
            )}
          </Query>
        ) : (
          <div style={{ textAlign: 'center' } as any}>
            Select project to display repository branches
          </div>
        )}
      </React.Fragment>
    );
  }
}

const styles = {
  placeholder: props => ({}),
};
