import * as _ from 'lodash';
import { Button } from 'antd';
import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import { ConnectAccount } from '@adminide-stack/react-shared-components';

import { PROVIDER_STATE, LINKING_BUTTONS } from '../constants';

export const Icon = ({ icon }) => !icon ? null : <FontAwesome name={icon} />;

export function AccountLinkButton({ link, config = {} as any }: any) {
    const btn = LINKING_BUTTONS[link.status] || LINKING_BUTTONS[PROVIDER_STATE.BROKEN];

    const linkingView = ({ connect }: any) => {
        return (
            <div>
                {config.description ? <p>{config.description}</p> : null}
                <Button
                    size="large"
                    type={btn.type}
                    className="mb-0"
                    onClick={connect}
                >
                    <i className={`${config.icon} mr-2`} />
                    {' '}
                    {btn.text}
                </Button>
            </div>
        );
    };

    return (
        <ConnectAccount render={linkingView} redirectTo="/create-workspace" />
    );
}
