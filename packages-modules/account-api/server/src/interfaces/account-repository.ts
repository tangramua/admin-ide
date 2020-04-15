
import {
    IUserAccount, IUserOrg, IUserAccountCreateRequest,
    IUserAccountUpdateRequest, IUserAccountRemoveRequest,
} from '@adminide-stack/account';
/**
 * Repository for Accounts, preferbly No Sql
 */
export interface IAccountRepository {
    /**
     * Creates a new organization
     */
    createAccount(account: IUserAccountCreateRequest): Promise<IUserAccount>;
    /**
     * Find a workspace
     */
    findAccountById(id: string): Promise<IUserAccount>;
    /**
     * Find a workspace
     */
    findAccountByUser(id: string): Promise<IUserAccount>;
    /**
     * Updates a existing organization
     */
    updateAccount(account: IUserAccountUpdateRequest): Promise<IUserAccount>;
    /**
     * Removes a existing organization
     */
    deleteAccount(account: IUserAccountRemoveRequest): Promise<boolean>;

}
