import * as _ from 'lodash';
import { Modal } from 'antd';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Progress, Form } from 'antd';
import StepZilla from 'react-stepzilla';
// import { FETCH_USER_REPOSITORIES_QUERY, SEARCH_REPOSITORIES_QUERY } from '@adminide-stack/git-api-browser';
import { styles } from './styles';
import { BuildMethod } from './StepBuild';
import { WorkspaceInfo } from './WorkspaceInfo';
import { CheckWorkspace } from './CheckWorkspace';
import { SelectRepository } from './SelectRepository';
import { useGitFetchUserQuery, useGitSearchRepositoryQuery } from '../../generated';

export namespace IBoxFormComponent {
  export interface Props {
    form: any;
    styles?: any;
    repositories: any;
    workspace: any;
    create: Function;
    update: Function;
    isEdit: boolean;
    search: any;

  }
}

const STEPS = [
  { name: 'Select Repository' },
  { name: 'Build method' },
  { name: 'Workspace Info' },
  { name: 'Check' },
];

function BoxFormComponent(props: any) {
  const { css } = useFela(props);
  const [step, setStep] = React.useState(0);
  const { form, workspace, create, update, isEdit, search, repositories } = props;
  const { setFieldsValue, getFieldValue, getFieldsValue, getFieldDecorator } = form;

  const values = getFieldsValue();

  const set = (name, onChange?) => value => {
    if (getFieldValue(name) !== value && onChange) {
      onChange(value);
    }

    setFieldsValue({ [name]: value });
  };

  const change = (name, fetcher?) => e => {
    if (!fetcher) {
      fetcher = val => val;
    }
    const value = fetcher(e);
    return set(name)(value);
  };

  const stepping = (index: any) => setStep(index);

  const onSubmit = () => {
    const data = {
      name: _.get(values, 'repository.name'),
      language: _.get(values, 'workspace.language'),
      icon_url: _.get(values, 'repository.owner.avatar_url'),
      description: `Created from Git Repostiroy [${_.get(values, 'repository.name')}] with branch [${values.branch}]`,
      repository: {
        branch: _.get(values, 'branch.name'),
        url: _.get(values, 'repository.url'),
        name: _.get(values, 'repository.name'),
        owner: _.get(values, 'repository.owner.login'),
        description: _.get(values, 'repository.description'),
      },
    };

    return isEdit ? update({ id: workspace.id, ...data }) : create(data);
  };

  const onSearch = (input: any) => {
    setFieldsValue({ search: input });
  };

  const steps = () => {
    return [
      {
        name: '1',
        component: (
          <SelectRepository
            data={values}
            form={form}
            search={search}
            onSearch={onSearch}
            onBranch={set('branch')}
            repositories={repositories}
            onSelect={set('repository', (value) => {
              set('branch')('master');
              set('url')(_.get(value, 'url'));
            })}
            onRepositoryUrl={set('url', () => set('repository')(false))}
          />
        ),
      },
      {
        name: '2',
        component: (
          <BuildMethod
            form={form}
            data={values}
            onSelect={set('build')}
          />
        ),
      },
      {
        name: '3',
        component: (
          <WorkspaceInfo
            form={form}
            data={values}
            onChange={this.change}
          />
        ),
      },
      {
        name: '4',
        component: (
          <CheckWorkspace
            form={form}
            data={this.values}
            onSubmit={onSubmit}
          />
        ),
      },
    ];
  };

  getFieldDecorator('switcher', { initialValue: false });
  getFieldDecorator('build', { rules: [{ required: true }] });
  getFieldDecorator('url', {});
  getFieldDecorator('repository', { rules: [{ required: true }] });
  getFieldDecorator('branch', { rules: [{ required: true }], initialValue: 'master' });

  getFieldDecorator('workspace.ram', { initialValue: 1 });
  getFieldDecorator('workspace.hdd', { initialValue: 8 });
  getFieldDecorator('workspace.cpu', { initialValue: 500 });
  getFieldDecorator('workspace.name', { rules: [{ required: true }] });
  getFieldDecorator('workspace.language', { initialValue: 'JavaScript' });

  return (
    <Modal {...props} footer={false} width="700px" style={{ top: '20px' }}>
      <div>
        <div className={css(styles.modal.header)}>
          {step + 1}/{_.size(STEPS)}:
            {' '}
          {_.get(STEPS, `[${step || 0}].name`)}
        </div>
        <Progress
          showInfo={false}
          percent={(100 / STEPS.length) * (step + 1)}
        />
      </div>
      <div>
        <StepZilla
          steps={steps()}
          showSteps={false}
          stepsNavigation={false}
          onStepChange={stepping}
          backButtonCls="ant-btn ant-btn-default pull-left"
          nextButtonCls="ant-btn ant-btn-primary pull-right"
        />
        {/* Hotfix for modal height */}
        <br /><br /><br />
      </div>
    </Modal>
  );
}

const BoxFormWithForm = Form.create()(BoxFormComponent)

export const BoxForm = (props) => {
    
    const { loading: loadingUseGitSearchRepositoryQuery,
            error: errorUseGitSearchRepositoryQuery,
            data: dataUseGitSearchRepositoryQuery } = useGitSearchRepositoryQuery()

    const { loading: loadingUseGitFetchUserQuery,
              error: errorUseGitFetchUserQuery,
              data: dataUseGitFetchUserQuery } = useGitFetchUserQuery()
              
    const data = {...dataUseGitFetchUserQuery, ...dataUseGitSearchRepositoryQuery, ...props}
    
    return <BoxFormWithForm {...data} />
}
