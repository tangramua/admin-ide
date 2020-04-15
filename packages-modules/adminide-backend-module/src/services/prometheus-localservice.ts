import { resolve, URL } from 'url';
import * as Logger from 'bunyan';
import { inject, injectable } from 'inversify';
import { IPrometheusService } from '../interfaces/IPrometheusService';
import { config } from '../config';

@injectable()
export class PrometheusLocalService implements IPrometheusService {
    public logger: Logger;
    public API_ENDPOINT = '/api/v1';

    constructor(
        @inject('Logger') logger: Logger,
    ) {
        this.logger = logger.child({ className: PrometheusLocalService });
    }

    private endpoint(path: string) {
        return resolve(config.PROMETHEUS_API_URL, `${this.API_ENDPOINT}/${path}`);
    }

    public query(q: string) {
        const url = `query?query=${q}`;
        const endpoint = this.endpoint(url);

        if (endpoint) {
            this.logger.info('quering promql %s', this.endpoint(url));
            return fetch(this.endpoint(url)).then(res => res.json());
        }
    }
}
