import * as _ from 'lodash';
import * as React from 'react';
import { useFela } from 'react-fela';
import { Card, Divider } from 'antd';
import { IUserProfile } from '@adminide-stack/core';
import { ChangePassword } from './ChangePassword';
import { GeneralProfileSettings, IGeneralProfileSettings } from './GeneralProfileSettings';

const { Meta } = Card;

export interface IProfileCard extends IGeneralProfileSettings {
  profile: IUserProfile;
}
export const ProfileCard: React.FC<IProfileCard> = ({ profile, ...props }) => {
  const { css } = useFela(props);

  return (
    <Card
      cover={(
        <div
          className={css(styles.picture)}
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
  );
};

const styles = {
  picture: props => ({
    height: '300px',
    backgroundSize: '100%',
    backgroundPosition: 'top center',
  }),
};
