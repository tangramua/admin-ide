import * as _ from 'lodash';
import * as H from 'history';
import * as React from 'react';
import { connect } from 'react-redux';
import { Layout, Menu, Divider, Row } from 'antd';
import { bindActionCreators, compose } from 'redux';
import { withRouter, NavLink } from 'react-router-dom';
import { SiderMenu } from '../../SubMenu';
import { useFetchUserProfileQuery } from '../../generated';
import { IUserProfile } from '@adminide-stack/core';
import { sidebar } from '../redux/actions';
import { useAuth } from '../../../context';

export interface ISidebarProps {
  user: any;
  menus: any;
  history: any;
  styles?: any;
  segments: any;
  sidebar: boolean;
  toggleSidebar: any;
  authenticated: any;
  location: H.Location;
}
export interface ISidebarState { }

const { Item } = Menu;
const { Sider } = Layout;
const { SubMenu } = Menu;

const testUser: IUserProfile | any = {
  //   isTest: true,
  email: 'test.cdmbase@dispostable.com',
};

const mapStateToProps = (state, ownProps) => ({
  sidebar: _.get(state, '@adminide-stack/sidebar'),
  location: state.router.location,
  authenticated: !!state.user.auth0UserId,
});
const mapDispatchToProps = dispatch =>
  bindActionCreators({ toggleSidebar: sidebar }, dispatch);

export function SidebarComponent({
  toggleSidebar,
  location,
  menus,
  segments,
}) {
  const handleClick = e => setCurrent(e.key);
  const [current, setCurrent] = React.useState(null);

  const { user, loading, ...rest } = useAuth();

  return (
   <>
    <SiderMenu
      loading={loading}
      menuData={menus}
      segments={segments}
      styles={{} as any}
      location={location}
      collapsed={false}
      onCollapse={toggleSidebar as any}
      user={user}
    />
   </>
  );
}

const style: any = {
  sidebar: props => ({
    '& > .ant-layout-sider-children': {
      display: 'flex',
      flexDirection: 'column',
    },
  }),
  sider: props => ({
    overflowY: 'auto',
    backgroundColor: '#5d58f7',
    boxShadow: '2px 0px 3px 0px rgba(93, 88, 247, 0.5)',
    '& .ant-menu-inline-collapsed .ant-avatar': {
      marginRight: '12px !important',
    },
    '& > .ant-layout-sider-children': {
      display: 'flex',
      flexDirection: 'column !important',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark': {
      backgroundColor: '#5d58f7',
      color: '#ffffff',
      fontWeight: '600',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark .ant-menu-item': {
      margin: 0,
      height: 'auto',
      padding: 5,
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark .ant-menu-item:hover': {
      backgroundColor: '#ffffff',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark .ant-menu-item.ant-menu-item-selected': {
      backgroundColor: '#ffffff',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark .ant-menu-item a': {
      color: '#ffffff',
      fontWeight: '600',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark .ant-menu-item:hover a': {
      color: '#5d58f7',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark .ant-menu-item.ant-menu-item-selected a': {
      color: '#5d58f7',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark .ant-menu-item.ant-menu-item-selected span': {
      color: '#5d58f7',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-dark .ant-menu-item.ant-menu-item-selected i': {
      color: '#5d58f7',
    },
    '& > .ant-layout-sider-children .ant-menu.ant-menu-sub': {
      backgroundColor: '#5d58f7',
      color: '#ffffff',
      fontWeight: '600',
    },
  }),
  item: props => ({
    flexGrow: 0,
  }),
  grow: props => ({
    flexGrow: 1,
  }),
  icon: props => ({
    textAlign: 'center',
  }),
  divider: props => ({
    margin: '10px 0',
    padding: '0 15px',
  }),
  text: props => ({
    color: 'white',
  }),
  menu: {
    container: () => ({
      padding: '0 15px',
    }),
    item: () => ({
      textAlign: 'center',
      '&:active a': {
        'background-color': '#337ab7 !important',
      },
      '&:hover a': {
        'background-color': '#337ab7 !important',
      },
      '& a': {
        color: 'white !important',
      },
    }),
  },
};

export const Sidebar: any = withRouter(
  compose(
    connect(
      mapStateToProps,
      mapDispatchToProps,
    ),
  )(SidebarComponent as any),
);
