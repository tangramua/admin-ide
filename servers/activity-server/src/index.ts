import 'reflect-metadata';
require('dotenv').config({ path: process.env.ENV_FILE });
import { config } from './config';
import { logger } from '@cdm-logger/server';
import * as Hemera from 'nats-hemera';
import * as nats from 'nats';
const HemeraJoi = require('hemera-joi');
// const HemeraZipkin = require('hemera-zipkin');

const WorkspaceHemeraPlugin = require('@adminide-stack/workspaces-server/lib/plugin.js');
const UserActivityPlugin = require('@adminide-stack/user-activity-server/lib/plugin.js');
import { IActivitySettings } from '@adminide-stack/user-activity-server';

const client = nats.connect({
    'url': process.env.NATS_URL,
    'user': process.env.NATS_USER,
    'pass': process.env.NATS_PW,
});

const logLevel = process.env.HEMERA_LOG_LEVEL as Hemera.LogLevel || process.env.LOG_LEVEL as Hemera.LogLevel || 'info';
const subTopic = `${config.NAMESPACE}/${config.CONNECTION_ID}`;
const brigadeSupTopic = 'brigade/v1';

const settings: IActivitySettings = {
    subTopic,
    brigadeSupTopic,
};

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
    hemera.use(UserActivityPlugin, {
        settings,
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
