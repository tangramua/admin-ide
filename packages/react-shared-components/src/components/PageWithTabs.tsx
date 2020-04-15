import * as _ from 'lodash';
import * as H from 'history';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Layout, Tabs, Menu } from 'antd';
import { withRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';

const { Item } = Menu;
const { Content, Header } = Layout;

export namespace PageWithTabs {
    export interface Props {
        onLogOut: () => {};
        match?: any;
        history?: any;
        route?: { routes?: any };
        user?: any;
        profile?: any;
        styles?: any;
        location?: H.Location;
        pageHeader?: string;
        tabs: [{
            key: string;
            tab: string;
            path: string;
        }];
    }

    export interface ComponentState {
        key: string;
        collapsed?: boolean;
    }

    export type State = ComponentState;
}

export function PageWithTabsComponent(props: any) {
    const { route, location, pageHeader, tabs } = props;

    const { css } = useFela(props);
    const [collapsed, setCollapsed] = React.useState(false);
    const [key, setKey] = React.useState(props.location.pathname);

    const onCollapse = (state: boolean) => {
        setCollapsed(state);
    };

    React.useEffect(() => {
        setKey({ key: props.location.pathname });
    }, [location.pathname]);

    const generateTabs = () => (
        <div className={css(styles.pane)}>
            {renderRoutes(props.route.routes)}
        </div>
    );

    const onChange = (data: any) => props.history.push(data.key);

    return (
        <React.Fragment>
            <Header className={css(styles.header)}>
                <div className={css(styles.title)}>
                    {pageHeader || 'Account Settings'}
                </div>
            </Header>
            <Content>
                <div className={css(styles.container)}>
                    <Menu
                        mode="horizontal"
                        onSelect={onChange}
                        selectedKeys={[key || props.location.pathname]}
                    >
                        {_.map(tabs, record => (
                            <Item key={record.path}>
                                {record.tab}
                            </Item>
                        ))}
                    </Menu>
                    {generateTabs()}
                </div>
            </Content>
        </React.Fragment >
    );
}

const styles: any = {
    title: props => ({
        fontSize: '20px',
    }),
    tabs: props => ({
        height: '100%',
        '& > .ant-tabs-content': {
            height: '100%',
        },
    }),
    pane: props => ({
        overflowY: 'auto',
        height: 'calc(100% - 45px)',
        padding: '15px',
    }),
    header: props => ({
        backgroundColor: '#f0f2f5 !important',
    }),
    copy: props => ({
        textAlign: 'center',
    }),
    container: props => ({
        background: '#fff',
        height: 'calc(100vh - 133px)',
    }),
};

export const PageWithTabs: any = (withRouter(PageWithTabsComponent));
