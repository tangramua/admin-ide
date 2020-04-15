
import * as ILogger from 'bunyan';
import { inject, injectable } from 'inversify';
import {
    IUserAccount, IUserAccountCreateRequest, IUserAccountUpdateRequest,
    IUserAccountRemoveRequest, IUserOrg, OrgUserRole,
} from '@adminide-stack/account';

import { TYPES } from '../constants';
import { IAccountService, IAccountRepository, IOrganizationService, ITeamService } from '../interfaces';
import { Types } from 'mongoose';

@injectable()
export class AccountService implements IAccountService {

    private logger: ILogger;

    constructor(
        @inject(TYPES.IAccountRepository)
        private accountRepository: IAccountRepository,

        @inject(TYPES.IOrganizationService)
        private organizationService: IOrganizationService,

        @inject(TYPES.ITeamService)
        private teamService: ITeamService,

        @inject('Logger')
        logger: ILogger,
    ) {
        this.logger = logger.child({ className: AccountService });

    }

    /**
     * Creates Account based on the Auth0 User details.
     * @param user
     */
    public async createDefaultAccount(user: any, optional?: { [key: string]: any }): Promise<IUserAccount> {
        const organization = await this.organizationService.createDefaultOrganization(user);
        const teamRecord = await this.teamService.createDefaultTeam(organization, user);
        const request: IUserAccountCreateRequest = {
            name: user.name,
            email: user.email,
            // emailVerified: user.emailVerified,
            defaultTeam: teamRecord.id,
            defaultOrg: organization.id,
            alias: [user.sub],
            ...optional,
        };
        return this.createAccount(request);
    }


    public createAccount(request: IUserAccountCreateRequest): Promise<IUserAccount> {
        return this.accountRepository.createAccount(request);
    }

    public updateAccount(request: IUserAccountUpdateRequest): Promise<IUserAccount> {
        return this.accountRepository.updateAccount(request);
    }
    public deleteAccount(request: IUserAccountRemoveRequest) {
        return this.accountRepository.deleteAccount(request);
    }

    public findAccountById(accountId: string) {
        return this.accountRepository.findAccountById(accountId);
    }

    public findAccountByUser(userId: string) {
        return this.accountRepository.findAccountByUser(userId);
    }
}
