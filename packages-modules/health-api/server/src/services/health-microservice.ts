import * as Logger from 'bunyan';
import Hemera from 'nats-hemera';
import { PubSubEngine } from 'graphql-subscriptions';
import { injectable, inject, tagged } from "inversify";

import { config } from '../config';
import { IHealthService } from "../interfaces";
import { TYPES, HEMERA_HEALTH_TOPIC, HemeraHealthActions } from "../constants";

@injectable()
export class HealthMicroService implements IHealthService {
    private logger: Logger;

    constructor(
        @inject('Hemera')
        private hemera: Hemera<any, any>,

        @inject('PubSub')
        private pubsub: PubSubEngine,

        @inject('Logger')
        logger: Logger,

        @inject('Settings')
        @tagged('microservice', true)
        private settings: any,
    ) {
        this.logger = logger.child({ className: HealthMicroService });
    }

    public topic = `${HEMERA_HEALTH_TOPIC}/${this.settings.subTopic}`;

    public async health(workspaceId, service) {
        return this.hemera.act({
            cmd: HemeraHealthActions.Health,
            topic: `${this.topic}/${service}`,
            payload: { workspaceId, service },
        }) as any;
    }
}
