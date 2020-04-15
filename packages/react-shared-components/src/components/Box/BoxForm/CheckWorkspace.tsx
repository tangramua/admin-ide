import * as _ from 'lodash';
import { Button } from 'antd';
import * as React from 'react';

import { styles } from './styles';
import { useFela } from 'react-fela';

const styling = styles.items.check;

export function CheckWorkspace({ data, onSubmit, ...props }) {
    const { css } = useFela(props);
    const submit = () => onSubmit();

    return (
        <div className="BuildMethodWrapper">
            <div className="">Workspace</div>
            <div className="StepBody">
                <div className="Repository">
                    <img src={_.get(data, 'repository.owner.avatar_url')} />
                    <div className="">{_.get(data, 'repository.name')} / {_.get(data, 'branch')}</div>
                </div>
                <div className="row">
                    <table className={`table ${css(styling.table)}`}>
                        <tbody>
                        <tr key={1}>
                            <td><strong>Name</strong></td>
                            <td>{_.get(data, 'workspace.name')}</td>
                        </tr>
                        <tr key={2}>
                            <td><strong>CPU</strong></td>
                            <td>{_.get(data, 'workspace.cpu')}</td>
                        </tr>
                        <tr key={3}>
                            <td><strong>RAM</strong></td>
                            <td>{_.get(data, 'workspace.ram')}</td>
                        </tr>
                        <tr key={4}>
                            <td><strong>HDD</strong></td>
                            <td>{_.get(data, 'workspace.hdd')}</td>
                        </tr>
                        <tr key={5}>
                            <td><strong>Language</strong></td>
                            <td>{_.get(data, 'workspace.language')}</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className="text-center">
                    <Button
                        size="large"
                        type="primary"
                        onClick={submit}
                        className={css(styling.button)}
                    >
                        Create
                    </Button>
                </div>
            </div>
        </div>
    );
}
