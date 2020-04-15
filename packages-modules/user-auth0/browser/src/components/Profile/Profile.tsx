import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import * as PropTypes from 'prop-types';
import { IUser, IUserProfile } from '@adminide-stack/user-core';
import { Card, Input, Form, Checkbox, Button, Divider, Col, Row } from 'antd';
import { GeneralProfileSettings } from './GeneralProfileSettings';
import { ChangePassword } from './ChangePassword';

export namespace IProfile {
    export interface StateProps {
        user: IUser;
        profile: IUserProfile;
    }
    export interface StateDispatch {
        fetchProfile?: () => void;
        onLogOut?: any;
    }
    export type Props = StateProps & StateDispatch;
}

const { Item } = Form;
const { Meta } = Card;

export function ProfileComponent(props: any) {
    const { css } = useFela(props);
    const { user: { profile } } = props;

    return (
        <div className="pb-3">
            <Row gutter={16}>
                <Col md={12}>
                    <Card
                        cover={(
                            <div
                                className={css(styles.profile.picture)}
                                style={{
                                    backgroundImage: `url(${_.get(profile, 'picture')})`,
                                }}
                            />
                        )}
                    >
                        <Meta
                            title={_.get(profile, 'name')}
                            description={(
                                <span>
                                    {_.get(profile, 'nickname')}
                                    {' | '}
                                    <a href={`mailto:${_.get(profile, 'email')}`}>
                                        {_.get(profile, 'email')}
                                    </a>
                                </span>
                            )}
                        />
                        <Divider>Update Profile</Divider>
                        <GeneralProfileSettings profile={profile} {...props} />
                        <Divider>Change password</Divider>
                        <ChangePassword profile={profile} {...props} />
                    </Card>
                </Col>
                <Col md={12}>
                    <Card title="Notifications:">
                        <Item label="Email">
                            <Input defaultValue={_.get(profile, 'email')} size="large" type="text" />
                        </Item>
                        <div>
                            <Checkbox>On change account settings</Checkbox>
                        </div>
                        <div>
                            <Checkbox>On new pull requests</Checkbox>
                        </div>
                        <div>
                            <Button className="mt-3" type="primary">Save</Button>
                        </div>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

const styles: any = {
    profile: {
        picture: props => ({
            height: '300px',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }),
    },
};
