import * as _ from 'lodash';
import { Icon } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';

import { sidebar } from '../redux/actions';

const testUser = {
    email: 'test.cdmbase@dispostable.com',
};

const mapStateToProps = (state, ownProps) => ({
    state: _.get(state, '@adminide-stack/sidebar'),
    authenticated: (state.auth || {}).authenticated || true,
});

const mapDispatchToProps = dispatch => bindActionCreators({ toggle: sidebar }, dispatch);

const SidebarTumblerComponent = ({ state, toggle }) => (
    <span onClick={() => toggle(!state)}>
        {state
            ? <Icon type="menu-unfold" />
            : <Icon type="menu-fold" />}
    </span>
);

export const SidebarTumbler = compose(
    connect(mapStateToProps, mapDispatchToProps))
(SidebarTumblerComponent as any);
