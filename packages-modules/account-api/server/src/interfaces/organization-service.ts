import { IOrganization, IOrganizationCreateRequest, IOrganizationUpdateRequest, IOrganizationRemoveRequest } from '@adminide-stack/account';

export interface IOrganizationService {
    getOrganization(id: string): Promise<IOrganization>;

    createDefaultOrganization(user): Promise<IOrganization>;

    getUserOrganizations(userId: string): Promise<IOrganization[]>;

    createOrganization(workspace: IOrganizationCreateRequest): Promise<IOrganization>;

    updateOrganization(workspace: IOrganizationUpdateRequest): Promise<IOrganization>;

    removeOrganization(workspace: IOrganizationRemoveRequest): Promise<boolean>;
}
