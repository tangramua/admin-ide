import * as _ from 'lodash';
import { Form } from 'antd';
import * as React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { graphql } from 'react-apollo';

import { GetRegistryChartsDocument } from '@adminide-stack/core';
import { Dashboard, IChartCard } from '../components';

export function isDuplicateWorkspace(newWorkspace, existingWorkspaces = []) {
    return existingWorkspaces.some(workspace => newWorkspace.id === workspace.id);
}

const mapStateToProps = (state, ownProps) => ({});

export const DashboardComponent: React.ComponentClass<{}> = (
    compose<React.ComponentClass<{}>>(
        Form.create({}),
        connect(mapStateToProps),
        graphql(GetRegistryChartsDocument, {
            skip: ({ form }: any) => !form.getFieldValue('registry'),
            options: ({ form }: any) => ({
                variables: {
                    search: form.getFieldValue('search'),
                    registry: form.getFieldValue('registry'),
                },
                context: {
                    debounceKey: 'monocular-api-chart-query',
                },
            }),
        }),
    )(Dashboard));
