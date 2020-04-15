import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { useFela } from 'react-fela';
import { Form, Select, Button } from 'antd';

const { Item } = Form;

export function InvitationFormComponent(props) {
    const { css } = useFela(props);
    const { form, user, team, sendInvitations } = props;

    const onSubmit = e => {
        e.preventDefault();

        form.validateFields(() => {
            const { emails } = form.getFieldsValue();
            const request = {
                emails,
                teamId: _.get(team, '_id') || _.get(team, 'id'),
                invitedBy: _.get(user, '_id') || _.get(user, 'sub'),
            };

            sendInvitations(request)
                .then(() => form.resetFields())
                .catch(() => form.resetFields());
        });
    };

    return (
        <Form
            layout="inline"
            onSubmit={onSubmit}
            className={css(styles.form)}
        >
            <Item className={css(styles.grid.select)}>
                {form.getFieldDecorator('emails')(
                    <Select
                        mode="tags"
                        size="large"
                        placeholder="Emails for invitations..."
                        notFoundContent="Multiple emails"
                        className={css(styles.select)}
                    />,
                )}
            </Item>
            <Item className={css(styles.grid.button)}>
                <Button
                    size="large"
                    type="primary"
                    htmlType="submit"
                    className={css(styles.button)}
                >
                    Send Invitation
                </Button>
            </Item>
        </Form>
    );
}

const styles: any = {
    form: props => ({
        display: 'flex',
        flexDirection: 'row',
    }),
    select: props => ({
        width: '100% !important',
    }),
    button: props => ({
        margin: 0,
    }),
    grid: {
        select: props => ({
            flexGrow: 1,
            '& .ant-form-item-control-wrapper': {
                width: '100%',
            },
        }),
        button: props => ({
            margin: '0 !important',
            flexGrow: 0,
        }),
    },
};

export const InvitationForm: any = compose(
    Form.create(),
)(InvitationFormComponent as any);
