import * as Logger from 'bunyan';
import { injectable, inject, optional } from 'inversify';
import { IOrganizationCreateRequest, IOrganizationUpdateRequest, IOrganizationRemoveRequest } from '@adminide-stack/account';
import { IOrganizationRepository } from '../../interfaces';
import { OrganizationModelFunc, OrganizationModelType, IOrganizationModel } from '../models';
import { IMongoOptions, IMongoDBSettings } from '@common-stack/store-mongo';
import * as mongoose from 'mongoose';

@injectable()
export class OrganizationRepository implements IOrganizationRepository {
    private options: IMongoOptions;
    private logger: Logger;

    private organizationModel: OrganizationModelType;
    constructor(
        @inject('MongoDBConnection')
        db: mongoose.Connection,


        @inject('Logger')
        logger: Logger,

        @inject('MongoOptions')
        @optional()
        options?: any,

    ) {

        this.logger = logger.child({ className: 'OrganizationRepository' });
        this.organizationModel = OrganizationModelFunc(db);
    }

    public async createOrganization(newOrganization: IOrganizationCreateRequest) {
        this.logger.trace('createOrgainization with params (%j)', newOrganization);
        return this.organizationModel.create({ ...newOrganization });
    }

    public async findOrganizationById(id: string) {
        return this.organizationModel.findById(id);
    }

    public async updateOrganization(payload: IOrganizationUpdateRequest) {
        await this.organizationModel.update({ _id: payload.id }, payload);
        return this.organizationModel.findOne({ _id: payload.id }).exec();
    }

    public async getUserOrganizations(userId: string) {
        this.logger.debug('(getUserOrganization) organization of userId [%s] : [%j]', userId);

        return this.organizationModel.find({ 'orgMembers.userId': userId }).exec();
    }

    public async deleteOrganization(payload: IOrganizationRemoveRequest) {
        try {
            this.logger.debug('(deleteOrganization) with payload [%j', payload);
            const deleteRecord = await this.organizationModel.deleteOne({ _id: payload.id }).exec();
            return deleteRecord.ok === 1 && deleteRecord.n === 1;
        } catch (e) {
            this.logger.error('delete workspace with payload (%j) failed due to (%j)', payload, e);
            return false;
        }
    }
}
