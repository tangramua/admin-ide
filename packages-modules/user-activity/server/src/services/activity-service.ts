import * as _ from 'lodash';
import * as Redis from 'redis';
import { Subject, Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { TYPES } from '@common-stack/server-core';
import { injectable, inject, tagged } from 'inversify';

import { config } from '../config';
import { TYPES as ActivityTypes, EActivityScopes, HemeraCommands } from '../constants';
import { IActivityCollector, IActivitySettings, IActivityStorage, IActivityRecord, IActivityCollectRequest } from '../interfaces';

const CRON_INTERVAL = 60000;

@injectable()
export class ActivityService implements IActivityCollector {
    public connection: any;
    public brigadeTopic: string;
    public channel$ = new Subject();

    @inject(ActivityTypes.ActivityStorage)
    protected storage: IActivityStorage;

    public cron$ = this
        .channel$
        .pipe(
            debounceTime(CRON_INTERVAL),
        );

    public user({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.User, payload: args.payload } as any);
    }

    public team({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.Team, payload: args.payload } as any);
    }

    public organization({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.Organization, payload: args.payload } as any);
    }

    public workspace({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.Workspace, payload: args.payload } as any);
    }

    public cluster({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.Cluster, payload: args.payload } as any);
    }

    public active(scope: string) {
        return this.storage.active(scope);
    }

    public inactive(scope: string) {
        return this.storage.inactive(scope);
    }

    public notify(record) {
        this.channel$.next(record);
    }

    public async collect({ target, user, timestamp, scope = EActivityScopes.Default, payload }: any) {
        if (target) {
            return this.notify(this.storage.set({ target: target || user, timestamp, scope, status: true, payload }));
        }
        return false;
    }

    async get() { }
    async unset(key: string) {
        return true;
    }
}
