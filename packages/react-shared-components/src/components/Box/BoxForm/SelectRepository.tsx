import * as _ from 'lodash';
import { Alert } from 'antd';
import * as React from 'react';
import { useFela } from 'react-fela';

import { styles } from './styles';
import { RepositoryList } from './RepositoryItem';

export function SelectRepository(props: any) {
    const { css } = useFela(props);
    const { repositories, form, onSelect, onRepositoryUrl, search, data, onBranch, onSearch } = props;

    function isValidated() {
        return new Promise((resolve, reject) => {
            form.validateFields(['repository', 'url'], (err, values) => {
                if (err) {
                    reject(false);
                    return;
                }
                resolve(true);
                return;
            });
        });
    }


    const errorsList = form.getFieldsError(['repository', 'url']);
    const errors = _.filter(errorsList, error => !_.isEmpty(error));

    return (
        <div>
            <div className={css(styles.step.title as any)}>Select repository</div>
            {!_.isEmpty(_.filter(errors, error => !_.isEmpty(error))) ? (
                <Alert
                    type="error"
                    message={(
                        <div>
                            <strong>Errors: </strong>
                            <ul>
                                {_.map(errors, (error, index) => <li key={index}>{error}</li>)}
                            </ul>
                        </div>
                    )}
                />
            ) : null}
            <div className="">
                <RepositoryList
                    data={data}
                    form={form}
                    search={search}
                    type="repository"
                    onSearch={onSearch}
                    list={repositories}
                    onSelect={onSelect}
                    onBranch={onBranch}
                    onRepositoryUrl={onRepositoryUrl}
                    selected={repository => _.get(data, 'repository.url') === _.get(repository, 'url')}
                />
            </div>
        </div>
    );
}
