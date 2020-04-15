import * as ILogger from 'bunyan';
const Hp = require('hemera-plugin');
import { Container } from 'inversify';
import * as Hemera from 'nats-hemera';
const HemeraJoi = require('hemera-joi');
import { NatsPubSub } from 'graphql-nats-subscriptions';

import { IHealthService } from '../interfaces';
import { healthServerCoreModule } from '../containers';
import { TYPES, HEMERA_HEALTH_TOPIC, HemeraHealthActions } from '../constants';

function WorkspaceServicePlugin(
  hemera: Hemera<any, any>,
  options: { service: string, settings: any, client: any },
  done,
) {

  const { settings, client } = options;
  const topic = `${HEMERA_HEALTH_TOPIC}/${settings.subTopic}/${options.service}`;

  const pubsub = new NatsPubSub({ client, logger: hemera.log });

  let container = new Container();
  container.load(healthServerCoreModule({}));
  container.bind<ILogger>('Logger').toConstantValue(hemera.log);
  container.bind('Settings').toConstantValue(settings).whenTargetTagged('microservices', true);
  container.bind('Settings').toConstantValue(settings).whenTargetTagged('default', true);
  container.bind('PubSub').toConstantValue(pubsub);

  const healthService = container.get<IHealthService>(TYPES.IHeathService);
  hemera.add({
    topic,
    cmd: HemeraHealthActions.Health,
  }, async (args: any) => {
    try {
      hemera.log.debug('Service healthcheck: ', args);
      await healthService.health(args.workspaceId, args.service);
    } catch (err) {
      hemera.log.error('Service health check was failed: [%o]', err);
    }

    return null;
  });

  done();
}


module.exports = Hp(WorkspaceServicePlugin, {
  hemera: '>=2.0.0-0',
  name: require('../../package.json').name,
});
