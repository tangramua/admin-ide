import { Document } from 'mongoose';

export interface IBillingReport {
    ok: boolean;
    payed: boolean;

    usage: number;
    amount: number;
    customer: string;

    fees: any;
    discount: any;

    metadata: any;
    workspace: string;

    createdAt: Date | string;
    updatedAt: Date | string;
    refundedAt?: string;
}

export interface IBillingReportModel extends IBillingReport, Document {
    _id: any;
}

export interface IBillintReportRepository {
    save(input: IBillingReport): Promise<IBillingReport>;
}
