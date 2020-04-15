import * as _ from 'lodash';
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Input, Form, Row, Col } from 'antd';
import { ProjectSourceProviders, ProjectSourceType } from '@adminide-stack/core';

import { AccountLinkButton } from './AccountLinkButton';
import { GitServiceSelector } from './GitServiceSelector';
import { PROVIDER_STATE, PROVIDERS_CONFIG } from '../constants';

const { Item } = Form;
const { TextArea } = Input;

const styles = {
    table: props => ({
        height: '300px',
        overflowY: 'auto',
    }),
};

export class ProjectSource extends React.Component<any, any> {
    public field(field) {
        const { scope } = this.props;
        return scope ? `${scope}.${field}` : field;
    }

    get zip() {
        const { form, source } = this.props;

        return (
            <Item label="Zip URL">
                {form.getFieldDecorator(
                    this.field('location'),
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
                        {form.getFieldDecorator(
                            this.field('location'),
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
                        {form.getFieldDecorator(
                            this.field('parameters.branch'),
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

    public onSelectRepo = (location) => {
        this.props.form.setFieldsValue({ [this.field('location')]: location });
    }

    public onSelectBranch = (branch) => {
        this.props.form.setFieldsValue({ [this.field('parameters.branch')]: branch });
    }

    public selectRepo = repo => {
        this.props.form.setFieldsValue({ [this.field('location')]: repo.clone.ssh });
        this.props.form.setFieldsValue({ [this.field('parameters.isPrivate')]: repo.private });
        this.props.form.setFieldsValue({ [this.field('parameters.httpsUrl')]: repo.clone.https });
    }

    public selectBranch = branch => this.props.form.setFieldsValue({ [this.field('parameters.branch')]: branch });

    get hosted() {
        const { renderer } = this.context;
        const { user, form, providers = {}, provider = ProjectSourceProviders.NONE } = this.props;

        const link = _.get(providers, `getGitProvidersState.${provider.toLowerCase()}`, {});
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
                onSelect={this.selectRepo}
                onBranch={this.selectBranch}
            />
        );
    }

    public render() {
        const { form, scope, type, provider = ProjectSourceProviders.NONE } = this.props;

        form.getFieldDecorator(this.field('type'), { initialValue: type });
        form.getFieldDecorator(this.field('location'), { initialValue: '' });
        form.getFieldDecorator(this.field('providers'), { initialValue: provider });
        form.getFieldDecorator(this.field('parameters.branch'), { initialValue: 'master' });
        form.getFieldDecorator(this.field('parameters.httpsUrl'), { initialValue: '' });
        form.getFieldDecorator(this.field('parameters.isPrivate'), { initialValue: false });

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
