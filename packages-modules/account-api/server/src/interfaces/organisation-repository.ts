
import { IOrganization, IOrganizationCreateRequest, IOrganizationUpdateRequest, IOrganizationRemoveRequest } from '@adminide-stack/account';
/**
 * Repository for Organization, preferbly No Sql
 */
export interface IOrganizationRepository {
    /**
     * Creates a new organization
     */
    createOrganization(organization: IOrganizationCreateRequest): Promise<IOrganization>;
    /**
     * Find a workspace
     */
    findOrganizationById(id: string): Promise<IOrganization>;
    /**
     * Updates a existing organization
     */
    updateOrganization(organization: IOrganizationUpdateRequest): Promise<IOrganization>;
    /**
     * Removes a existing organization
     */
    deleteOrganization(organization: IOrganizationRemoveRequest): Promise<boolean>;

    getUserOrganizations(userId: string): Promise<IOrganization[]>;
}
