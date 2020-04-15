import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Tabs, Layout, Icon, Popover } from 'antd';
import { IStack, IWorkspace } from '@adminide-stack/core';

import { General } from './General';
import { SshKeys } from './SshKeys';
import { Projects } from './Projects';
import { WorkspaceShare } from './WorkspaceShare';
import { PreviewSettings } from './PreviewSettings';
import { WorkspaceStatus } from './WorkspaceStatus';
import { StacksComponent as Stacks } from './Stacks';
import { WorkspaceBranches } from './WorkspaceBranches';
import { WorkspacePullRequests } from './WorkspacePullRequests';

const { TabPane } = Tabs;
const { Content, Header } = Layout;

const styles: any = {
  search: props => ({}),
  title: props => ({
    fontSize: '20px',
  }),
  tabs: props => ({
    '& > .ant-tabs-content': {
      height: '100%',
    },
  }),
  pane: props => ({
    zIndex: 9999,
    overflowY: 'auto',
    padding: '0 15px',
    height: 'calc(100% - 45px)',
  }),
  header: props => ({
    '&.ant-layout-header': {
      backgroundColor: '#fff',
      color: '#000',
    },
  }),
  page: () => ({
    width: '100%',
    height: '100%',
    display: 'flex',
    'flex-direction': 'column',
  }),
  copy: props => ({
    textAlign: 'center',
  }),
  container: props => ({
    overflowY: 'auto',
    background: '#fff',
    height: 'calc(100vh - 64px)',
  }),
};

export namespace IWorkspaceDetails {

  export interface StateProps {
    providers?: any;
    addProject?: any;
    addStacks?: any;
    workspace: any;
    repository: any;
    toggleSidebar: any;
    sidebar: any;
    profile: any;
    styles?: any;
    updateGeneral: any;
    updateLaunch: any;
    setVariables: any;
    sendInvitations: any;
    resendInvitation: any;
    declineInvitation: any;
  }

  export type Props = StateProps;
}

export function WorkspaceDetails(props: any) {
  const {
    providers, addProject, addStacks,
    resendInvitation, declineInvitation,
    workspace, repository, sendInvitations,
    updateGeneral, updateLaunch, setVariables, profile } = props;

  const { css } = useFela(props);
  const loading = workspace.loading;

  return (
    <React.Fragment>
      <Header className={css(styles.header)}>
        <div className={css(styles.title)}>
          <WorkspaceStatus workspace={workspace.workspace || {}} />
          {' '}
          {_.get(workspace, 'workspace.name', '')}
          {' '}
          <Popover placement="rightTop" trigger="click" content={<PreviewSettings />} title="Preview settings">
            <small>
              <Icon type="eye" />
            </small>
          </Popover>
        </div>
      </Header>
      <Content>
        <div className={css(styles.container)}>
          <Tabs className={css(styles.tabs)} animated={false} defaultActiveKey="1">
            <TabPane className={css(styles.pane)} tab="General Settings" key="1">
              <General
                loading={loading}
                setVariables={setVariables}
                updateLaunch={updateLaunch}
                refetch={workspace.refetch}
                updateGeneral={updateGeneral}
                workspace={_.get(workspace, 'workspace', {})}
                repository={_.get(repository, 'repository', {})}
              />
            </TabPane>
            <TabPane className={css(styles.pane)} tab="Projects" key="2">
              <Projects
                loading={loading}
                addProject={addProject}
                workspace={_.get(workspace, 'workspace', {})}
                providers={_.get(providers, 'getGitProvidersState')}
                projects={_.get(workspace, 'workspace.projects', {})}
              />
            </TabPane>
            <TabPane className={css(styles.pane)} tab="Stacks" key="3">
              <Stacks
                addStacks={addStacks}
                workspace={_.get(workspace, 'workspace', {}) as IWorkspace}
                stacks={_.get(workspace, 'workspace.stacks', []) as IStack[]}
              />
            </TabPane>
            <TabPane className={css(styles.pane)} tab="Branches" key="4">
              <WorkspaceBranches
                loading={loading}
                workspace={_.get(workspace, 'workspace', {})}
              />
            </TabPane>
            <TabPane className={css(styles.pane)} tab="Pull requests" key="5">
              <WorkspacePullRequests
                loading={loading}
                workspace={_.get(workspace, 'workspace', {})}
                repository={_.get(repository, 'repository', {})}
              />
            </TabPane>
            <TabPane className={css(styles.pane)} tab="SSH Keys" key="6">
              <SshKeys
                profile={profile}
                loading={loading}
                ssh={{ refresh: function () {/** fix it */ } }}
                workspace={_.get(workspace, 'workspace', {})}
                repository={_.get(repository, 'repository', {})}
              />
            </TabPane>
            <TabPane className={css(styles.pane)} tab="Share workspace" key="7">
              <WorkspaceShare
                loading={loading}
                sendInvitations={sendInvitations}
                resendInvitation={resendInvitation}
                declineInvitation={declineInvitation}
                workspace={_.get(workspace, 'workspace', {})}
                repository={_.get(repository, 'repository', {})}
              />
            </TabPane>
          </Tabs>
        </div>
      </Content>
    </React.Fragment>
  );
}
