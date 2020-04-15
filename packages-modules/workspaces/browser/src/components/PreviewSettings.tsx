import * as _ from 'lodash';
import * as React from 'react';
import { compose } from 'redux';
import { Form, InputNumber, message, Button } from 'antd';

const { Item } = Form;

export class PreviewSettingsComponent extends React.Component<any, any> {
    private onSubmit = (e) => {
        e.preventDefault();
        const { form, onPreview } = this.props;

        form.validateFields((err) => {
            if (err) {
                message.error('Check form data');
                return;
            }

            if (onPreview) {
                onPreview(form.getFieldValue('port'));
            }
        });
    }
    public render() {
        const { form } = this.props;
        return (
            <Form onSubmit={this.onSubmit}>
                <Item label="Application port">
                    {form.getFieldDecorator('port', {
                        rules: [
                            { required: true, message: 'Application port is required' },
                        ],
                    })(
                        <InputNumber style={{ width: '100%' }} />,
                    )}
                </Item>
                <Button size="small" type="primary" htmlType="submit">Preview</Button>
            </Form>
        );
    }
}

export const PreviewSettings = compose(
    Form.create(),
)(PreviewSettingsComponent as any) as any;
