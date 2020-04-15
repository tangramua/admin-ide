import 'reflect-metadata';
require('dotenv').config({ path: process.env.ENV_FILE });

import { logger } from '@cdm-logger/server';
import * as Hemera from 'nats-hemera';
import * as nats from 'nats';
import { config } from './config';
import { generateMongo } from '@common-stack/store-mongo';
const HemeraJoi = require('hemera-joi');
// const HemeraZipkin = require('hemera-zipkin');

const WorkspaceHemeraPlugin = require('@adminide-stack/workspaces-server/lib/plugin.js');


const client = nats.connect({
    'url': config.NATS_URL,
    'user': config.NATS_USER,
    'pass': config.NATS_PW,
});

const logLevel = config.HEMERA_LOG_LEVEL as Hemera.LogLevel || config.LOG_LEVEL as Hemera.LogLevel || 'info';
const subTopic = `${config.NAMESPACE}/${config.CONNECTION_ID}`;

try {
    const hemera = new Hemera(client, {
        logLevel: logLevel,
        logger,
        childLogger: true,
        tag: require('../package.json').name,
        timeout: 10000,
    });

    hemera.use(HemeraJoi);
    // hemera.use(HemeraZipkin, {
    //     host: process.env.ZIPKIN_URL,
    //     port: process.env.ZIPKIN_PORT,
    //     sampling: 1,
    // });
    hemera.use(WorkspaceHemeraPlugin, {
        settings: {
            subTopic,
            mongoConnection: generateMongo(config.MONGO_URL),
        },
        client,
    });

    // hemera.setOption('payloadValidator', 'hemera-joi');

    hemera.ready(() => {
        // let Joi = hemera.exposition['hemera-joi'].joi;


    });
} catch (err) {
    console.error('workspace-server-plugin: publish was failed due to ');
    console.error(err);
}


