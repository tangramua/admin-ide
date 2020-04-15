import * as _ from 'lodash';
import * as React from 'react';
import { Query } from 'react-apollo';
import FontAwesome from 'react-fontawesome';
import { Row, Col, Card, message } from 'antd';
import { ConnectAccount } from '@adminide-stack/react-shared-components';
import { GetGitProfilesDocument } from '@adminide-stack/core';

export interface IIntegrationProps {
    unlink?: any;
    styles?: any;
}

const { Meta } = Card;

const INTEGRATIONS = [
    { key: 'github', settings: null, icon: <FontAwesome name="github" />, title: 'GitHub' },
    { key: 'gitlab', settings: null, icon: <FontAwesome name="gitlab" />, title: 'GitLab' },
    { key: 'bitbucket', settings: null, icon: <FontAwesome name="bitbucket" />, title: 'Bitbucket' },
];

export function IntegrationComponent(props: IIntegrationProps) {
    const { unlink } = props;
    const list = _.chunk(INTEGRATIONS, 4);

    const onSettings = record => e => {
        e.preventDefault();
    };

    function onUnlink(provider, items) {
        const identity: any = _.find(items, { provider });
        if (identity) {
            unlink(provider, identity.id)
                .then(res => {
                    if (res.statusCode && res.statusCode !== 200) {
                        throw new Error('Invalid response');
                    }
                })
                .then(data => {
                    message.success('Account unlinked');
                    location.reload();
                })
                .catch(err => message.error('Cann not unlink your account...'));
        }
    }

    return (
        <Query query={GetGitProfilesDocument}>
            {({ loading, data }) => (
                !loading ? (
                    <div className={(styles.tab)}>
                        {_.map(list, (rows, indexRow) => (
                            (
                                <Row key={indexRow} gutter={8}>
                                    {_.map(rows, (record, indexCol) => (
                                        <Col key={indexCol} md={6}>
                                            <Card
                                                actions={_.includes(_.get(data, 'getGitProviders'), record.key)
                                                    ?
                                                    [
                                                        (
                                                            <span
                                                                key={1}
                                                                className={styles.settingsButton}
                                                                onClick={record.settings ? onSettings(record) : null}
                                                            >
                                                                Settings
                                                            </span>
                                                        ),
                                                        (
                                                            <span
                                                                key={2}
                                                                onClick={() => onUnlink(record.key, _.get(data, 'getGitProfiles'))}
                                                            >
                                                                Disconnect
                                                            </span>
                                                        ),
                                                    ]

                                                    :
                                                    [
                                                        (
                                                            <ConnectAccount
                                                                key={1}
                                                                redirectTo="/usermenu/account/integration"
                                                                render={({ connect }) => (
                                                                    <span onClick={connect}>Connect</span>
                                                                )}
                                                            />
                                                        ),
                                                    ]
                                                }
                                                cover={<div className={(styles.icon)}>{record.icon}</div>}
                                            >
                                                <Meta
                                                    title={<div className={(styles.title)}>{record.title}</div>}
                                                />
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            )
                        ))}
                    </div>
                ) : (
                        <Row gutter={8}>
                            {_.map(_.range(4), (record, indexCol) => (
                                <Col key={indexCol} md={6}>
                                    <Card
                                        loading={true}
                                        cover={(
                                            <div className={(styles.iconPlaceholder)}>
                                                <FontAwesome name="plug" />
                                            </div>
                                        )}
                                    />
                                </Col>
                            ))}
                        </Row>
                    )
            )}
        </Query>
    );
}

const styles: any = {
    tab: props => ({}),
    settingsButton: (props) => ({
        cursor: null,
    }),
    title: props => ({
        textAlign: 'center',
    }),
    icon: props => ({
        padding: '15px 0',
        textAlign: 'center',
        '& .fa': {
            fontSize: '100px',
        },
    }),
    iconPlaceholder: props => ({
        padding: '15px 0',
        textAlign: 'center',
        '& .fa': {
            fontSize: '75px',
        },
    }),
};
