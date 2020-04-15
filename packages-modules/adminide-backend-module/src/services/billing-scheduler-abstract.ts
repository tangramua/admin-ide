import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { interval } from 'rxjs';
import { flatMap, catchError } from 'rxjs/operators';
import { Observable, Subject , of } from 'rxjs';
import { inject, injectable } from 'inversify';

import { config } from '../config';

const MANAGER_TICK = 300000; // 5 minutes

@injectable()
export abstract class AbstractBillingScheduler {
    private tick$ = interval(config.WATCHER_INTERVAL || MANAGER_TICK);
    // private tick$ = Observable.interval(15000);
    private process$ = this.tick$.pipe(flatMap(this.handler.bind(this)));

    constructor() {
        this.process$
            .pipe(
                catchError(e => of(false)),
            ).subscribe(this.complete.bind(this));
    }

    public async complete(): Promise<boolean> {
        return Promise.reject(new Error('Not implemented!'));
    }

    public async handler(): Promise<any> {
        return Promise.reject(new Error('Not implemented!'));
    }
}
