import * as _ from 'lodash';
import { Select } from 'antd';
import * as React from 'react';

const { Option } = Select;

export function RegistrySelectorComponent({ loading, list, onChange, ...rest }: any) {
    const select = (value) => onChange(value);

    return (
        <Select loading={loading} onSelect={select} {...rest}>
            {_.map(list, registry => <Option value={registry._id} key={registry._id}>{registry.name}</Option>)}
        </Select>
    );
}
