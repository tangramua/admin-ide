import * as _ from 'lodash';
import * as React from 'react';
import { message } from 'antd';
import { compose } from 'redux';
import { graphql } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';
import { OrganizationsDocument, TeamsDocument } from '@adminide-stack/core'
import { CreationModal } from './CreationModal';
import { Dashboard as DashboardComponent } from '../components/Dashboard';

class DashboardWrapper extends React.Component<any, any> {
    public state = {
        modal: false,
    };

    private toggleModal = status => e => this.setState({ modal: status });

    private onDone = data => {
        this.toggleModal(false)(null);
        message.success('Team created!');
    }

    private onError = err => message.error('Can not create team. Try later!');

    public render() {
        return (
            <React.Fragment>
                <CreationModal
                    {...this.props}
                    onDone={this.onDone}
                    onError={this.onError}
                    visible={this.state.modal}
                    onCancel={this.toggleModal(false)}
                />
                <DashboardComponent
                    {...this.props}
                    toggleModal={this.toggleModal}
                />
            </React.Fragment>
        );
    }
}

export const Dashboard = compose(
    graphql(OrganizationsDocument, {
        name: 'organizations$',
        props: ({ organizations$: { loading, error, organizations } }: any) => ({
            organizations: loading || error ? [] : organizations,
        }),
    }),
    graphql(TeamsDocument, {
        name: 'teams$',
    }),
)(DashboardWrapper as any);
