import * as _ from 'lodash';
import * as React from 'react';
import { Modal, Select, Form } from 'antd';

const { Item } = Form;

export function CollaboratorsModal(props) {
    return (
        <Modal {...props} title="Invite Collaborators">
            <Item label="Email / Username">
                <Select
                    mode="tags"
                    tokenSeparators={[',']}
                    style={{ width: '100%' }}
                    dropdownClassName="d-none"
                />
            </Item>
        </Modal>
    );
}
