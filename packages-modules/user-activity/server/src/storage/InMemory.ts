import { injectable } from 'inversify';

import { ACTIVITY_DEBOUNCE } from '../constants';
import { IActivityStorage, IActivityRecord } from '../interfaces';
import { ActivityRecord } from '../classes/ActivityRecord';

@injectable()
export class InMemory implements IActivityStorage {
    private _db: IActivityRecord[] = [];

    public async active(scope: string) {
        return this._db
            .filter(record => record.status)
            .filter(record => record.scope === scope)
            .map(el => new ActivityRecord(el));
    }

    private expired(record: IActivityRecord, now: number = Date.now()) {
        return now - record.timestamp > ACTIVITY_DEBOUNCE;
    }

    public async inactive(scope: string) {
        return this._db
            .filter(record => !record.status || this.expired(record))
            .filter(record => record.scope === scope)
            .map(el => new ActivityRecord(el));
    }

    public async get(id: string) {
        const obj = this._db.find(record => record.target === id);
        return new ActivityRecord(obj);
    }

    public async delete(id: string) {
        this._db = this._db.filter(record => record.target !== id);
        return true;
    }

    public async set(record: IActivityRecord) {
        this._db = this._db.concat([record]);
        return true;
    }
}
