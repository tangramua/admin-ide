import * as _ from 'lodash';
import * as React from 'react';
import { Query } from 'react-apollo';
import FontAwesome from 'react-fontawesome';
import { Row, Col, Card, message, Spin } from 'antd';
import { ConnectAccount } from '@adminide-stack/user-auth0-browser';



// export interface IIntegrationProps {
//     unlink?: any;
//     styles?: any;
// }

const { Meta } = Card;

const INTEGRATIONS = [
    { key: 'github', settings: null, icon: <i className="fab fa-github"></i>, title: 'GitHub' },
    { key: 'gitlab', settings: null, icon: <i className="fab fa-gitlab"></i>, title: 'GitLab' },
    { key: 'bitbucket', settings: null, icon: <i className="fab fa-bitbucket"></i>, title: 'Bitbucket' },
];

export function IntegrationComponent(props) {
    console.log(props)
    const { unlink, providerData, profileData } = props;
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
                    console.log('data:', data)
                    message.success('Account unlinked');
                    location.reload();
                })
                .catch(err => message.error('Cann not unlink your account...'));
        }
    }

    return (
        providerData ? 
            (<div className={(styles.tab)}>
                {_.map(list, (rows, indexRow) => (
                    (
                         <Row key={indexRow} gutter={8}>
                            {_.map(rows, (record, indexCol) => (
                                <Col key={indexCol} md={6}>
                                    <Card
                                        actions={providerData[record.title.toLocaleLowerCase()].user
                                            ?
                                                [
                                                    (   providerData[record.title.toLocaleLowerCase()].status === 'EXPIRED' ?
                                                        (<span
                                                            key={1}
                                                            className={styles.settingsButton}
                                                            //onClick={() => {}}
                                                        >
                                                            Reconnect
                                                        </span>)
                                                        :
                                                        (<span
                                                            key={1}
                                                            className={styles.settingsButton}
                                                            onClick={record.settings ? onSettings(record) : null}
                                                        >
                                                            Settings
                                                        </span>)
                                                    ),
                                                    (
                                                        <span
                                                            key={2}
                                                            onClick={() => onUnlink(record.key, _.get(profileData, 'getGitProfiles'))}
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
                                        cover={<div className={(styles.icon)} style={{
                                            padding: '15px 0',
                                            textAlign: 'center',
                                            fontSize: '50px'
                                        }}>{record.icon}</div>}
                                    >
                                        <Meta
                                            title={<div className={(styles.title)}>{record.title}</div>}
                                        />
                                        <Meta
                                            title={<div style={{fontSize: '12px'}}>
                                                    Status: {providerData[record.title.toLocaleLowerCase()].status}
                                                </div>}
                                        />
                                        {providerData[record.title.toLocaleLowerCase()].user ? 
                                            (<Meta
                                                title={<div style={{fontSize: '12px'}}>
                                                        User: {providerData[record.title.toLocaleLowerCase()].user}
                                                    </div>}
                                            />) : null
                                        }
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )
                ))}
            </div>) : <Spin />
        
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
    details: props => ({
        fontSize: '12px',
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
