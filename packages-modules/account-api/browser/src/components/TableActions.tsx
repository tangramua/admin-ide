import * as _ from 'lodash';
import { Button } from 'antd';
import * as React from 'react';
import * as PropTypes from 'prop-types';

import { ButtonType } from 'antd/lib/button';

export interface ITableAction {
    action: (e: any) => any;
    name: string;
    wrapper?: any;
    type: ButtonType;
}

export interface IActionsBarProps {
    actions: ITableAction[];
}

export const Action = ({ action }: { action: ITableAction }) => {
    const btn = <Button size="small" onClick={action.action} type={action.type}>{action.name}</Button>;
    return action.wrapper ? action.wrapper(btn) : btn;
};

export const TableActions = ({ actions }: IActionsBarProps) => (
    <div style={styles.row}>
        {_.map(actions, (action, key) => <Action key={key} action={action} />)}
    </div>
);

const styles = {
    row: ({
        textAlign: 'right',
    }) as any,
};
