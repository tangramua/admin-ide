import * as _ from 'lodash';
import { Modal } from 'antd';
import * as React from 'react';
import { ModalProps } from 'antd/lib/modal';

import { TeamForm } from './TeamForm';

export interface ITeamCreationModalProps extends ModalProps {
    styles: any;
    create: any;
}

export function CreationModal(props: ITeamCreationModalProps) {
    return (
        <Modal footer={false} title="New team" {...props}>
            <TeamForm {...props} />
        </Modal>
    );
}
