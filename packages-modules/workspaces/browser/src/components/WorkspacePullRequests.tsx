import * as _ from 'lodash';
import moment from 'moment';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Table, Select } from 'antd';
import * as PropTypes from 'prop-types';
import { GitPullRequestsDocument } from '@adminide-stack/core';

const { Option } = Select;

const exp = new RegExp('(github.com|bitbucket.org|gitlab.com)?\\:(.+)/(.+)\\/?');
const getURLInfo = url => {
  if (!exp.test(url)) {
    return false;
  }

  const [ endpoint, provider, nickname, repository ] = exp.exec(url) as any || {};
  return { provider, user: { nickname }, repository: (repository || '').replace('.git', '') };
};

export class WorkspacePullRequests extends React.Component<any, any> {
  public state = {
    project: false,
  };
  
  get columns() {
    return [
      {
        title: 'From',
        dataIndex: 'headRefName',
      },
      {
        title: 'To',
        dataIndex: 'baseRefName',
      },
      {
        title: 'Comment',
        dataIndex: 'mergeCommit.messageBodyHTML',
        render: record => <span dangerouslySetInnerHTML={{ __html: record || '<i>Commit message is empty...</i>' }} />,
      },
      {
        title: 'Created At',
        dataIndex: 'createdAt',
        render: record => <span>{moment(record).format('llll')}</span>,
      },
      {
        title: 'SHA',
        dataIndex: 'mergeCommit.oid',
        render: record => <span>{_.take(record, 7)}</span>,
      },
    ];
  }

  public onSelectProject = project => {
    const { workspace } = this.props;
    this.setState({ project: _.find(workspace.projects, ({ _id }) =>_id === project) });
  }

  public render() {
    const { project } = this.state;
    const { workspace } = this.props;
    const { renderer } = this.context;

    const provider = _.get(project, 'source.providers');
    const input = getURLInfo(_.get(project, 'source.location'));

    return (
      <React.Fragment>
        <div>
          <Select
            size="large"
            style={{ width: '100%' }}
            placeholder="Select Project..."
            onSelect={this.onSelectProject}
          >
            {_.map(workspace.projects, record => <Option key={record._id}>{record.name}</Option>)}
          </Select>
          <br />
          <br />
        </div>
        {input ? (
          <Query variables={{ input: { ...input, provider: provider.toLowerCase() } }} query={GitPullRequestsDocument}>
            {({ data, loading }) => (
              <Table
                rowKey="id"
                loading={loading}
                columns={this.columns}
                dataSource={_.get(data, 'pullRequests', [])}
              />
            )}
          </Query>
        ) : (
          <div style={styles.placeholder as any}>
            Select project to display repository branches
          </div>
        )}
      </React.Fragment>
    );
  }
}

const styles = {
  placeholder: ({
    textAlign: 'center',
  }),
};
