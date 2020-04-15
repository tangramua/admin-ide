import * as _ from 'lodash';
import * as Redis from 'redis';
import { Subject, Observable } from 'rxjs';
import { TYPES } from '@common-stack/server-core';
import { injectable, inject, tagged } from 'inversify';

import { config } from '../config';
import { TYPES as ActivityTypes, EActivityScopes, HemeraCommands } from '../constants';
import { IActivityCollector, IActivitySettings, IActivityStorage, IActivityRecord } from '../interfaces';

const CRON_INTERVAL = 60000;

@injectable()
export abstract class AbstractActivityService implements IActivityCollector {
    public connection: any;
    public brigadeTopic: string;
    public channel$ = new Subject();
    public connectionURL = config.REDIS_URL;

    @inject(ActivityTypes.ActivityStorage)
    protected storage: IActivityStorage;

    public cron$ = this
        .channel$
        .debounceTime(CRON_INTERVAL);

    public user({ key, timestamp, ...args }) {
        this.collect(key, timestamp, EActivityScopes.User, args.payload);
    }

    public team({ key, timestamp, ...args }) {
        this.collect(key, timestamp, EActivityScopes.Team, args.payload);
    }

    public organization({ key, timestamp, ...args }) {
        this.collect(key, timestamp, EActivityScopes.Organization, args.payload);
    }

    public workspace({ key, timestamp, ...args }) {
        this.collect(key, timestamp, EActivityScopes.Workspace, args.payload);
    }

    public cluster({ key, timestamp, ...args }) {
        this.collect(key, timestamp, EActivityScopes.Cluster, args.payload);
    }

    public active(scope: string) {
        return this.storage.active(scope);
    }

    public async get(key: string) {
        return this.storage.get(key);
    }

    public async unset(key: string) {
        return this.storage.delete(key);
    }

    public inactive(scope: string) {
        return this.storage.inactive(scope);
    }

    public notify(type, record) {
        this.channel$.next({ type, record });
    }

    public async collect(key, timestamp, scope = EActivityScopes.Default, payload = {}) {
        this.notify(HemeraCommands.Collect, { key, timestamp, scope, payload });

        if (key) {
            return this.storage.set({ target: key, timestamp, scope, status: true, payload });
        }

        return false;
    }
}
