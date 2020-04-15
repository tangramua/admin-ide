


import { ContainerModule, interfaces } from 'inversify';
import {
    IOrganizationRepository, IOrganizationService, ITeamRepository, ITeamService, IAccountRepository, IAccountService,
} from '../interfaces';
import { TYPES } from '../constants';
import { OrganizationService, TeamService, AccountService } from '../services';
import { OrganizationRepository, TeamRepository, AccountRepository } from '../store';
import { IMongoDBSettings } from '@common-stack/store-mongo';

export const organizationModule: (settings: any, pubsub) => interfaces.ContainerModule =
    (settings: IMongoDBSettings) => new ContainerModule((bind: interfaces.Bind) => {

        bind<ITeamRepository>(TYPES.ITeamRepository)
            .to(TeamRepository)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<ITeamService>(TYPES.ITeamService)
            .to(TeamService)
            .inSingletonScope()
            .whenTargetIsDefault();

        // ---------------------------

        bind<IOrganizationRepository>(TYPES.IOrganizationRepository)
            .to(OrganizationRepository)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<IOrganizationService>(TYPES.IOrganizationService)
            .to(OrganizationService)
            .inSingletonScope()
            .whenTargetIsDefault();


        // ------------------------

        bind<IAccountRepository>(TYPES.IAccountRepository)
            .to(AccountRepository)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<IAccountService>(TYPES.IAccountService)
            .to(AccountService)
            .inSingletonScope()
            .whenTargetIsDefault();
    });

