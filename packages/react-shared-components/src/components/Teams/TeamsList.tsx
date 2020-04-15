import * as _ from 'lodash';
import { Menu } from 'antd';
import * as React from 'react';
import { TeamsDocument } from '@adminide-stack/core';
import { Query, QueryResult, OperationVariables } from 'react-apollo';

export interface ITeamsListProps {
    children: (result: QueryResult<any, OperationVariables>) => React.ReactNode;
}

const { Item } = Menu;

const list = ({ data, loading }: QueryResult<any, OperationVariables>) => (
    <Menu
        theme="dark"
        mode="inline"
    >
        {_.map(_.get(data, 'teams'), team => (
            <Item key={team.id}>{team.name}</Item>
        ))}
    </Menu>
);

export function TeamsList(props: ITeamsListProps) {
    return (
        <Query query={TeamsDocument}>
            {props.children || list as any}
        </Query>
    );
}
