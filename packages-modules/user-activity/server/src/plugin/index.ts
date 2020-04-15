import * as ILogger from 'bunyan';
const Hp = require('hemera-plugin');
import * as Hemera from 'nats-hemera';
import { Container } from 'inversify';
const HemeraJoi = require('hemera-joi');
import { NatsPubSub } from 'graphql-nats-subscriptions';

import { activityModule } from '../containers';
import { IActivityCollector, IActivityStorage } from '../interfaces';
import { TYPES, HemeraCommands, HemeraTopics, EActivityScopes } from '../constants';

function WorkspaceServicePlugin(hemera: Hemera<any, any>, options: { settings: any, client: any }, done) {

  const { settings, client } = options;
  const topic = `${HemeraTopics.ActivityCollector}/${settings.subTopic}`;

  const pubsub = new NatsPubSub({ client, logger: hemera.log });

  let container = new Container();
  container.load(activityModule(settings));
  container.bind('Hemera').toConstantValue(hemera);
  container.bind<ILogger>('Logger').toConstantValue(hemera.log);
  container.bind('Settings').toConstantValue(settings).whenTargetTagged('default', true);
  container.bind('Settings').toConstantValue(settings).whenTargetTagged('microservice', true);

  const storage = container.get<IActivityStorage>(TYPES.ActivityStorage);
  const collector = container.get<IActivityCollector>(TYPES.ActivityCollector);
  hemera.add({
    topic,
    cmd: HemeraCommands.Collect,
  }, async (args: any) => {
    try {
      const { key, user, timestamp, payload = {}, scope = EActivityScopes.Default } = args.request;
      hemera.log.debug('Collect user activity', args);
      return await collector.collect({key, user, timestamp, scope, payload});
    } catch (err) {
      hemera.log.error('Activity saving was failed due to [%o]', err);
    }

    return null;
  });

  hemera.add({
    topic,
    cmd: HemeraCommands.StorageGetInactive,
  }, async (args: any) => {
    try {
      const { scope = EActivityScopes.Default } = args.request;
      hemera.log.debug('Get inactives for scope %s ', scope);
      return await collector.inactive(scope);
    } catch (err) {
      hemera.log.error('Can not get inactives. Failed with error [%o]', err);
    }

    return null;
  });

  hemera.add({
    topic,
    cmd: HemeraCommands.StorageGetActive,
  }, async (args: any) => {
    try {
      const { scope = EActivityScopes.Default } = args.request;
      hemera.log.debug('Get active keys for scope %s ', scope);
      return await collector.active(scope);
    } catch (err) {
      hemera.log.error('Can not get active keys. Failed with error [%o]', err);
    }

    return null;
  });

  // Activity Storage actions
  hemera.add({
    topic,
    cmd: HemeraCommands.StorageGet,
  }, async (args: any) => {
    try {
      const { record } = args.request;
      hemera.log.debug('Saving activity record: [%o]', record);
      return await storage.set(record);
    } catch (err) {
      hemera.log.error('Can not set to ActivityStorage. Saving failed with error [%o]', err);
    }

    return null;
  });

  hemera.add({
    topic,
    cmd: HemeraCommands.StorageGet,
  }, async (args: any) => {
    try {
      const { id } = args.request;
      hemera.log.debug('Fetching activity record for %s', id);
      return await storage.get(id);
    } catch (err) {
      hemera.log.error('Can not get active keys. Fetching failed with error [%o]', err);
    }

    return null;
  });

  hemera.add({
    topic,
    cmd: HemeraCommands.StorageDelete,
  }, async (args: any) => {
    try {
      const { id } = args.request;
      hemera.log.debug('Deletinng activity record for key %s', id);
      return await storage.delete(id);
    } catch (err) {
      hemera.log.error('Can not delete activity object. Deliting was failed with error [%o]', err);
    }

    return null;
  });

  done();
}


module.exports = Hp(WorkspaceServicePlugin, {
  hemera: '>=2.0.0-0',
  name: require('../../package.json').name,
});
