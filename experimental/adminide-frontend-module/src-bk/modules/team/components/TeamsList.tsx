import * as _ from 'lodash';
import * as React from 'react';
import { Menu, Icon } from 'antd';
import { useFela } from 'react-fela';
import { Query, QueryResult, OperationVariables } from 'react-apollo';
import { ProfileDocument, TeamsDocument } from '@adminide-stack/core';

export interface ITeamsListProps {
    key?: string;
    styles?: any;
    collapsed?: boolean;
    children?: (result: QueryResult<any, OperationVariables>) => React.ReactNode;
}

const { Item } = Menu;

const list = (css) => ({ data, loading }: QueryResult<any, OperationVariables>) => (
    <Menu
        theme="dark"
        mode="inline"
        className={css(styles.menu)}
    >
        {_.map(_.get(data, 'teams'), (team, index) => (
            <Item className={css(styles.item)} key={team._id}>
                <Icon type="star" />
                <span>
                    {' '}{team.name}
                </span>
            </Item>
        ))}
    </Menu>
);

export function TeamsList(props: ITeamsListProps) {
    const { css } = useFela(props);

    return (
        <Query ssr={false} query={ProfileDocument}>
            {({ data, loading, ...rest }) => (
                <React.Fragment>
                    {rest.error || loading || _.isEmpty(data.profile) ? null : (
                        <React.Fragment>
                            <div className={styles.title}>
                                <Icon type="usergroup-add" />
                                <span>
                                    {' '}Teams
                                </span>
                            </div>
                            <Query query={TeamsDocument}>
                                {(props.children as any) || list(css)}
                            </Query>
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </Query>
    );
}

const styles: any = {
    title: (props) => ({
        color: '#fff',
        padding: '0 15px',
        fontWeight: 'bold',
        textAlign: props.collapsed ? 'center' : '',
        '.anticon': {
            display: props.collapsed ? 'none' : '',
        },
    }),
    menu: (props) => ({
        color: props.collapsed ? 'red' : 'green',
    }),
    item: (props) => ({
        'span': {
            display: 'none',
        },
    }),
};
