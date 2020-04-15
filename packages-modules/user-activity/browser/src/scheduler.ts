import { Observable, interval } from 'rxjs';
const opentracing = require('opentracing');

import { IActivityScheduler, IActivityCollectRequest } from './interfaces';

export interface ISchedulerProps {
    interval?: number;
}

export class ActivityScheduler implements IActivityScheduler {
    public interval: number;
    public tick$: Observable<number>;
    private client = opentracing.globalTracer();
    private span = this.client.startSpan('UserActivity');

    constructor(props: ISchedulerProps) {
        this.interval = props.interval || 10000;
        this.tick$ = interval(this.interval);
    }

    public prepare(user, payload = {}): IActivityCollectRequest {
        const ts = Date.now();
        return {
            user,
            scope: 'User',
            timestamp: ts,
            duration: this.interval,
            payload: JSON.stringify(payload),
            annotations: JSON.stringify([{
                timestamp: ts,
                value: `user=${user}`,
            }]),
        };
    }

    public async collect(request: IActivityCollectRequest): Promise<boolean> {
        try {
            const ok = await this.span.log(request);

            this.span.finish();
            this.span = this.client.startSpan('UserActivity');
            return true;
        } catch (e) {
            console.log('ERROR: ', { e, request });
            return false;
        }
    }
}
