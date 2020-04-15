import 'reflect-metadata';
import 'jest';
// import * as mongodb from 'mongodb';
import { OrganizationRepository } from '../organization-repository';
import { config } from 'dotenv';
import { IOrganizationCreateRequest, TierEnum } from '@adminide-stack/account';
import { IMongoDBSettings, generateMongo } from '@common-stack/store-mongo';
import { logger } from '@cdm-logger/server';

config({ path: process.env.ENV_FILE });
const testDB = generateMongo(process.env.MONGO_UR);


describe('OrganizationRepository', () => {

    const mongoSettings: IMongoDBSettings = {
        mongoConnection: testDB,
    };

    const repository = new OrganizationRepository(mongoSettings.mongoConnection, logger);

    let recordId;
    it('create Workspace', async () => {
        const createRequest: IOrganizationCreateRequest = {
            name: 'TestWorkspace',
            description: 'Test Workspace',
            tier: TierEnum.PERSONAL,
            namespace: 'test',
            billingLeaders: ['userId'],
        };

        const organization = await repository.createOrganization(createRequest);
        recordId = organization.id;
        expect(organization).toBeDefined();
        console.log(organization);
    });

    it('delete Workspace', async () => {


        const deleteStatus = await repository.deleteOrganization({ id: recordId });
        expect(deleteStatus).toBeTruthy();
    });

});
