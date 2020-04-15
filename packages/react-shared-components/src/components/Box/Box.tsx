import * as _ from 'lodash';
import * as React from 'react';
import TimeAgo from 'react-timeago';
import { Link } from 'react-router-dom';
import * as PrettySize from 'prettysize';
import { useFela } from 'react-fela';
import { WorkspaceStatus } from '@adminide-stack/core';
import { Card, Button, Row, Popconfirm, Select, Menu } from 'antd';

import { WorkspaceStatus as WSStatus } from '../Workspace/WorkspaceStatus';
import { workspaceStatusFromValue, workspaceActions } from '../Workspace/utils';

const { Item: MenuItem } = Menu;
const { Meta } = Card;
const { Group } = Button;
const { Option } = Select;


const langs = {
    go: <i className="devicon-go-line colored" />,
    rust: <i className="devicon-rust-plain colored" />,
    ruby: <i className="devicon-ruby-plain colored" />,
    js: <i className="devicon-javascript-plain colored" />,
    python: <i className="devicon-python-plain colored" />,
};

const styles: any = {
    name: props => ({
        fontSize: '16px',
        margin: '0 0 5px 0',
    }),
    description: props => ({
        fontSize: '12px',
        margin: 0,
        ':first-child': {
            marginTop: '5px',
        },
        'margin-bottom': '10px',
    }),
    status: props => ({
        [`&.-${WorkspaceStatus.WORKSPACE_STATUS_ACTIVE}`]: ({
            color: '#449d44',
        }),
        [`&.-${WorkspaceStatus.WORKSPACE_STATUS_DISABLED}`]: ({
            color: '#ababab',
        }),
        [`&.-${WorkspaceStatus.WORKSPACE_STATUS_PENDING}`]: ({
            color: '#ec971f',
        }),
        [`&.-${WorkspaceStatus.WORKSPACE_STATUS_STARTED}`]: ({
            color: '#ec971f',
        }),
    }),
    menu: props => ({
        border: 'none !important',
        ':hover': {
            background: 'transparent !important',
            workspaceShadow: 'none !important',
        },
        ':visited': {
            background: 'transparent !important',
            workspaceShadow: 'none !important',
        },
        ':focus': {
            background: 'transparent !important',
            workspaceShadow: 'none !important',
        },
    }),
    footer: {
        container: props => ({

        }),
        column: props => ({
            fontSize: '12px',
        }),
    },
    updateText: props => ({
        'font-weight': 'lighter',
        'margin-top': '70px',
        'margin-bottom': '8px',
    }),
};

export namespace IWorkspaceActionSelector {
    export interface Props {
        workspace: any;
        start: (id: any) => {};
        shutdown: (id: any) => {};
        remove: (id: any) => {};
        routeTo: (id: any) => {};
    }
}

const WorkspaceActionSelector: React.SFC<IWorkspaceActionSelector.Props> = ({ workspace, start, shutdown, remove, routeTo }) => {
   
    const menus = workspaceActions({
        startAction: () => start(workspace.id),
        stopAction: () => shutdown(workspace.id),
        buildAction: () => console.log('build not implemented'),
        activateAction: () => console.log('activate not implemented'),
        deactivateAction: () => console.log('deactive not implemented'),
        openAction: () => routeTo(`/workspace/${workspace.id}/editor`),
        detailAction: () => routeTo(`/workspace/${workspace.id}/details`),
    })(workspaceStatusFromValue(workspace.status));

    const keys: string[] = menus.map(v => v.key);
    const intialAction = keys[0];
    const matachedAction = (selected) => {
        const matchedActions = menus.map(v => v.key === selected && v.action);
        const execAction = matchedActions.filter(o => o)[0] as () => void;
        return execAction();
    };
    return (
        <Select size="small" key="select-workspace-status" value={intialAction} onSelect={matachedAction} >
            {menus.map((act) => (
                <Option key={act.key} value={act.key} >
                    {act.key}
                </Option>
            ))}
        </Select>
    );
};

export function BoxComponent(props: any) {
    const { workspace, remove, shutdown, start, routeTo, loading, onSettings, ...rest } = props;
    const { description } = workspace;

    const footer = () =>  {
        return (
            <div className={`row text-center ${styles.footer.container}`}>
                <div className={`col-sm-4 ${styles.footer.column}`}>
                    <Row><strong>{workspace.spec.cpu}</strong> CPU</Row>
                </div>
                <div className={`col-sm-4 ${styles.footer.column}`}>
                    <Row><strong>{PrettySize(workspace.spec.ram, true, false, 0)}</strong> RAM</Row>
                </div>
                <div className={`col-sm-4 ${styles.footer.column}`}>
                    <Row><strong>{PrettySize(workspace.spec.hdd, true, false, 0)}</strong> HDD</Row>
                </div>
            </div>
        );
    };

    const renderDescription = () => description && description.split('\n').map((line, lineIndex) =>
        <p key={lineIndex} className={`${styles.description}`}>{line}</p>,
    );

    const onRemove = (id) => () => {
        remove(id);
    };

    const onShutdown = (id) => () => {
        shutdown(id);
    };

    const onstart = (id) => () => {
        start(id);
    };

    const openEditor = (id) => () => routeTo(`/app/workspace/${id}/editor`);

        const rm = (id) => {
            remove(id);
        };

        return (
            <Card
                {...rest}
                loading={loading}
                actions={loading ? null : [
                    (
                        <WorkspaceActionSelector
                            key={'worspaceStatus'}
                            workspace={workspace}
                            start={start}
                            shutdown={shutdown}
                            remove={remove}
                            routeTo={routeTo}
                        />
                    ),
                    (
                        < Link
                            key={3}
                            to={`/workspace/${workspace.id}/details`}
                        >
                            <span>Details</span>
                        </Link>
                    ),
                    (
                        <Popconfirm key={workspace.id} title="Are you sure?" okText="Yes" onConfirm={onRemove(workspace.id)}>
                            <span>Remove</span>
                        </Popconfirm>
                    ),
                ]
                }
            >
                <div className="panel-content">
                    <div className="icon">{langs[workspace.lang]}</div>
                    <div className="information">
                        <div className={`${styles.name}`}>
                            <span>
                                <i
                                    className={`
                                    indicator
                                    glyphicon
                                    glyphicon-certificate
                                    ${styles.status}
                                    -${workspace.status}
                                    `}
                                />
                            </span> <strong>
                                <span>
                                    <WSStatus workspace={workspace.workspace || {}} />
                                    {' '}
                                    {workspace.name}
                                </span>
                            </strong>
                        </div>
                        <div>{renderDescription()}</div>
                        <p className={`${styles.updateText}`}>
                            Updated <TimeAgo date={workspace.updatedAt} />
                        </p>
                        {/*TODO change is hardcodeing upter fixing the data received.*/}
                        {/*TODO Add Actions of this buttons*/}
                    </div>
                </div>
            </Card >
        );
}
