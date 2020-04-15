import {Observable} from 'rxjs';

export interface IActivityCollectRequest {
    user: string;
    scope: string;
    span?: string;
    payload?: any;
    duration?: number;
    timestamp: number;
    annotations?: any;
}

export interface IActivityScheduler {
    interval: number;
    tick$: Observable<number>;
    collect(request: IActivityCollectRequest): Promise<boolean>;
    prepare(user: string, payload: any): IActivityCollectRequest;
}
