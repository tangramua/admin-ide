import * as _ from 'lodash';
import * as React from 'react';
import { Card } from 'antd';
import { useFela } from 'react-fela'; 
export interface IReportsProps {
    styles?: any; 
}

export interface IReportsState { }

export function ReportsComponent(props) {

    const { css } = useFela(props);
    const { customerData } = props
    return (
        <div className="p-2">
            <h2>Reports</h2>
            {/* <Card title="Information" className={css(styles.card)}>
                {customerData && (
                    <div>
                        <div>Account balance: {customerData.account_balance} {customerData.currency}</div>
                        <div>Email: {customerData.email}</div>
                    </div>
                )}
            </Card> */}
        </div>
    );
}

const styles: any = {
    card: props => ({
        margin: '10px 0',
        '& .ant-card-head': {
            'background': '#F9F9F9',
        },
    }),
};

