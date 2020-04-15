import * as _ from 'lodash';
import moment from 'moment';
import * as React from 'react';
import ReactMD from 'react-markdown';
import { connect, useFela } from 'react-fela';
import { Layout, Col, Row, Card, Button, Modal, Spin } from 'antd';

import { ChartInstallation } from './ChartInstallation';

export interface IChartViewProps {
    data: any;
    styles?: any;
}

const { Content } = Layout;

const styles: any = {
    container: props => ({
        padding: '15px',
        overflowY: 'auto',
        background: '#fff',
        height: 'calc(100vh - 133px)',
    }),
};

export function ChartView(props: any) {
    const { data: { getRegistryChart, getRegistryChartReadme, getRegistryChartValues, getRegistryChartVersions }, loading } = props;

    const { css } = useFela(props);
    const [modal, setModal] = React.useState(false);

    const toggle = (status) => () => setModal(status);

    if (loading) {
        return (
            <Spin />
        );
    }

    if (!getRegistryChart && !loading) {
        return (
            <h1>Chart not found!</h1>
        );
    }

    return (
        <React.Fragment>
            <Content>
                <div className={css(styles.container)}>
                    <Row gutter={16}>
                        <Col md={16}>
                            <Card bodyStyle={{ wordWrap: 'break-word' }} loading={loading}>
                                <ReactMD source={getRegistryChartReadme} />
                            </Card>
                        </Col>
                        <Col md={8}>
                            {!loading ? (
                                <div>
                                    <Button
                                        block={true}
                                        size="large"
                                        type="primary"
                                        className="w-100 m-0"
                                        onClick={toggle(true)}
                                    >
                                        Install
                                    </Button>
                                    <br />
                                    <div>
                                        <h2>Versions</h2>
                                        {_.map(getRegistryChartVersions, (record, index) => (
                                            <div key={index}>
                                                {_.get(record, 'attributes.version')}
                                                {' - '}
                                                <strong>{moment(_.get(record, 'attributes.created')).format('ll')}</strong>
                                            </div>
                                        ))}
                                    </div>
                                    <br />
                                    <div>
                                        <h2>Maintainers</h2>
                                        {_.map(getRegistryChart.attributes.maintainers, (record, index) => (
                                            <div key={index}>
                                                <a href={`mailto:${record.email}`}>{record.name}</a>
                                            </div>
                                        ))}
                                    </div>
                                    <br />
                                    <div>
                                        <h2>Home</h2>
                                        <a href={_.get(getRegistryChart, 'attributes.home')}>
                                            {_.get(getRegistryChart, 'attributes.home')}
                                        </a>
                                    </div>
                                </div>
                            ) : <div className="text-center"><Spin /></div>}
                        </Col>
                    </Row>
                </div>
            </Content>
            <Modal width={780} onCancel={toggle(false)} visible={modal} footer={false}>
                <ChartInstallation values={getRegistryChartValues} versions={getRegistryChartVersions} chart={getRegistryChart} />
            </Modal>
        </React.Fragment>
    );
}
