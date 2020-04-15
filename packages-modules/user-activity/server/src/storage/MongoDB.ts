import { injectable, inject } from 'inversify';
import { Model, Schema, Connection } from 'mongoose';

import { MODELS, TYPES, ACTIVITY_DEBOUNCE } from '../constants';
import { IActivityStorage, IActivityRecord } from '../interfaces';
import { ActivityRecord } from '../classes/ActivityRecord';

const ActivityModelFunc = (db: Connection) => db.model(MODELS.ActivityStorageModel, new Schema({
    target: { type: String },
    status: { type: Boolean },
    timestamp: { type: Number },
}));

@injectable()
export class MongoDB implements IActivityStorage {
    private model: Model<any>;

    constructor(
        @inject(TYPES.ActivityDBConnection)
        db: Connection,
    ) {
        this.model = ActivityModelFunc(db);
    }

    public async active(scope: string) {
        return this.model
            .find({ scope, $or: [{ status: false }, { timestamp: { $gte: Date.now() - ACTIVITY_DEBOUNCE } }] })
            .exec()
            .then(data => data.map(el => new ActivityRecord(el)));
    }

    public async inactive(scope: string) {
        return this.model
            .find({ scope, $or: [{ status: false }, { timestamp: { $lte: Date.now() - ACTIVITY_DEBOUNCE } }] })
            .exec()
            .then(data => data.map(el => new ActivityRecord(el)));
    }

    public async get(id: string) {
        return this.model
            .findOne({ target: id })
            .exec()
            .then(el => new ActivityRecord(el));
    }

    public async delete(id: string) {
        const ok = await this.model.deleteOne({ target: id });
        return true;
    }

    public async set(record: IActivityRecord) {
        const ok = await this.model.create(record);
        return true;
    }
}
