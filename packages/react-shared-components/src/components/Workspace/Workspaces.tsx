import * as React from 'react';
import { Button, Input, Col, Row, Select } from 'antd';
import { WorkspaceStatus } from '@adminide-stack/core';

import { ListComponent as WorkspacesList } from '../Box';
import { useFela } from 'react-fela';

const { Option } = Select;

export interface IWorkspaceProps {
    styles?: any;
    workspaces: any[];
    start: Function;
    create: Function;
    routeTo: Function;
    shutdown: Function;
    remove: Function;
    onNewWorkspace: Function;
    onWorkspaceSettings: Function;
}

export namespace WorkSpaces {
    export interface OwnProps {
        workspaces: any[];
        loading: Boolean;
        start: Function;
        create: Function;
        routeTo: Function;
        styles?: any;
        shutdown: Function;
        remove: Function;
        onNewWorkspace: Function;
        onWorkspaceSettings: Function;
        filter?: string;
        status?: string;
    }
    export interface OwnState {
        filter: string;
        status: string;
    }

    export type Props = OwnProps;
}
export function Workspaces(props: any) {
    const { onNewWorkspace } = props;

    const { css } = useFela(props);
    const [filter, setFilter] = React.useState(null);
    const [status, setStatus] = React.useState(null);

    const formChangeStatus = (value: any) => setStatus(value);
    const formChangeFilter = (e) => setFilter(e.target.value);

    return (
        <div>
            <div>
                <Row gutter={16}>
                    <Col md={8}>
                        <Input
                            type="text"
                            size="large"
                            placeholder="Search..."
                            onChange={formChangeFilter}
                        />
                    </Col>
                    <Col md={8}>
                        <Select
                            size="large"
                            defaultValue=""
                            onChange={formChangeStatus}
                        >
                            <Option value="">All</Option>
                            <Option value={WorkspaceStatus.WORKSPACE_STATUS_ACTIVE}>Enabled</Option>
                            <Option value={WorkspaceStatus.WORKSPACE_STATUS_STARTED}>Started</Option>
                            <Option value={WorkspaceStatus.WORKSPACE_STATUS_DISABLED}>Disabled</Option>
                            <Option value={WorkspaceStatus.WORKSPACE_STATUS_PENDING}>Pending</Option>
                        </Select>
                    </Col>
                    <Col style={{ textAlign: 'right' }} md={8}>
                        <Button
                            size="large"
                            type="primary"
                            id="createWorkspace"
                            onClick={onNewWorkspace}
                            className={css(styles.btn)}
                        >
                            New Workspace
                        </Button>
                    </Col>
                </Row>
            </div>
            <br />
            <WorkspacesList
                {...props}
                filter={filter}
                status={status}
            />
        </div>
    );
}

const styles: any = ({
    btn: ({
        margin: '0',
        backgroundColor: '#ea7e2f',
        borderColor: '#ea7e2f',
        boxShadow: '0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08)',
        '&:hover': {
            backgroundColor: '#ffffff',
            borderColor: '#ea7e2f',
            color: '#ea7e2f',
        },
        '&:active': {
            backgroundColor: '#ffffff',
            borderColor: '#ea7e2f',
            color: '#ea7e2f',
        },
        '&:focus': {
            backgroundColor: '#ffffff',
            borderColor: '#ea7e2f',
            color: '#ea7e2f',
        },
    }),
});
