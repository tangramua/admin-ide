
import { IUserAccount, IUserOrg, IUserAccountCreateRequest,
    IUserAccountUpdateRequest, IUserAccountRemoveRequest } from '@adminide-stack/account';
/**
 * Repository for Accounts, preferbly No Sql
 */
export interface IAccountService {

    /**
     * Creats a default Account
     */
    createDefaultAccount(user: any, optional?: { [key: string]: any }): Promise<IUserAccount>;
    /**
     * Creates a new Account
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
     * Updates a existing Account
     */
    updateAccount(account: IUserAccountUpdateRequest): Promise<IUserAccount>;
    /**
     * Removes a existing Account
     */
    deleteAccount(account: IUserAccountRemoveRequest): Promise<boolean>;

}
