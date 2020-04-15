import { interfaces, ContainerModule } from 'inversify';

import { ETypes } from '../constants';
import { IBillintReportRepository } from '../interfaces';
import { BillingReportRepository } from './repositories';

export const billingStoreModule: (settings: any, pubsub?) => interfaces.ContainerModule =
    (settings) => new ContainerModule((bind: interfaces.Bind) => {
        bind<IBillintReportRepository>(ETypes.BillingReportsRepository)
            .to(BillingReportRepository)
            .inSingletonScope();
    });
