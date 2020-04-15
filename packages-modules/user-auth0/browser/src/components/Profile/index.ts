
import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Store } from '../../interfaces';
import { AuthAction as Action, logOut, fetchProfile } from '../../redux/actions';
import { ProfileComponent, IProfile } from './Profile';
import { userSelector, userProfileSelector } from '../../selectors';
import { logger } from '@cdm-logger/client';



function mapStateToProps(store: Store.Auth) {
    const user = userSelector(store);
    const profile = userProfileSelector(store);

    return { user, profile };
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
    return {
        onLogOut() {
            dispatch(logOut() as any);
        },
        fetchProfile() {
            logger.debug('fetchProfile to render profile component...');
            dispatch(fetchProfile() as any);
        },
    };
}

export default connect<any, any, any>(mapStateToProps, mapDispatchToProps)(ProfileComponent);
