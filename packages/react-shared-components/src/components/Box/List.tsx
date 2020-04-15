import * as _ from 'lodash';
import * as React from 'react';
import { List, Button } from 'antd';
import { useFela } from 'react-fela';
import { WorkspaceStatus } from '@adminide-stack/core';

import { BoxComponent as Box } from './Box';

export interface IListProps {
    workspaces: any[];
    start: Function;
    loading: boolean;
    create: Function;
    routeTo: Function;
    shutdown: Function;
    styles?: any;
    remove: Function;
    onNewWorkspace: Function;
    onWorkspaceSettings: Function;
    filter: string;
    status: string;
}

export function ListComponent(props: any) {
    const { filter, status, workspaces, start, remove, loading = false, shutdown, routeTo, onNewWorkspace, onWorkspaceSettings } = props;

    const getWorkspaces = () => {
        const result = filter || status
            ? workspaces
                .filter(workspace => filter ? workspace.name.toLowerCase().includes(filter.toLowerCase()) : true)
                .filter(workspace => {
                    if (status) {
                        switch (status) {
                            case WorkspaceStatus.WORKSPACE_STATUS_DISABLED:
                                return workspace.status !== WorkspaceStatus.WORKSPACE_STATUS_PENDING
                                    || workspace.status === WorkspaceStatus.WORKSPACE_STATUS_STARTED
                                    || workspace.status === WorkspaceStatus.WORKSPACE_STATUS_ACTIVE;
                            default: return workspace.status === status;
                        }
                    }

                    return true;
                })
            : workspaces;

        return result && result.map((workspace, _index) => ({ ...workspace, _index }));
    };

    const onSettings = (item: any) => () => onWorkspaceSettings(item);

    const renderItem = (item: any) => (
        <List.Item>
            <Box
                hoverable
                start={start}
                key={item.id}
                remove={remove}
                workspace={item}
                routeTo={routeTo}
                loading={loading}
                shutdown={shutdown}
                onSettings={onSettings(item)}
            />
        </List.Item>
    );

    return (
        <div className="mx-auto" style={{ width: '75%' }}>
            <List
                rowKey="id"
                loading={loading}
                renderItem={renderItem}
                dataSource={getWorkspaces()}
                grid={{ gutter: 16, column: 1 }}
            />
        </div>
    );

}

const styles: any = {
    list: props => ({
        '&.-empty': {
            'align-items': 'center',
            'justify-content': 'center',
        },
    }),
    row: props => ({
        'padding': '0 0 15px 0',
    }),
    centered: props => ({
        'textAlign': 'center',
    }),
    btn: props => ({
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
    addNew: props => ({
        'background-color': '#8d8b89',
        'textAlign': 'center',
        'height': '290px',
        'width': '290px',
        'line-height': '220px',
        'vertical-align': 'middle',
        'cursor': 'pointer',
        'margin-right': '20px',
        'margin-bottom': '20px',
        '&:hover': {
            'color': '#e8e8e8!important',
            '>div': {
                'color': '#e8e8e8!important',
                'border-color': '#e8e8e8!important',
            },
            '>i': {
                'color': '#e8e8e8!important',
            },
            '>p': {
                'color': '#e8e8e8!important',
            },
        },
    }),
    column: props => ({

    }),
    icon: props => ({
        color: 'white',
        border: '1px solid white',
        'border-radius': '50%',
        'width': '80px',
        'height': '80px',
        'vertical-align': 'middle',
        'textAlign': 'center',
        'line-height': '80px',
        'font-size': '30px',
        'display': 'inline-block',
        'transition': 'all 300ms',
    }),
    iconFix: props => ({
        'left': '1px!important',
    }),
    addNewText: props => ({
        color: 'white',
        'line-height': '14px',
        'margin-top': '-40px',
        'transition': 'all 300ms',
    }),
};
