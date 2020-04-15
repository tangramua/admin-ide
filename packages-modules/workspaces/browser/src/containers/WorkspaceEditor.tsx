import * as _ from 'lodash';
import { Spin } from 'antd';
import * as React from 'react';
import { Query } from 'react-apollo';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { PageView, sidebar } from '@adminide-stack/react-shared-components';

import { GetWorkspacesDocument } from '@adminide-stack/core';
import { WorkspaceEditorIFrameComponent as WorkspaceEditorIFrame } from '../components';

export function WorkspaceEditorComponent(props: any) {
    React.useEffect(function () {
        props.toggle(true);
    }, []);

    const { match, user } = props;
    return (
        <PageView minimized={true} title="Workspace Editor">
            <Query variables={{ id: _.get(match, 'params.id') }} query={GetWorkspacesDocument}>
                {({ data, loading, error }) => (
                    loading
                        ? <Spin />
                        : <WorkspaceEditorIFrame
                            user={user}
                            workspace={_.get(data, 'workspace', {})}
                        />
                )}
            </Query>
        </PageView>
    );
}

const mapStateToProps = (state, props) => ({
    user: _.get(state.user, 'profile', {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators({ toggle: sidebar }, dispatch);

export const WorkspaceEditor = compose(
    connect(mapStateToProps, mapDispatchToProps),
)(WorkspaceEditorComponent as any) as any;
