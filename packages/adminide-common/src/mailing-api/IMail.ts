export interface IMailViewOptions {
    map?: any;
    extension?: string;
    engineSource?: any;
}

export interface IMailMessage {
    to?: string;
    bcc?: string;
    from?: string;
    attachments?: any[];
}

export interface IMailViews  {
    locals?: any;
    root?: string;
    transport?: any;
    message?: IMailMessage;
    options?: IMailViewOptions;
}

export interface IMail {
    view: IMailViews;
    message: IMailMessage;
}

export interface ISendRequest {
    locals: any;
    template: string;
    message: IMailMessage;
}
