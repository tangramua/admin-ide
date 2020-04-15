

import { ContainerModule, interfaces } from 'inversify';

import { Types } from '../constants';
import { Mailer } from '../services';
import { TemplateRepository, MailReportRepository } from '../store';
import { ITemplateRepository, IMailerService, IMailReportRepository } from '../interfaces';
import { IMongoDBSettings } from '@common-stack/store-mongo';

export const moduleFunc: (settings: any, pubsub) => interfaces.ContainerModule =
    (settings: IMongoDBSettings) => new ContainerModule((bind: interfaces.Bind) => {

        bind<IMailerService>(Types.MailerService)
            .to(Mailer)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<ITemplateRepository>(Types.TemplateRepository)
            .to(TemplateRepository)
            .inSingletonScope()
            .whenTargetIsDefault();

        bind<IMailReportRepository>(Types.MailReportRepository)
            .to(MailReportRepository)
            .inSingletonScope()
            .whenTargetIsDefault();
    });

