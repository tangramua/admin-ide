// tslint:disable:jsx-wrap-multiline
import * as _ from 'lodash';
import * as React from 'react';
import { Input, Select, Form } from 'antd';
import { useGitSearchRepositoryQuery } from '../generated'

const { Item } = Form;
const { Group } = Input;
const { Option } = Select;

const exp = new RegExp('https:\\/\\/(github.com|bitbucket.org|gitlab.com)?\\/(.+)/(.+)\\/?');
const fetcher = url => {
  if (!exp.test(url)) {
    return false;
  }

  const [endpoint, provider, owner, name] = exp.exec(url) as any || {};
  return { provider, owner, name: (name || '').replace('.git', '') };
};

export class URLRepoComponent extends React.Component<any, any> {
  public props: any;

  public render() {
    const {
      url,
      form,
      inputClassName = '',
      selectClassName = '',
      onRepositoryObject,
      values,
      onRepositoryUrl,
      onBranch,
      data,
    } = this.props;
    const repository = _.get(data, 'repository');

    const isValid = !!fetcher(url);
    const branches = _.map(_.get(repository, 'refs.edges'), 'node');

    if (data && !data.loading && _.get(repository, 'url') !== _.get(values, 'repository.url')) {
      onRepositoryObject(repository);
    }

    return (
      <Item style={{ margin: 0 }}>
        <Group compact={true}>
          {form.getFieldDecorator('__repourl', { rules: [{ type: 'url', required: true, message: 'Repository URL is required' }] })(
            <Input
              type="text"
              className={inputClassName}
              placeholder="Repository URL"
              onChange={e => {
                onRepositoryUrl(e.target.value);
                form.setFieldsValue({ __repourl: e.target.value });
              }}
            />,
          )}
          <Select
            defaultValue="master"
            className={selectClassName}
            onChange={value => onBranch(value)}
            disabled={!repository || data.loading}
          >
            {_.map(branches, branch => <Select.Option key={branch.name} value={branch.name}>{branch.name}</Select.Option>)}
          </Select>
        </Group>
      </Item>
    );
  }
}

export const URLRepo = (props) => {
    const { loading, error, data: dataUseGitSearchRepositoryQuery } = useGitSearchRepositoryQuery()
    const data = { ...dataUseGitSearchRepositoryQuery, ...props }
    
    return <URLRepoComponent data={data} />
};