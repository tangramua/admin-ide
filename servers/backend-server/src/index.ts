///<reference types="webpack-env" />
// tslint:disable-next-line
process.env.ENV_FILE !== null && (require('dotenv')).config({ path: process.env.ENV_FILE });
import 'reflect-metadata';
import { logger } from '@cdm-logger/server';
import  { Service } from './service';
import  { container } from './modules';
import { Container } from 'inversify';
import { migrate } from './utils/migrations';
import { Connection } from 'mongoose';

// Run application migrations
container.then((ioc: Container) => {
    const migrations = ioc.getAll('MongodbMigration');
    const db: Connection = ioc.get('MongoDBConnection');

    migrate(db, migrations)
        .then(result => console.log(`Migrations processed: ${result.join(',')}`))
        .catch(e => console.log('Can not process migrations: ', e));
});

process.on('uncaughtException', (ex) => {
    logger.error(ex);
    process.exit(1);
});

process.on('unhandledRejection', reason => {
    logger.error(reason);
});
const service = new Service();

async function start() {
    await service.initalize();
    await service.start();
}

if (module.hot) {
    module.hot.status(event => {
        logger.trace(event);
        if (event === 'abort' || event === 'fail') {
            logger.error('HMR error status: ' + event);
            // Signal webpack.run.js to do full-reload of the back-end
            service.gracefulShutdown(event);
        }
        // adddintionally when event is idle due to external modules
        if (event === 'idle') {
            service.gracefulShutdown(event);
        }
        if (event === 'idle') {
            process.exit(250);
        }
    });
    module.hot.accept();
}

start();
