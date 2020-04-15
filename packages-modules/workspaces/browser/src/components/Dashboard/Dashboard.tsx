import * as React from 'react';
import { useFela } from 'react-fela';
import { PageView, BoxForm, Workspaces } from '@adminide-stack/react-shared-components';

export interface IDashboardProps {
    workspaces: any[];
    loading: boolean;
    match?: any;
    history?: any;
    authenticated: boolean;
    start: Function;
    update: Function;
    shutdown: Function;
    routeTo: Function;
    createBoxForm: any;
    add: Function;
    remove: Function;
    repositories: any[];
    subscribeToWorkspace: Function;
}

export function Dashboard(props: IDashboardProps) {
    const { css } = useFela(props);
    const [ selected, setSelected ] = React.useState(null);

    const { workspaces = [], start, shutdown, repositories, routeTo, add, remove, loading = false } = props;

    // Modal actions
    function close() {
        setSelected(null);
    }

    function open(workspace = {}) {
        setSelected(workspace);
    }

    function openCreateWorkspacePage(workspace = {}) {
        props.routeTo('/create-workspace');
    }

    // Create / update methods
    function update(data) {
        update(data); close();
    }

    function create(data) {
        add(data); close();
    }

    return (
        <PageView title="Dashboard">
            <div id="dashboard" className={css(styles.container)}>
                <div className={css(styles.content)}>
                    <Workspaces
                        start={start}
                        create={create}
                        remove={remove}
                        routeTo={routeTo}
                        loading={loading}
                        shutdown={shutdown}
                        workspaces={workspaces}
                        onWorkspaceSettings={open}
                        onNewWorkspace={openCreateWorkspacePage}
                    />
                </div>
            </div>

            {!!selected ? (
                <BoxForm
                    close={close}
                    update={update}
                    create={create}
                    onCancel={close}
                    visible={!!selected}

                    workspace={selected || {}}
                    repositories={repositories}
                    isEdit={selected ? !!selected.id : false}
                />
            ) : null}
        </PageView>
    );
}

const styles: any = ({
    sider: props => ({
        overflowY: 'auto',
        '& > .ant-layout-sider-children': {
            display: 'flex',
            flexDirection: 'column !important',
        },
    }),
    copy: props => ({
        textAlign: 'center',
    }),
    container: props => ({
        height: 'auto',
        background: '#fff',
    }),
    page: props => ({
        display: 'flex',
        width: '100%',
        'flex-direction': 'column',
    }),
    dashboard: props => ({
        height: '50%',
        display: 'flex',
        'flex-grow': '1',
        'flex-direction': 'row',
    }),
    content: props => ({
        width: '100%',
        padding: '15px 15px 0 15px',
        height: '100%',
        'overflow': 'auto',
        display: 'flex',
        'flex-direction': 'column',
    }),
    loading: props => ({
        margin: 0,
        width: '100%',
        'textAlign': 'center',
        'align-self': 'center',
        'justify-content': 'center',
        'display': 'flex',
        'flex-direction': 'column',
    }),
    header: {
        wrapper: props => ({
            display: 'flex',
            'flex-grow': '0',
            'flex-direction': 'row',
            'margin-bottom': '15px',
        }),
        title: props => ({
            margin: 0,
            'flex-grow': 3,
        }),
        search: props => ({
            'margin-top': '20px',
            'flex-grow': 1,
            'justify-content': 'center',
            'align-self': 'center',
        }),
    },
});
