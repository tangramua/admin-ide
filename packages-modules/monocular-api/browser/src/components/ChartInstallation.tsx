import Flat from 'flat';
import * as _ from 'lodash';
import * as Yaml from 'yamljs';
import * as React from 'react';
import { compose } from 'redux';
import Highlight from 'react-highlight';
import { Form, Input, Button, Select, AutoComplete } from 'antd';

const { Item } = Form;
const { Group } = Input;
const { Option } = Select;

class ChartInstallationComponent extends React.Component<any, any> {
    public onSubmit = (e) => {
        e.preventDefault();
        const { form, onInstall } = this.props;
        form.validateFields((err) => {
            if (err) {
                return;
            }
            const values = form.getFieldsValue();
            const data: { type: string; chartName: string; repository: string; chartVersion: string; variables?: any } = _.pick(values, [
                'type',
                // we don't need default valuesFile. Anything updated only needed
                // 'valuesFile',
                'chartName',
                'repository',
                'releaseName',
                'chartVersion',
            ]);
            data.variables = _.values(values.env);

            onInstall(data);
        });
    }

    public state = {
        values: false,
    };

    public columns = [
        {
            name: 'Field',
            render: () => <AutoComplete dataSource={_.keys(Flat(Yaml.parse(this.props.values) || {}))} />,
        },
        {
            name: 'Value',
            render: () => <Input type="text" />,
        },
    ];

    private alphanumeric(inputtxt) {
        let letterNumber = /^[0-9a-z]+$/;
        if (inputtxt.value.match(letterNumber)) {
            return true;
        } else {
            return false;
        }
    }
    public render() {
        const { values } = this.state;
        const { form, chart, stack } = this.props;

        form.getFieldDecorator('type', { initialValue: 'MONOCULAR_STACK' });
        form.getFieldDecorator('valuesFile', { initialValue: _.get(chart, 'values') });
        form.getFieldDecorator('chartName', { initialValue: _.get(chart, 'attributes.name') });
        form.getFieldDecorator('repository', { initialValue: _.get(chart, 'attributes.repo.name') });
        form.getFieldDecorator('variables', { initialValue: _.range(_.get(stack, 'variables', [-1]).length) });

        // overrideSetVariables

        return (
            <Form onSubmit={this.onSubmit}>
                <Item label="Release name">
                    {form.getFieldDecorator('releaseName', {
                            initialValue: _.get(stack, 'releaseName'),
                            normalize: (value) => _.kebabCase(value),
                            rules: [{ required: true, message: 'Release name is required' }],
                        })(
                        <Input size="large" type="text" />,
                    )}
                </Item>
                <Item label="Chart version">
                    {form.getFieldDecorator('chartVersion', {
                        initialValue: _.get(stack, 'chartVersion'),
                        rules: [{
                            required: true,
                            message: 'Chart version is required',
                        }],
                    })(
                        (
                            <Select size="large">
                                {_.map(this.props.versions, 'attributes').map(record => (
                                    <Option key={record.version} value={record.version}>{record.version}</Option>
                                ))}
                            </Select>
                        ),
                    )}
                </Item>
                <div>
                    <h4>Chart values</h4>
                    {_.map(form.getFieldValue('variables'), (item, index) => (
                        <Group size="large" compact={true} className="mb-3">
                            {form.getFieldDecorator(`env[${item}].field`, {
                                initialValue: _.get(stack, `variables[${item}].field`),
                            })(
                                (
                                    <AutoComplete
                                        size="large"
                                        style={{ width: '40%' }}
                                        dataSource={_.keys(Flat(Yaml.parse(this.props.values) || {}))}
                                    />
                                ),
                            )}
                            {form.getFieldDecorator(`env[${item}].value`, {
                                initialValue: _.get(stack, `variables[${item}].value`),
                            })(
                                <Input size="large" style={{ width: '40%' }} />,
                            )}
                            <Button
                                size="large"
                                type="danger"
                                className="m-0"
                                style={{ width: '20%' }}
                                onClick={() =>
                                    form.setFieldsValue({
                                        variables: form
                                            .getFieldValue('variables')
                                            .filter(varIndex => varIndex !== item)
                                    })}
                            >
                                Remove
                            </Button>
                        </Group>
                    ))}
                    <div className="text-right">
                        <a
                            href="javascript:void(0)"
                            onClick={() => this.setState({ values: !values })}
                        >
                            {values ? 'Hide' : 'View'} values.yml file
                        </a>
                        {' | '}
                        <a
                            href="javascript:void(0)"
                            onClick={() =>
                                form.setFieldsValue({
                                    variables: form
                                        .getFieldValue('variables')
                                        .concat([Math.random()])
                                })
                            }
                        >
                            Add value
                        </a>
                    </div>
                    {values ? (
                        <Highlight style={styles.code} language="yaml">
                            <pre>{this.props.values}</pre>
                        </Highlight>
                    ) : null}
                </div>
                <div className="text-center">
                    <Button
                        size="large"
                        type="primary"
                        className="m-0"
                        onClick={e => this.onSubmit(e)}
                    >
                        Submit
                    </Button>
                </div>
            </Form>
        );
    }
}

const styles: any = {
    code: props => ({
        height: '300px',
        overflowY: 'auto',
        overflowX: 'auto',
    }),
};

export const ChartInstallation: any = compose(
    Form.create<any>({
        mapPropsToFields: ({ stack }) => ({
            releaseName: { value: _.get(stack, 'releaseName') },
            chartVersion: { value: _.get(stack, 'chartVersion') },
            env: { value: _.values(_.get(stack, 'variables', [{}])) },
            variables: { value: _.keys(_.get(stack, 'variables', [-1])) },
        }),
    }),
)(ChartInstallationComponent as any);
