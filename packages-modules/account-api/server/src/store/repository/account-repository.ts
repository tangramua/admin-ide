import * as Logger from 'bunyan';
import { injectable, inject, optional } from 'inversify';
import { IUserAccountRemoveRequest, IUserAccountCreateRequest, IUserAccountUpdateRequest } from '@adminide-stack/account';
import { IAccountRepository } from '../../interfaces';
import { IAccountModel, AccountModelFunc, AccountModelType } from '../models';
import { IMongoOptions, IMongoDBSettings } from '@common-stack/store-mongo';
import * as mongoose from 'mongoose';

@injectable()
export class AccountRepository implements IAccountRepository {
    private options: IMongoOptions;
    private logger: Logger;

    private accountModel: AccountModelType;
    constructor(
        @inject('MongoDBConnection')
        db: mongoose.Connection,


        @inject('Logger')
        logger: Logger,

        @inject('MongoOptions')
        @optional()
        options?: any,

    ) {

        this.logger = logger.child({ className: 'AccountRepository' });
        this.accountModel = AccountModelFunc(db);
    }

    public async createAccount(newAccount: IUserAccountCreateRequest) {
        this.logger.trace('createAccount with params (%j)', newAccount);
       return this.accountModel.create({ ...newAccount });
    }

    public async findAccountById(id: string) {
        const account = await this.accountModel.findOne({ _id: id });
        return account ? account.toJSON() : {};
    }

    public async findAccountByUser(userId: string) {
        return this.accountModel.findOne({ alias: userId });
    }

    public async updateAccount(payload: IUserAccountUpdateRequest) {
        await this.accountModel.update({ _id: payload.id }, payload);
        return this.accountModel.findOne({ _id: payload.id }).exec();
    }


    public async deleteAccount(payload: IUserAccountRemoveRequest) {
        try {
            this.logger.debug('deleteAccount with payload [%j', payload);
            const deleteRecord = await this.accountModel.deleteOne({ _id: payload.id }).exec();
            return deleteRecord.ok === 1 && deleteRecord.n === 1;
        } catch (e) {
            this.logger.error('delete account with payload (%j) failed due to (%j)', payload, e);
            return false;
        }
    }
}
