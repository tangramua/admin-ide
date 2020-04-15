import * as _ from 'lodash';
import Hemera from 'nats-hemera';
import * as Logger from 'bunyan';
import * as RedisClient from 'redis';
import { Model, Schema } from 'mongoose';
import { injectable, inject, tagged } from 'inversify';

import { config } from '../config';
import { ActivityRecord } from '../classes/ActivityRecord';
import { MODELS, HemeraTopics, HemeraCommands } from '../constants';
import { IActivityStorage, IActivityRecord, IActivitySettings } from '../interfaces';

@injectable()
export class NatsStorage implements IActivityStorage {
    private logger: Logger;

    constructor(
        @inject('Hemera')
        private hemera: Hemera<any, any>,

        @inject('Logger')
        logger: Logger,

        @inject('Settings')
        @tagged('microservice', true)
        private settings,
    ) {
        this.logger = logger.child({ className: NatsStorage });
    }

    public async active(scope: string) {
        const response = await this.hemera.act({
            payload: { scope },
            topic: HemeraTopics.ActivityStorage,
            cmd: HemeraCommands.StorageGetActive,
        });

        return _.map(response.data, el => new ActivityRecord(el));
    }

    public async inactive(scope: string) {
        const response = await this.hemera.act({
            payload: { scope },
            topic: HemeraTopics.ActivityStorage,
            cmd: HemeraCommands.StorageGetInactive,
        });

        return _.map(response.data, el => new ActivityRecord(el));
    }

    public async get(key: string) {
        const response = await this.hemera.act({
            payload: { key },
            topic: HemeraTopics.ActivityStorage,
            cmd: HemeraCommands.StorageGetInactive,
        });

        return new ActivityRecord(response.data);
    }

    public async delete(key: string) {
        const response = await this.hemera.act({
            payload: { key },
            topic: HemeraTopics.ActivityStorage,
            cmd: HemeraCommands.StorageGetInactive,
        });

        return true;
    }

    public async set(record: IActivityRecord) {
        await this.hemera.act({
            payload: { record },
            topic: HemeraTopics.ActivityStorage,
            cmd: HemeraCommands.StorageGetInactive,
        });

        return true;
    }
}
