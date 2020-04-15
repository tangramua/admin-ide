export interface IActivityRecord {
    value?: any;
    _id?: string;
    payload?: any;
    scope?: string;
    target: string;
    status: boolean;
    timestamp: number;
}

export interface IActivityStorage {
    delete(id: string): Promise<boolean>;
    get(id: string): Promise<IActivityRecord>;
    set(record: IActivityRecord): Promise<boolean>;
    active(scope: string): Promise<IActivityRecord[]>;
    inactive(scope: string): Promise<IActivityRecord[]>;
}
