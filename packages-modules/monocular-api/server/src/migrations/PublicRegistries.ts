import * as Logger from 'bunyan';
import { Connection, Model } from 'mongoose';
import { injectable, inject } from 'inversify';

import { RegistryModelFunc } from '../documents';

@injectable()
export class PublicMonocularRegistriesMigration {
    constructor(
        @inject('Logger') private logger: Logger,
        @inject('MongoDBConnection') private db: Connection,
    ) { }

    public async up(): Promise<void> {
        const model: Model<any> = RegistryModelFunc(this.db);
        return model.create({
            name: 'Kube Apps',
            owner_id: 'system',
            url: 'https://hub.kubeapps.com',
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
