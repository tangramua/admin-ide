import * as _ from 'lodash';
import * as React from 'react';
import Rx, { Subject } from 'rxjs';
import { Input, Form, Row, Col } from 'antd';
import { ProjectSourceProviders, ProjectSourceType } from '@adminide-stack/core';

import { AccountLinkButton } from '../AccountLinkButton';
import { GitServiceSelector } from '../GitServiceSelector';
import { PROVIDER_STATE, PROVIDERS_CONFIG } from '../../constants/route-constants';

const { Item } = Form;

export class SourceInputComponent extends React.Component<any, any> {
    public state = {
        value: {},
    };

    public static values(values, props) {
        const { type, provider } = props;

        const parameters = _.keys(values)
            .filter(key => _.includes(key, 'parameters_'))
            .reduce((acc, key) => _.assign(acc, {
                [key.replace('parameters_', '')]: values[key],
            }), {});

        const data = _.assign(values, { type, providers: provider, parameters });
        return _.pick(data, ['location', 'parameters', 'type', 'providers']);
    }

    get zip() {
        const { form, source } = this.props;

        return (
            <Item label="Zip URL">
                {form.getFieldDecorator('location',
                    {
                        initialValue: _.get(source, 'location'),
                        rules: [
                            {
                                type: 'url',
                                required: true,
                                message: 'Url to zip archive',
                            },
                        ],
                    },
                )(
                    <Input size="large" type="url" />,
                )}
            </Item>
        );
    }

    get url() {
        const { form, source } = this.props;

        return (
            <Row gutter={16}>
                <Col md={12}>
                    <Item label="Git URL">
                        {form.getFieldDecorator('location',
                            {
                                initialValue: _.get(source, 'location'),
                                rules: [{ required: true, type: 'url', message: 'Url to git repository' }],
                            },
                        )(
                            <Input size="large" type="url" />,
                        )}
                    </Item>
                </Col>
                <Col md={12}>
                    <Item label="Branch">
                        {form.getFieldDecorator('parameters_branch',
                            {
                                initialValue: 'master',
                                rules: [
                                    { required: true, message: 'Git branch is required' },
                                ],
                            },
                        )(
                            <Input size="large" type="text" />,
                        )}
                    </Item>
                </Col>
            </Row>
        );
    }

    get hosted() {
        const { renderer } = this.context;
        const { user, form, providers = {}, provider = ProjectSourceProviders.NONE } = this.props;

        const link = _.get(providers, provider.toLowerCase(), {});
        const linked = link && link.status === PROVIDER_STATE.LINKED;

        if (!link || link.status !== PROVIDER_STATE.LINKED) {
            return (
                <AccountLinkButton
                    link={link}
                    provider={provider}
                    config={PROVIDERS_CONFIG[provider]}
                />
            );
        }

        console.log('Link.Config: ', { link, linked });

        return (
            <GitServiceSelector
                user={user}
                link={link}
                linked={linked}
                provider={provider}
                onBranch={this.setBranch}
                onSelect={this.setRepositoryValues}
            />
        );
    }

    public setBranch = branch => {
        const { form } = this.props;
        form.setFieldsValue({
            parameters_branch: branch,
        });
    }

    public setRepositoryValues = repo => {
        const { form } = this.props;
        form.setFieldsValue({
            location: repo.clone.ssh,
            parameters_isPrivate: repo.private,
            parameters_httpsUrl: repo.clone.https,
        });
    }

    public render() {
        const { type, provider, form } = this.props;

        form.getFieldDecorator('type', { initialValue: type });
        form.getFieldDecorator('location', { initialValue: '' });
        form.getFieldDecorator('providers', { initialValue: provider });

        form.getFieldDecorator('parameters_httpsUrl');
        form.getFieldDecorator('parameters_isPrivate');

        return (
            <React.Fragment>
                {type === ProjectSourceType.ZIP ? this.zip : null}
                {type === ProjectSourceType.GIT && provider === ProjectSourceProviders.NONE ? this.url : null}
                {type === ProjectSourceType.GIT && provider !== ProjectSourceProviders.NONE ? this.hosted : null}
                <br/><br/><br/>
            </React.Fragment>
        );
    }
}

export const SourceInput = Form.create({
    onValuesChange: (props: any, changes, values: any) => props.onChange(SourceInputComponent.values(values, props)),
})(SourceInputComponent as any) as any;
