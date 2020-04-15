import { Document, DocumentQuery } from 'mongoose';

export interface IMailObject {
    to: string;
    bcc?: string;
    from: string;
    topic: string;
    variables?: any;
    templateId: string;
    attachments: string;
}

export interface ISendingReport extends IMailObject {
    ok: boolean;
    trace?: any;
}
export interface ISendMailRequest extends IMailObject {}

export interface IMailReportModel extends ISendingReport, Document {}

export interface IDateQueryRange {
    eq?: string;
    to?: string;
    from?: string;
}

export interface IReportQuery {
    ok?: Boolean;
    to?: string[];
    from?: string[];
    topic?: string[];
    templateId?: string[];
    createdAt?: IDateQueryRange;
}

export interface IMailReportRepository {
    query(query: IReportQuery): Promise<IMailReportModel[]>;
    report(report: ISendingReport): Promise<IMailReportModel>;
}

export interface IMailerService {
    send(request: ISendMailRequest): Promise<ISendingReport>;
}
