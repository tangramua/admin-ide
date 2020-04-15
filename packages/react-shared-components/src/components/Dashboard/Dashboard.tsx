import * as React from 'react';
import { Query } from 'react-apollo';
import * as PropTypes from 'prop-types';
import { Layout, Menu, Icon } from 'antd';
import { HashRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom';

import { Workspaces } from '../Workspace';
import { PageView } from '../Layout/components/PageView';
import { BoxForm } from '../Box';

const { Sider, Content, Footer } = Layout;

export interface IDashboardProps {
    workspaces: any[];
    repositories: any[];
    loading: boolean;
    user: any;
    auth: any;
    authenticated: boolean;
    start: Function;
    update: Function;
    create: Function;
    shutdown: Function;
    routeTo: Function;
    createBoxForm: any;
    add: Function;
    remove: Function;
    subscribeToWorkspace: Function;
}

export interface IDashboardState {
    modal: boolean;
    workspace: any;
    data: object;
    user: object;
}

export class Dashboard extends React.Component<IDashboardProps, IDashboardState> {

    public static propTypes = {
        add: PropTypes.func.isRequired,
        remove: PropTypes.func.isRequired,
        start: PropTypes.func.isRequired,
        workspaces: PropTypes.array.isRequired,
    };

    public static contextTypes = {
        router: PropTypes.object.isRequired,
        renderer: PropTypes.object.isRequired,
    };

    public static defaultProps = {
        workspaces: [],
        routeTo: () => ({}),
    };

    public state: IDashboardState;
    public props: IDashboardProps;
    public subscription: null;
    public lock: any;

    constructor(props: IDashboardProps) {
        super(props);
        this.state = {
            modal: false,
            workspace: {},
            data: {},
            user: {},
        };

    }

    protected close = () => {
        this.setState({ modal: false, workspace: {} });
    }

    protected create = (data) => {
        this.props.add(data);
        this.close();
    }

    protected update(data) {
        this.props.update(data);
        this.close();
    }

    public UNSAFE_componentWillReceiveProps(nextProps) {
        this.props.subscribeToWorkspace({
            filter: 'test',
        });
    }

    protected openModal = (workspace) => {
        this.context.router.history.push('/create-workspace');
    }


    public render() {
        const { user } = this.state;
        const { renderer } = this.context;
        const { workspaces = [], start, create, shutdown, remove, routeTo, auth, loading } = this.props;
        return (
            <React.Fragment>
                <PageView title="Dashboard">
                    <div id="dashboard" className={renderer.renderRule(styles.container)}>
                        <div className={renderer.renderRule(styles.content)}>
                            <Workspaces
                                loading={loading}
                                onNewWorkspace={this.openModal}
                                onWorkspaceSettings={this.openModal}
                                workspaces={workspaces}
                                start={start}
                                shutdown={shutdown}
                                routeTo={routeTo}
                                create={create}
                                remove={remove}
                            />
                        </div>
                    </div>

                    {this.state.modal ? (
                        <BoxForm
                            close={this.close}
                            update={this.update}
                            create={this.create}
                            onCancel={this.close}
                            visible={this.state.modal}
                            isEdit={!!this.state.workspace.id}
                            repositories={this.props.repositories}
                            workspace={this.state.workspace || {}}
                        />
                    ) : null}
                </PageView>
            </React.Fragment>
        );
    }
}

const styles = ({
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
        background: '#f0f2f5',
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
        padding: '25px',
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
