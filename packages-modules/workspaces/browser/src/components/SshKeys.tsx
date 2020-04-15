import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { Query, graphql } from 'react-apollo';
import Clipboard from 'react-cdm-clipboard.js';
import { Card, Row, Col, Icon, message } from 'antd';
import { ProfileDocument } from '@adminide-stack/core';
import gql from 'graphql-tag';

const getSshKey = gql`
query getSshKey($id: ID!) {
  getSshKey(id: $id) {
    id
    name
    key
    pubKey
    keyType
    createdAt
  }
}`;


export function SshKeysComponent(props: any) {
  let key, pubKey;

  const { profile: { profile } } = props;
  const notify = msg => () => message.success(msg);

  return (
    <Query query={getSshKey} variables={{ id: _.get(profile, 'sub') }}>
      {({ data, loading }) => (
        <div>
          <Row gutter={16}>
            <Col key={1} md={12}>
              <Card
                loading={loading}
                title={(
                  <Clipboard
                    component="div"
                    style={styles.copy}
                    onClick={notify('Copied!')}
                    data-clipboard-text={_.get(data, 'getSshKey.key', '')}
                  >
                    <Icon type="copy" />{' '}
                    <span>Private Key</span>
                  </Clipboard>
                )}
              >
                <pre ref={el => { key = el; }}>
                  {_.get(data, 'getSshKey.key', <small>Workspace has not private ssh key...</small>)}
                </pre>
              </Card>
            </Col>
            <Col key={2} md={12}>
              <Card
                loading={loading}
                title={(
                  <Clipboard
                    component="div"
                    style={styles.copy}
                    onClick={notify('Copied!')}
                    data-clipboard-text={_.get(data, 'getSshKey.pubKey', '')}
                  >
                    <Icon type="copy" />{' '}
                    <span>Public Key</span>
                  </Clipboard>
                )}
              >
                <div style={styles.publicKey} ref={el => { pubKey = el; }}>
                  {_.get(data, 'getSshKey.pubKey', <small>Workspace has not public ssh key...</small>)}
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      )}
    </Query>
  );
}

const styles: any = {
  copy: ({
    cursor: 'pointer',
  }),
  publicKey: ({
    wordWrap: 'break-word',
  }),
};

export const SshKeys: any = compose(
  graphql(ProfileDocument, { name: 'profile', options: props => ({ ssr: false }) }),
)(SshKeysComponent);
