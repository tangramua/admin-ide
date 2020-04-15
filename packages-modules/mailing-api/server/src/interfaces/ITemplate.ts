import { Document, DocumentQuery } from 'mongoose';

export interface ITemplateVariable {
    name: string;
    value: string;
    required?: boolean;
    description?: string;
}

export interface ITemplate {
    code: string;
    name: string;
    text: string;
    html: string;
    engine: string;
    subject: string;
    createdAt: string;
    updatedAt?: string;
    description?: string;
    variables?: ITemplateVariable[];
}

export interface ITemplateModel extends Document, ITemplate {}

export interface ICRUDRepository<T, U> {
    create(data: T): Promise<U>;
    find(id: string): Promise<U>;
    list(query?: any): Promise<U[]>;
    remove(id: string): Promise<boolean>;
    update(id: string, data: T): Promise<U>;
}

export interface ITemplateRepository extends ICRUDRepository<ITemplate, ITemplateModel> {}
