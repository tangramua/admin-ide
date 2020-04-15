import * as Logger from 'bunyan';
import Hemera from 'nats-hemera';
import { inject, injectable, tagged } from 'inversify';
import { IPrometheusService, PrometheusResponse} from '../interfaces/IPrometheusService';
import { HemeraTopics, HemeraCmd } from '../constants';

@injectable()
export class PrometheusMicroService implements IPrometheusService {
    public topic: string;
    public logger: Logger;

    constructor(
        @inject('Logger') logger: Logger,
        @inject('Hemera') private hemera: Hemera<any, any>,
        @inject('Settings') @tagged('microservice', true) settings,
    ) {
        this.topic = `${HemeraTopics.Prometheus}/${settings.subTopic}`;
        this.logger = logger.child({ className: PrometheusMicroService });
    }

    public async query(query: string) {
        const response = await this.hemera.act<PrometheusResponse>({
            query,
            topic: this.topic,
            cmd: HemeraCmd.Query,
        });

        return response.data;
    }
}
