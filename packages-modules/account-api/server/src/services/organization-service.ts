
import * as ILogger from 'bunyan';
import { inject, injectable } from 'inversify';
import {
    IOrganization, IOrganizationCreateRequest, IOrganizationUpdateRequest,
    IOrganizationRemoveRequest, TierEnum, OrgUserRole,
} from '@adminide-stack/account';
import * as _ from 'lodash';
import { TYPES } from '../constants';
import { IOrganizationService, IOrganizationRepository } from '../interfaces';

@injectable()
export class OrganizationService implements IOrganizationService {

    private logger: ILogger;

    constructor(
        @inject(TYPES.IOrganizationRepository)
        private organizationRepository: IOrganizationRepository,
        @inject('Logger')
        logger: ILogger,
    ) {
        this.logger = logger.child({ className: OrganizationService });

    }

    /**
     * Organization name should be match '[a-z0-9]([-a-z0-9]*[a-z0-9])?(\.[a-z0-9]([-a-z0-9]*[a-z0-9])?)*'
     * DNS-1123 subdomain must consist of lower case alphanumeric characters, '-' or '.',
     * and must start and end with an alphanumeric character
     * @param user
     */
    public createDefaultOrganization(user): Promise<IOrganization> {
        const rawUsername = user.username || user.nickname || user.name;
        const username = _.kebabCase(rawUsername);

        const userId = user.user_id || user.sub;

        const request: IOrganizationCreateRequest = {
            name: username,
            tier: TierEnum.PERSONAL,
            orgMembers: [{
                userId,
                role: OrgUserRole.OWNER,
            }],
            namespace: username,
            billingLeaders: [userId],
        };
        return this.createOrganization(request);
    }
    public getOrganization(id: string): Promise<IOrganization> {
        return this.organizationRepository.findOrganizationById(id);
    }

    public createOrganization(organization: IOrganizationCreateRequest): Promise<IOrganization> {
        return this.organizationRepository.createOrganization(organization);
    }

    public getUserOrganizations(userId: string) {
        return this.organizationRepository.getUserOrganizations(userId);
    }

    public updateOrganization(organization: IOrganizationUpdateRequest): Promise<IOrganization> {
        return this.organizationRepository.updateOrganization(organization);
    }

    public removeOrganization(payload: IOrganizationRemoveRequest): Promise<boolean> {
        return this.organizationRepository.deleteOrganization(payload);
    }
}
