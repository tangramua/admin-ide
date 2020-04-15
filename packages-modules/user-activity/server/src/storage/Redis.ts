import * as _ from 'lodash';
import * as RedisClient from 'redis';
import { Model, Schema } from 'mongoose';
import { injectable, inject, tagged } from 'inversify';

import { config } from '../config';
import { MODELS, ACTIVITY_DEBOUNCE } from '../constants';
import { IActivityStorage, IActivityRecord, IActivitySettings } from '../interfaces';
import { ActivityRecord } from '../classes/ActivityRecord';

@injectable()
export class Redis implements IActivityStorage {
    private connection: any;
    public connectionURL = config.REDIS_URL;

    constructor(
        @inject('Settings')
        @tagged('microservice', true)
        private settings: IActivitySettings,
    ) {
        this.connection = RedisClient.createClient(this.connectionURL);
    }

    private __stringify(record: IActivityRecord) {
        return JSON.stringify(record);
    }

    private __parse(str: string) {
        return JSON.parse(str);
    }

    private get __hash(): Promise<IActivityRecord[]> {
        return new Promise((resolve, reject) => {
            this.connection.hgetall(MODELS.ActivityStorageModel, (err, hash) => {
                if (err) {
                    return reject(err);
                }

                const list = _.keys(hash || {}).reduce((acc, key) => ({ ...acc, [key]: new ActivityRecord(this.__parse(hash[key])) }), {});
                return resolve(list as any);
            });
        });
    }

    public async active(scope: string) {
        const hash = await this.__hash;
        return _
            .filter(hash, (el: IActivityRecord) => el.status)
            .filter((el: IActivityRecord) => el.scope === scope)
            .map(el => new ActivityRecord(el));
    }

    private expired(record: IActivityRecord, now: number = Date.now()) {
        return now - record.timestamp > ACTIVITY_DEBOUNCE;
    }

    public async inactive(scope: string) {
        const hash = await this.__hash;
        return _
            .filter(hash, (el: IActivityRecord) => !el.status || this.expired(el))
            .filter((el: IActivityRecord) => el.scope === scope)
            .map(el => new ActivityRecord(el));
    }

    public async get(id: string) {
        const hash = await this.connection.hget(MODELS.ActivityStorageModel, id);
        return new ActivityRecord(hash || {});
    }

    public async delete(id: string) {
        const ok = await this.connection.hdel(MODELS.ActivityStorageModel, id);
        return true;
    }

    public async set(record: IActivityRecord) {
        const ok = await this.connection.hmset(MODELS.ActivityStorageModel, record.target, this.__stringify(record));
        return true;
    }
}
