import * as Logger from 'bunyan';
import { ISpan } from './span.interface';

export interface IZipkinClientOptions {
    uri: string;
    logger?: Logger;
}

export interface IZipkinClient {
    span(request: ISpan): Promise<boolean>;
    queue(queue: ISpan[]): Promise<boolean>;
}
