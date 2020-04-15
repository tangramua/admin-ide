import 'reflect-metadata';
import 'jest';
// import * as mongodb from 'mongodb';
import { AccountRepository } from '../account-repository';
import { config } from 'dotenv';
import { IUserAccountCreateRequest, TierEnum, OrgUserRole } from '@adminide-stack/account';
import { IMongoDBSettings, generateMongo } from '@common-stack/store-mongo';
import { logger } from '@cdm-logger/server';

config({ path: process.env.ENV_FILE });
const testDB = generateMongo(process.env.MONGO_UR);

describe('AccountRepository', () => {
    const mongoSettings: IMongoDBSettings = {
        mongoConnection: testDB,
    };

    const repository = new AccountRepository(mongoSettings.mongoConnection, logger);

    let recordId;
    it('create Workspace', async () => {
        const createRequest: IUserAccountCreateRequest = {
            name: 'TestWorkspace',
            email: 'test@meail',
            alias: ['userId'],
            defaultOrg: 'defaultOrg',
            defaultTeam: 'defaultTeam',
        };

        const account = await repository.createAccount(createRequest);
        recordId = account.id;
        expect(account).toBeDefined();
        console.log(account);
    });

    it('delete Workspace', async () => {
        const deleteStatus = await repository.deleteAccount({ id: recordId });
        expect(deleteStatus).toBeTruthy();
    });


});
