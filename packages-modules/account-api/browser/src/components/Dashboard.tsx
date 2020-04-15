import * as _ from 'lodash';
import { Layout, List } from 'antd';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Col, Row, Button } from 'antd';
import { PageView } from '@adminide-stack/react-shared-components';

import { TeamCard } from './TeamCard';

const { Content } = Layout;

const styles: any = {
    content: props => ({
        width: '100%',
        height: '100%',
        padding: '15px',
        'overflow': 'auto',
        display: 'flex',
        'flex-direction': 'column',
    }),
    toolbar: props => ({
        display: 'flex',
        flexDirection: 'row',
        '& .left': {
            flexGrow: '1',
        },
        '& .center': {
            flexGrow: '1',
        },
        '& .right': {
            flexGrow: '1',
            textAlign: 'right !important',
        },
        '& button': {
            marginTop: '0 !important',
        },
    }),
};

export function Dashboard(props) {
    const { css } = useFela(props);

    const { teams$: { teams } } = props;
    const toggleModal = status => e => props.toggleModal(status)(e);

    function renderItem(team) {
        return (
            <List.Item>
                <TeamCard team={team} key={team._id} />
            </List.Item>
        );
    }

    return (
        <PageView title="Teams">
            <Content className={css(styles.content)}>
                <div className={css(styles.toolbar)}>
                    <div className="left" />
                    <div className="center" />
                    <div className="right">
                        <Button onClick={toggleModal(true)} size="large" type="primary">Create team</Button>
                    </div>
                </div>
                <br/>
                <div className="mx-auto" style={{ width: '75%' }}>
                    <List
                        rowKey="id"
                        dataSource={teams}
                        loading={props.loading}
                        renderItem={renderItem}
                        grid={{ gutter: 16, column: 1 }}
                    />
                </div>
            </Content>
        </PageView>
    );
}
