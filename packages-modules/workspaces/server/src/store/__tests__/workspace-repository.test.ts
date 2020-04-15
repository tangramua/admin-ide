import 'reflect-metadata';
import 'jest';
import * as mongodb from 'mongodb';
import { WorkspaceRepository } from '../repository';
import { config } from 'dotenv';
import { IMongoDBSettings, generateMongo } from '@common-stack/store-mongo';
import { logger } from '@cdm-logger/server';
import { IWorkspaceCreate_Input, IProjectSourceType as ISourceType,
    IProjectSourceProviders as  ISourceProviders} from '@adminide-stack/core';

config({ path: process.env.ENV_FILE });
const testDB = generateMongo(process.env.MONGO_URL);


describe('WorkspaceRepository', () => {

    const mongoSettings: IMongoDBSettings = {
        mongoConnection: testDB,
    };

    const repository = new WorkspaceRepository(mongoSettings.mongoConnection, logger);

    it('create Workspace', async () => {
        const createRequest: IWorkspaceCreate_Input = {
            name: 'TestWorkspace',
            language: 'javascript',
            description: 'Test description',
            projects: [{
                name: 'Sample Repo',
                description: 'Test Sample',
                path: '/app/src/test',
                source: {
                    location: 'https://github.com/cdmbase/fullstack-pro.git',
                    type: ISourceType.GIT,
                    parameters: {
                        branch: 'master',
                    },
                    providers: ISourceProviders.GITHUB,
                    language: 'javascript',
                },

            }],
            stacks: [{}],
        } as any;

        const workspace = await repository.createWorkspace(createRequest as any);
        expect(workspace).toBeDefined();
        console.log(workspace);
    });
});
