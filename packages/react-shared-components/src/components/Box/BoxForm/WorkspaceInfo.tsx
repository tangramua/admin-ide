import * as _ from 'lodash';
import * as React from 'react';
import { connect, useFela } from 'react-fela';
import { Alert, Form, Input, InputNumber, Select } from 'antd';

import { styles } from './styles';

const { Item } = Form;
const { Option } = Select;
const Languages = ['Java', 'JavaScript', 'Ruby', 'Python', 'React', 'Angular'];

const validationState = function (field, form) {
    const errors = form.getFieldError(field);
    const touched = form.isFieldTouched(field);

    return errors ? 'error' :
        touched ? 'success' : null;
};

function hasErrors(errors) {
    return !_.isEmpty(_.values(errors).filter(value => !!value));
}

export function WorkspaceInfo(props: any) {
    const { css } = useFela(props);

    const { onChange, form, data } = props;
    const errors = form.getFieldError('workspace');

    function isValidated() {
        return new Promise((resolve, reject) => {
            form.validateFields(['workspace'], (err, values) => {
                if (err) {
                    reject(false);
                    return;
                }
                resolve(true);
                return;
            });
        });
    }

    return (
        <div>
            <div key={1} className={css(styles.step.title)}>Workspace Info</div>
            {hasErrors(errors) ? (
                <Alert
                    type="error"
                    message={(
                        <div key={2}>
                            <strong>Errors: </strong>
                            <ul>
                                {_
                                    .filter(errors, err => !!err)
                                    .map(error => <li>{Array.isArray(error) ? error.join(', ') : error}</li>)
                                }
                            </ul>
                        </div>
                    )}
                />
            ) : null}
            <div>
                <Item label="Workspace name">
                    <Input
                        type="text"
                        placeholder="Workspace name"
                        className={css(styles.form.input)}
                        value={_.get(data, 'workspace.name')}
                        onChange={onChange('workspace.name', e => _.get(e, 'target.value', ''))}
                    />
                </Item>
                <Item label="Workspace CPU">
                    <InputNumber
                        className={css(styles.form.input)}
                        placeholder="Workspace CPU time"
                        value={_.get(data, 'workspace.cpu')}
                        onChange={onChange('workspace.cpu')}
                    />
                </Item>
                <Item label="Workspace RAM">
                    <InputNumber
                        className={css(styles.form.input)}
                        placeholder="Workspace RAM, GB's"
                        value={_.get(data, 'workspace.ram')}
                        onChange={onChange('workspace.ram')}
                    />
                </Item>
                <Item label="Workspace HDD">
                    <InputNumber
                        className={css(styles.form.input)}
                        placeholder="Workspace HDD, GB's"
                        value={_.get(data, 'workspace.hdd')}
                        onChange={onChange('workspace.hdd')}
                    />
                </Item>
                <Item label="Language / Framework">
                    <Select
                        className={css(styles.form.input)}
                        value={_.get(data, 'workspace.language')}
                        onChange={onChange('workspace.language')}
                    >
                        {_.map(Languages, language => <Option value={language}>{language}</Option>)}
                    </Select>
                </Item>
            </div>
        </div>
    );
}
