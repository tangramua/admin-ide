import { Layout } from 'antd';
import * as React from 'react';

import { Sidebar } from './Sidebar';
import { useFela } from 'react-fela';

const { Content } = Layout;

export interface ILayoutProps {
    styles?: any;
}

export function ApplicationLayout(props) {
        const { children } = props;
        const { css } = useFela(props);

        return (
            <Layout hasSider={true} className={`dashboard ${css(styles.page)}`}>
                {/* <TopNavigation user={user} logout={auth.logout} onCreate={this.openModal} /> */}
                <Sidebar />
                <Layout>
                    <Content>
                        <div className={css(styles.container)}>
                            {children}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
}

const styles: any = ({
    container: props => ({
        height: '100vh',
        background: '#fff',
    }),
    page: props => ({
        display: 'flex',
        width: '100%',
        'flex-direction': 'column',
    }),
});
