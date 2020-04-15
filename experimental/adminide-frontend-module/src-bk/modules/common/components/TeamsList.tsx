import * as _ from 'lodash';
import * as React from 'react';
import { TeamsDocument } from '@adminide-stack/core'
import { Query, QueryResult, OperationVariables } from 'react-apollo';

export interface ITeamsListProps {
    children?: (result: QueryResult<any, OperationVariables>) => React.ReactNode;
}

const list = ({ data }: QueryResult<any, OperationVariables>) => (
    <ul>
        {_.map(_.get(data, 'teams'), team => (
            <li>{team.name}</li>
        ))}
    </ul>
);

export const TeamsList = (props: ITeamsListProps) => (
    <React.Fragment>
        <Query query={TeamsDocument}>
            {(props.children as any) || list}
        </Query>
    </React.Fragment>
);
