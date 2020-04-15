import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Icon, Button, Form } from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import { EmptyTab } from '@adminide-stack/react-shared-components';
import { CollaboratorsModal } from './CollaboratorsModal';

export namespace ICollaborators {
    export interface StateProps {
        list?: any[];
        styles?: any;
    }

    export type Props = StateProps & FormComponentProps;
}

export function CollaboratorsComponent(props: any) {
    const { list } = props;

    const { css } = useFela(props);
    const [modal, setModal] = React.useState(false);

    const toggle = status => e => setModal(status);


    return (
        <Form className={css(styles.tab)}>
            {_.isEmpty(list)
                ? (
                    <EmptyTab
                        icon={<Icon style={styles.icon} type="usergroup-add" />}
                        text="Here you can manage collaborators to your projects"
                        button={(
                            <Button onClick={toggle(true)} type="primary">
                                <Icon type="plus" />
                                    Add Colaborators
                                </Button>
                        )}
                    />
                )
                : null}

            <CollaboratorsModal
                visible={modal}
                onOk={toggle(false)}
                onCancel={toggle(false)}
            />
        </Form>
    );
}

const styles = {
    icon: {
        fontSize: 100,
    },
    tab: props =>
        _.isEmpty(props.list)
            ? ({ padding: '100px 0' })
            : ({}),
};
