import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import { RouteProps } from 'react-router';
import { NavLink } from 'react-router-dom';
import { Card, Tag, Icon, Col, Row } from 'antd';

const { Meta } = Card;

export namespace IChartCard {

    export interface ComponentProps {
        chart: any;
        onView: any;
        styles?: any;
        loading: boolean;
        onInstall: any;
        matchPath: string;
    }
    export type Props = RouteProps & ComponentProps;
}

const styles: any = {
    cover: props => ({
        minHeight: 200,
        display: 'flex',
        padding: '10px 0',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    }),
    card: props => ({
        borderRadius: '9px',
    }),
    text: props => ({
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    }),
};

export function ChartCard(props) {
    const { css } = useFela(props);
    const { chart, loading, matchPath, onInstall, registry } = props;

    const install = (input: any) => () => onInstall(input);


    return (
        <Card
            loading={loading}
            className={css(styles.card)}
            cover={loading ? null : (
                <div className={css(styles.cover)}>
                    {chart.icon
                        ? <img src={chart.icon} />
                        : <Icon style={{ fontSize: 75 }} type="file-text" />}
                </div>
            )}
            actions={loading ? null : [
                <span key={1} onClick={install(chart)}>Install</span>,
                (
                    <span key={2}>
                        <NavLink
                            key={'chart'}
                            to={`${matchPath}/${registry}/${_.get(chart, 'attributes.repo.name')}/${_.get(chart, 'attributes.name')}`}
                        >
                            <span>View</span>
                        </NavLink>
                    </span>
                ),
            ]}
        >
            <Meta
                title={(
                    <Row gutter={8}>
                        <Col className={css(styles.text)} span={12}>
                            {_.get(chart, 'attributes.name')}
                        </Col>
                        <Col className={css(styles.text)} span={12}>
                            <Tag color="blue">
                                {_.get(chart, 'relationships.latestChartVersion.data.app_version') || 'not provided'}
                            </Tag>
                        </Col>
                    </Row>
                )}
                description={(
                    <div className={css(styles.text)}>
                        {_.get(chart, 'attributes.description')}
                    </div>
                )}
            />
        </Card>
    );
}
