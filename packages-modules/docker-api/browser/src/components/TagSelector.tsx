import * as _ from 'lodash';
import * as React from 'react';
import { Select } from 'antd';

const { Option } = Select;

export function TagSelectorComponent({ tags, onChange }: any) {
    return (
        <Select defaultValue="latest" onSelect={onChange}>
            {_.map(tags, tag => <Option key={tag}>{tag}</Option>)}
        </Select>
    );
}
