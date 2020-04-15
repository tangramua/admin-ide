import * as _ from 'lodash';
import * as React from 'react';
import { Query } from 'react-apollo';

import { OrganizationsDocument } from '@adminide-stack/core';

export function HOCOrganizations({ children, ...params }) {
    return (
        <Query query={OrganizationsDocument}>
            {({ data, ...props }) => children({ ...props, ...params, organizations: _.get(data, 'organizations') })}
        </Query>
    );
}
