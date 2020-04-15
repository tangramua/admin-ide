import Axios from 'axios';
import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { parse, format } from 'url';
import { Model, Connection } from 'mongoose';
import { injectable, inject } from 'inversify';

import { IRegistryManagementService, IDockerRegistry } from '../interfaces';
import { RegistryModelFunc } from '../documents';

@injectable()
export class RegistryManagement implements IRegistryManagementService {
    model: Model<any>;

    constructor(
        @inject('Logger') logger: Logger,
        @inject('MongoDBConnection') db: Connection,
    ) {
        this.model = RegistryModelFunc(db);
    }

    async create(payload: IDockerRegistry): Promise<IDockerRegistry> {
        return this.model.create(payload);
    }

    async update(_id: string, payload: IDockerRegistry): Promise<IDockerRegistry> {
        await this.model.update({ _id }, payload);

        return this.find(_id);
    }

    async list(owner_id: string): Promise<IDockerRegistry[]> {
        return this.model.find({ $or: [{ owner_id }, { is_public: true }] }).exec();
    }

    async find(_id: string): Promise<IDockerRegistry> {
        return this.model.findById(_id).exec();
    }

    async remove(_id: string): Promise<boolean> {
        return this.model.remove({ _id })
            .then(() => true);
    }

    public async test({ url, credentials }) {
        const obj = parse(url);

        if (credentials.username) {
            Object.assign(obj, _.pick(credentials, ['username', 'password']));
        }

        let endpoint = format(obj);
        try {
            return Axios
                .get(endpoint, { headers: { [credentials.header]: credentials.token } })
                .then(() => true)
                .catch(() => false);
        } catch (e) {
            return false
        }
    }
}
