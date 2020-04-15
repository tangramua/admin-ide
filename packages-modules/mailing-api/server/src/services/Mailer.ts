import * as _ from 'lodash';
import * as Logger from 'bunyan';
import * as Nodemailer from 'nodemailer';
import * as Email from 'email-templates';
import * as Consolidate from 'consolidate';
import { inject, injectable, optional } from 'inversify';

import { Types } from '../constants';
import { ITemplateRepository, IMailerService, ISendMailRequest, IMailReportRepository } from '../interfaces';

@injectable()
export class Mailer implements IMailerService {
    private mailer: Email;
    private logger: Logger;
    private report: IMailReportRepository;
    private templateRepository: ITemplateRepository;

    constructor(
        @inject(Types.TemplateRepository)
        templateRepository: ITemplateRepository,

        @inject(Types.MailReportRepository)
        report: IMailReportRepository,

        @inject('Logger')
        logger: Logger,

        @inject('MailTransport') @optional()
        transport: any,
    ) {
        const mock = Nodemailer.createTransport({
            newline: 'windows',
            streamTransport: true,
        });

        this.report = report;
        this.logger = logger.child('MailerService');
        this.templateRepository = templateRepository;
        this.mailer = new Email({
            send: true,
            preview: false,
            transport: transport || mock,
            render: async (templatPath, locals) => {
                const [templateId, part] = templatPath.split('/');
                logger.info(`Template ${templateId} with ${part} part...`);

                const template = await this.templateRepository.find(templateId);
                if (!template) {
                    throw new Error(`Template ${templateId} not found`);
                }

                const engine = Consolidate[_.get(template, 'engine', 'ejs')];
                const html = await engine.render(_.get(template, part, `Template ${templateId}`), locals);

                return await this.mailer.juiceResources(html);
            },
        });
    }

    public async send(message: ISendMailRequest) {
        this.logger.trace('(send) send mail based on message [%j]', message);
        const result = _.assign({}, message, { ok: false });
        try {
            const mail = await this.mailer.send({
                send: true,
                locals: message.variables,
                template: message.templateId,
                message: _.pick(message, ['from', 'to', 'attachments', 'bcc']),
            });
            
            _.assign(result, { ok: true, trace: null });
        } catch (e) {
            console.log('Error: ', e);
            return _.assign(result, { trace: e, ok: false });
        }

        this.report.report(result);
        return result;
    }
}
