import { IActivityRecord } from './activity-storage';

export interface IAbstractActivityRecord {
    key: string;
    timestamp: number;
}

export interface IActivityCollectRequest {
    key: any;
    user?: string;
    scope: string;
    payload?: any;
    timestamp: number;
    duration?: number;
}

export interface IActivityCollector {
    get(key: string): Promise<any>;
    unset(key: string): Promise<boolean>;

    team(record: IAbstractActivityRecord): any;
    user(record: IAbstractActivityRecord): any;
    cluster(record: IAbstractActivityRecord): any;
    organization(record: IAbstractActivityRecord): any;

    active(scope: string): Promise<IActivityRecord[]>;
    inactive(scope: string): Promise<IActivityRecord[]>;

    collect(request: IActivityCollectRequest): Promise<boolean|void>;
}
