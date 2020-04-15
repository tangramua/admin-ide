import { compose, bindActionCreators } from 'redux';
import { IntegrationComponent } from './Integration';
import { graphql } from 'react-apollo';
import { createSelector } from 'reselect';
import { GetGitProvidersStateDocument } from '@adminide-stack/core';
import { unlink } from '@adminide-stack/user-auth0-browser';
import { connect } from 'react-redux';
import { GetGitProfilesDocument } from '@adminide-stack/core';

const mapDispatchToProps = dispatch => bindActionCreators({ unlink }, dispatch);

export default compose(
    connect(null, mapDispatchToProps),
    graphql(GetGitProvidersStateDocument, {
        props: createSelector(
            ({ ownProps, data }) => data,
            (data) => {
                return {
                    providerData: (data as any).getGitProvidersState,
                };
            }),
    }),
    graphql(GetGitProfilesDocument, {
        props: createSelector(
            ({ ownProps, data }) => data,
            (data) => {
                return {
                    profileData: (data as any),
                };
            }),
    })
)(IntegrationComponent);
