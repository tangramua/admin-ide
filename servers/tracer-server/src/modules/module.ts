import * as Hemera from 'nats-hemera';
import * as nodemailer from 'nodemailer';
import { logger } from '@cdm-logger/server';
import * as MG from 'nodemailer-mailgun-transport';
import { Feature } from '@common-stack/server-core';
import { ContainerModule, interfaces } from 'inversify';
import { generateMongo } from '@common-stack/store-mongo';

import { config } from '../config';
import { pubsub, client } from './pubsub';

export const settings: any = {
    mongoUrl: config.MONGO_URL,
    mongoConnection: generateMongo(config.MONGO_URL),
    subTopic: `${config.NAMESPACE}/${config.CONNECTION_ID}`,
    apiSubTopic: 'api-admin/v1',
    brigadeSupTopic: 'brigade/v1',
};

export const transport = (...args) => nodemailer.createTransport(MG(...args));

const defaultModule =
    () => new ContainerModule((bind: interfaces.Bind) => {
        bind('MailTransport').toConstantValue(transport({
            auth: {
                api_key: config.MAILGUN_KEY,
                domain: config.MAILGUN_DOMAIN,
              },
        }));

        bind('Logger').toConstantValue(logger);
        bind('Environment').toConstantValue(process.env.NODE_ENV || 'development');
        bind('Settings').toConstantValue(settings).whenTargetTagged('default', true);
        bind('Settings').toConstantValue(settings).whenTargetTagged('microservice', true);
        bind('PubSub').toConstantValue(pubsub);
        bind('IMongoDBSettings').toConstantValue(settings);
        bind('MongoOptions').toConstantValue({});

        if (process.env.NODE_ENV !== 'development') {
            const hemera = new Hemera(client(), {
                logLevel: process.env.HEMERA_LOG_LEVEL as Hemera.LogLevel || 'info',
                childLogger: true,
                tag: 'hemera-server',
                timeout: 10000,
            });
            bind('Hemera').toConstantValue(hemera);
        }
    });

const DefaultFeature = new Feature({
    createContainerFunc: [defaultModule],
});

export default new Feature(
    DefaultFeature,
    // UserActivityModule,
);
