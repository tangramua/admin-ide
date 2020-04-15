import { Tracer } from 'zipkin';

import { ISpan } from '../interfaces/span.interface';
import { IZipkinClient, IZipkinClientOptions } from '../interfaces/zipkin-client.interface';

export class ZipkinClient implements IZipkinClient {
    private tracer: Tracer;
    private options: IZipkinClientOptions;

    constructor(options: IZipkinClientOptions) {
        this.options = options;
        console.log('OPTIONS: ', options);
        // this.logger = options.logger || Logger.createLogger({ name: ZipkinClient.name });
    }

    public async span(span: ISpan): Promise<boolean> {
        return this.collect(span);
    }

    public async queue(queue: ISpan[]): Promise<boolean> {
        return this.collect(...queue);
    }

    public async collect(...spans) {
        try {
            const ok = await await fetch(this.options.uri, {
                method: 'POST',
                body: `[${spans.join(',')}]`,
              });
            return true;
        } catch (e) {
            console.log("Collect error: ", e);
            return false;
        }
    }
}
