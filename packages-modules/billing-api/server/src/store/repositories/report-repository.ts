import * as Logger from 'bunyan';
import { Connection, Model } from 'mongoose';
import { injectable, inject, optional } from 'inversify';

import { ReportModelFunc } from '../models';
import { IBillintReportRepository, IBillingReport, IBillingReportModel } from '../../interfaces';

@injectable()
export class BillingReportRepository implements IBillintReportRepository {
    private logger: Logger;
    private model: Model<IBillingReportModel>;

    constructor(
        @inject('MongoDBConnection')
        db: Connection,

        @inject('Logger')
        logger: Logger,

        @inject('IMongoOptions')
        @optional()
        options?: any,
    ) {

        this.logger = logger.child({ className: 'WorkspaceRepository' });
        this.model = ReportModelFunc(db);

    }

    public save(report: IBillingReport) {
        this.logger.info('Saving payment report: %o', report);
        return this.model.create(report);
    }
}
