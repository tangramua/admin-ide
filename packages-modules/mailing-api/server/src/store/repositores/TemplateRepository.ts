import * as Logger from 'bunyan';
import { DocumentQuery } from 'mongoose';
import { injectable, inject, optional } from 'inversify';
import * as mongoose from 'mongoose';
import { ITemplateModelType, TemplateModelFunc } from '../models';
import { ITemplateRepository, ITemplate, ITemplateModel } from '../../interfaces';

@injectable()
export class TemplateRepository implements ITemplateRepository {
    private logger: Logger;
    private model: ITemplateModelType;

    constructor(
        @inject('MongoDBConnection')
        db: mongoose.Connection,

        @inject('Logger')
        logger: Logger,
    ) {

        this.model = TemplateModelFunc(db);
        this.logger = logger.child({ className: 'TemplateRepository' });
    }

    public create(template: ITemplate) {
        return this.model.create(template);
    }

    public find(templateId: string) {
        return this.model.findOne({ code: templateId }).exec();
    }

    public list(query?: any) {
        return this.model.find(query).exec();
    }

    public async remove(templateId) {
        const result = await this.model.findByIdAndRemove(templateId).exec();
        return true;
    }

    public async update(templateId: string, data: ITemplate) {
        return this.model.findOneAndUpdate({ _it: templateId }, data).exec();
    }
}
