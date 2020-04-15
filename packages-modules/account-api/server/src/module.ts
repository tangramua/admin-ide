import * as _ from 'lodash';
import { interfaces } from 'inversify';
import { Feature } from '@common-stack/server-core';
import { IOrganizationService } from './interfaces';
import { organizationModule } from './containers';
import { schema, createResolversFunc } from './schema';
import { TYPES } from './constants';


const createServiceFunc = (container: interfaces.Container) =>
    ({
        teamService: container.get(TYPES.ITeamService),
        organizationService: container.get(TYPES.IOrganizationService),
        accountService: container.get(TYPES.IAccountService),
    });

export default new Feature({
    schema,
    createServiceFunc,
    createResolversFunc,
    createContainerFunc: [organizationModule],
});
