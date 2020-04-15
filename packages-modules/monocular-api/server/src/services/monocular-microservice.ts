import * as _ from 'lodash';
import * as Logger from 'bunyan';
import Hemera from 'nats-hemera';
import { injectable, inject, tagged } from 'inversify';

import { config } from '../config';
import { IHelmSettings } from '../interfaces';
import { IMonocularService } from '../interfaces';

@injectable()
export class MicroserviceMonocularApi implements IMonocularService {

    private logger: Logger;


    constructor(
        @inject('Hemera')
        protected hemera: Hemera<any, any>,

        @inject('Logger')
        logger: Logger,

        @inject('Settings')
        @tagged('microservice', true)
        protected settings: IHelmSettings,
    ) {
        this.logger = logger.child({ className: MicroserviceMonocularApi });
    }

    protected topic = `helm/${this.settings.apiSubTopic}`;

    public async values(chart): Promise<any> {
        const chartName = _.get(chart, 'id', '');
        const res = await this.hemera.act({
            cmd: 'inspect',
            topic: this.topic,
            projectId: config.BRIGADE_PROJECT_ID,
            payload: { chartName, helmInspectCommand: 'values' },
        });

        return res.data;
    }
}
