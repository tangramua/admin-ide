import * as _ from 'lodash';

import { IActivityRecord } from '../interfaces';
import { ACTIVITY_DEBOUNCE } from '../constants';

export class ActivityRecord implements IActivityRecord {
    public _id?: string;
    public payload?: any;
    public scope?: string;
    public target: string;
    public _status: boolean;
    public timestamp: number;

    constructor(obj: IActivityRecord) {
        Object.assign(this, obj);
    }

    get status() {
        return !this.expired;
    }

    get expired() {
        return Date.now() - this.timestamp > ACTIVITY_DEBOUNCE;
    }

    set status(value) {
        if (this._status) {
            throw new Error('Cannot set new value!');
        } else {
            this._status = value;
        }
    }
}
