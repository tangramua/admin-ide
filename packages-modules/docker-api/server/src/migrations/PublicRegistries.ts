import * as Logger from 'bunyan';
import { Connection, Model } from 'mongoose';
import { injectable, inject } from 'inversify';

import { RegistryModelFunc } from '../documents';

@injectable()
export class PublicDockerRegistriesMigration {
    constructor(
        @inject('Logger') private logger: Logger,
        @inject('MongoDBConnection') private db: Connection,
    ) { }

    public async up(): Promise<void> {
        const model: Model<any> = RegistryModelFunc(this.db);
        return model.create({
            owner_id: 'system',
            name: 'Docker Registry',
            // url: 'https://hub.kubeapps.com', // TODO: Set url to private registery
            credentials: {
                username: '',
                password: '',
                type: 'login-password',
            },
            is_public: true,
        });
    }

    public async down(): Promise<void> {
        return;
    }
}
