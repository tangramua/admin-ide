import * as _ from 'lodash';
import * as Logger from 'bunyan';
import * as mongoose from 'mongoose';
import { DocumentQuery } from 'mongoose';
import { injectable, inject, optional } from 'inversify';
import { IMailReportModelType, MailReportModelFunc } from '../models';
import { IMailReportRepository, IMailReportModel, ISendingReport, IReportQuery } from '../../interfaces';

@injectable()
export class MailReportRepository implements IMailReportRepository {
    private logger: Logger;
    private model: IMailReportModelType;

    constructor(
        @inject('MongoDBConnection')
        db: mongoose.Connection,

        @inject('Logger')
        logger: Logger,
    ) {

        this.model = MailReportModelFunc(db);
        this.logger = logger.child({ className: 'MailReportRepository' });
    }

    public query(query: IReportQuery) {
        const fields = _.pick(query, [ 'from', 'to', 'topic', 'templateId']);
        const q: any = _.transform(
            fields,
            (acc, value, key) => acc[key] = _.isArray(value) ? { $in: value } : value,
            {},
        );

        if (query.hasOwnProperty('ok')) {
            q.ok = query.ok;
        }

        if (query.createdAt) {
            q.createdAt = {};
            if (query.createdAt.eq) {
                q.createdAt['$eq'] = query.createdAt.eq;
            }
            if (query.createdAt.from) {
                q.createdAt['$gte'] = query.createdAt.from;
            }
            if (query.createdAt.to) {
                q.createdAt['$lte'] = query.createdAt.to;
            }
        }

        return this.model.find(q).exec();
    }

    public report(report: ISendingReport) {
        return this.model.create(report);
    }
}
