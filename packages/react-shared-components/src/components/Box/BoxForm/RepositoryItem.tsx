import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import { URLRepo } from '../../Git/URLRepo';
import { Switch, Col, Row, Input, Select, Avatar, Tag, Form } from 'antd';

import { styles } from './styles';

const { Item } = Form;

export function RepositoryList({ onSearch, data, form, onBranch, onRepositoryUrl, search = [], list, ...props }) {
    const { switcher, url } = data;
    const { css } = useFela(props);
    const repositories = _.size(search) ? search : list;

    return (
        <table className={`table table-bordered table-hover`}>
            <thead>
                <tr>
                    <td>
                        <Col md={20}>
                            {switcher ? (
                                <URLRepo
                                    url={url}
                                    form={form}
                                    values={data}
                                    inputClassName={styles.url}
                                    onBranch={value => onBranch(value)}
                                    onRepositoryUrl={value => onRepositoryUrl(value)}
                                    onRepositoryObject={value => props.onSelect(value)}
                                    selectClassName={css(styles.items.repository.branch)}
                                />
                            ) : (
                                    <Item>
                                        <Input
                                            type="text"
                                            className={css(styles.items.repository.control)}
                                            value={(switcher ? data.url : data.search) || ''}
                                            placeholder={switcher ? 'Repository URL' : 'Search...'}
                                            onChange={e => switcher ? onRepositoryUrl(e.target.value) : onSearch(e.target.value)}
                                        />
                                    </Item>
                                )}
                        </Col>
                        <Col md={4}>
                            <div className="pull-right">
                                <Switch
                                    checkedChildren={<small>URL</small>}
                                    unCheckedChildren={<small>Repo</small>}
                                    className={css(styles.items.repository.switcher)}
                                    onChange={switcher => form.setFieldsValue({ switcher })}
                                />
                            </div>
                        </Col>
                    </td>
                </tr>
            </thead>
            {!data.switcher ? (
                <tbody>
                    {_.map(repositories, (item, index) =>
                        <RepositoryItem onBranch={onBranch} key={index} index={index} form={form} {...props as any} item={item} />)}
                </tbody>
            ) : null}
        </table>
    );
}

function Repository({ form, item, selected, index, onSelect, onBranch, ...props }) {
    const isSelected = selected && selected(item);
    const branches = _.map(_.get(item, 'refs.edges'), 'node');

    const { css } = useFela(props);

    return (
        <tr key={index} className={`${isSelected ? 'active' : ''}`} onClick={_ => onSelect(item)}>
            <td>
                <Avatar shape="square" src={_.get(item.owner, 'avatarUrl')} />
                {' '}
                {item.name}
                {item.isPrivate ? (
                    <Tag color="red">Private</Tag>
                ) : null}
                <div className="pull-right">
                    {form.getFieldDecorator(`_branch[${index}]`, { initialValue: 'master' })(
                        (
                            <Select
                                className={css(styles.items.repository.branch)}
                                onChange={value => {
                                    if (isSelected) {
                                        onBranch(value);
                                    }
                                }}
                            >
                                {_.map(branches, (branch, optionKey) =>
                                    <Select.Option key={optionKey} value={branch.name}>{branch.name}</Select.Option>)}
                            </Select>
                        ),
                    )}
                </div>
            </td>
        </tr>
    );
}

function Branch({ item, selected, onSelect, ...props }) {
    return (
        <tr className={`${selected && selected(item) ? 'active' : ''}`} onClick={_ => onSelect(item)}>
            <td>
                <img src={_.get(item, 'owner.avatar_url')} />
                {item.name}
            </td>
        </tr>
    );
}

export function RepositoryItem({ type, index, item, form, onSelect, selected, jumpToStep, ...props }) {
    switch (type) {
        case 'branch': return <Branch index={index} form={form} item={item} onSelect={onSelect} selected={selected} />;
        default: return <Repository index={index} form={form} {...props as any} item={item} onSelect={onSelect} selected={selected} />;
    }
}
