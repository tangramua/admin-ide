import * as _ from 'lodash';
import * as H from 'history';
import * as React from 'react';
import { Layout, Tabs, Row, Col } from 'antd';
import { useFela } from 'react-fela';
import { PageHeader } from './PageHeader';

const { Content } = Layout;

export namespace PageViewNs {
    export interface Props {
        user?: any;
        match?: any;
        styles?: any;
        profile?: any;
        title?: string;
        children?: any;
        minimized?: boolean;
        onLogOut?: () => {};
        location?: H.Location;
        route?: { routes?: any };
    }

    export interface ComponentState {
        key: string;
        collapsed?: boolean;
    }

    export type State = ComponentState;
}

export function PageView(props: PageViewNs.Props) {
    const { css } = useFela(props);
    const { title, minimized = false } = props;

    return (
        <React.Fragment>
            {title ? <PageHeader title={title} collapsed={minimized} collapsible={minimized} /> : null}
            <Content style={{ height: 'calc(100% - 64px)', overflowY: 'auto' }}>
                <div className={css(styles.container)}>
                    {props.children}
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
        padding: '0 15px 15px 15px',
    }),
    header: props => ({
        backgroundColor: '#f0f2f5',
    }),
    copy: props => ({
        textAlign: 'center',
    }),
    container: props => ({
        height: '100%',
        overflowY: 'auto',
        background: '#fff',
    }),
};
