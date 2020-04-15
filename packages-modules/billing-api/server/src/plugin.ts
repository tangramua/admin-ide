const Hp = require('hemera-plugin');
const HemeraJoi = require('hemera-joi');

import * as ILogger from 'bunyan';
import * as Hemera from 'nats-hemera';
import { Container } from 'inversify';
import { NatsPubSub } from 'graphql-nats-subscriptions';

import { IBillingService } from './interfaces';
import { billingModuleNats } from './container';
// import { workspaceRepositoryModule } from './store';
import { ETypes, HemeraTopics, HemeraCommands } from './constants';

function WorkspaceServicePlugin(hemera: Hemera<any, any>, options: { settings: any, client: any }, done) {

    const { settings, client } = options;
    const topic = `${HemeraTopics.Billing}/${settings.subTopic}`;

    const pubsub = new NatsPubSub({ client, logger: hemera.log });

    let container = new Container();
    container.load(billingModuleNats({}));

    container.bind('PubSub').toConstantValue(pubsub);
    // container.load(workspaceRepositoryModule(settings));
    container.bind<ILogger>('Logger').toConstantValue(hemera.log);
    container.bind('Settings').toConstantValue(settings).whenTargetTagged('microservices', true);
    container.bind('Settings').toConstantValue(settings).whenTargetTagged('default', true);

    const billingService = container.get<IBillingService>(ETypes.BillingService);

    hemera.add({
        // pubsub$: true,
        topic,
        cmd: HemeraCommands.Charge,
    }, async (args: any) => {
        const { amount, customer } = args;
        try {
            hemera.log.debug('Charge %s from client %s', amount, customer);
            await billingService.charge(amount, customer);
        } catch (err) {
            hemera.log.error('Billing service was failed due to [%o]', err);
        }

        return null;
    });

    done();
}


module.exports = Hp(WorkspaceServicePlugin, {
    hemera: '>=2.0.0-0',
    name: require('../package.json').name,
});
