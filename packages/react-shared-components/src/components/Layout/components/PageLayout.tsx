import * as React from 'react';
import { Layout } from 'antd';
import { Sidebar } from './Sidebar';
const { Header, Content, Footer } = Layout;
const { FelaComponent } = require('react-fela');

export namespace IPageLayout {
    export interface Props {
        segments?: any;
        sideBarMenus?: any;
    }
}
export const PageLayout: React.SFC<IPageLayout.Props> = ({ children, segments, sideBarMenus }) => {
    return (
        <FelaComponent style={styles.page}>
            <Layout hasSider={true}>
                <Sidebar segments={segments} menus={sideBarMenus} />
                <Layout>
                    <Layout style={{height: '100%'}}>
                        <section className="flex-grow" style={{height: '100%'}}>
                            {children}
                        </section>
                    </Layout>
                </Layout>
            </Layout>
        </FelaComponent>
    );
};

const styles = {
    search: props => ({}),
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
        height: 'calc(100% - 45px)',
        overflowY: 'auto',
        padding: '0 15px',
    }),
    header: props => ({
        backgroundColor: '#f0f2f5',
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
