import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { Layout, Icon } from 'antd';
import { connect } from 'react-redux';
import {  useFela } from 'react-fela';
import { bindActionCreators } from 'redux';

import { sidebar } from '../redux/actions';
import { SidebarTumbler } from '../containers';

const { Header } = Layout;

const mapStateToProps = (state, ownProps) => ({
    state: _.get(state, '@adminide-stack/sidebar'),
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggle: sidebar }, dispatch);

export function PageHeaderComponent(props: any) {
    const { title, state, collapsible, toggle } = props;

    const { css } = useFela(props);

    return (
        <>
            {(state && collapsible) ? (
                <Header className={css(styles.minimized)}>
                    <div className={css(styles.centered)}>
                        <Icon
                            type="caret-down"
                            onClick={toggle.bind(null, !state)}
                            className={css(styles.cursor)}
                        />
                    </div>
                </Header>
            ) : (
                    <Header className={css(styles.header)}>
                        <div className={css(styles.title)}>
                            <SidebarTumbler />{' '}{title}
                        </div>
                    </Header>
                )}
        </>
    );
}

const styles: any = {
    cursor: props => ({
        cursor: 'pointer',
    }),
    centered: props => ({
        textAlign: 'center',
    }),
    title: props => ({
        fontSize: '20px',
    }),
    minimized: props => ({
        padding: '10px 30px',
        height: 'auto !important',
        lineHeight: '1em !important',
    }),
    header: props => ({
        '&.ant-layout-header': {
            backgroundColor: '#fff',
            color: '#000',
        },
    }),
};

export const PageHeader = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(PageHeaderComponent);
