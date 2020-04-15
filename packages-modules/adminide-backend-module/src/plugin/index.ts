import * as ILogger from 'bunyan';
const Hp = require('hemera-plugin');
import * as Hemera from 'nats-hemera';
import { Container } from 'inversify';
const HemeraJoi = require('hemera-joi');
import { NatsPubSub } from 'graphql-nats-subscriptions';

import { adminideModule } from '../containers';
import { IPrometheusService, IResourceService } from '../interfaces';
import { Types, HemeraCmd, HemeraTopics, WORKSPACE_RESOURCE_QUERY } from '../constants';
import { WorkspaceWatcher } from '../services';

function WorkspaceServicePlugin(hemera: Hemera<any, any>, options: { settings: any, client: any }, done) {

  const { settings, client } = options;
  const topics = {
    Prometheus: `${HemeraTopics.Prometheus}/${settings.subTopic}`,
    Utilization: `${HemeraTopics.Utilization}/${settings.subTopic}`,
  };

  const pubsub = new NatsPubSub({ client, logger: hemera.log });

  let container = new Container();
  container.load(adminideModule(settings));
  container.bind('Hemera').toConstantValue(hemera);
  container.bind<ILogger>('Logger').toConstantValue(hemera.log);
  container.bind('Settings').toConstantValue(settings).whenTargetTagged('default', true);
  container.bind('Settings').toConstantValue(settings).whenTargetTagged('microservice', true);

  const watcher = container.get<WorkspaceWatcher>(Types.WorkspaceWatcher);
  const resources = container.get<IResourceService>(Types.ResourcesService);
  const prometheus = container.get<IPrometheusService>(Types.PrometheusService);

  hemera.add({
    cmd: HemeraCmd.Query,
    topic: topics.Prometheus,
  }, async (args: any) => {
    try {
      const { query } = args.request;
      hemera.log.debug('Run promql query %s', query);
      return await prometheus.query(query);
    } catch (err) {
      hemera.log.error('Can not run promql query! Failed with error [%o]', err);
    }

    return null;
  });

  hemera.add({
    cmd: HemeraCmd.Collect,
    topic: topics.Utilization,
  }, async (args: any) => {
    try {
      const { namespace } = args.request;
      hemera.log.debug('Fetching resources usage for namespace %s', namespace);
      return await resources.collect(namespace);
    } catch (err) {
      hemera.log.error('Resources fetching was failed due to [%o]', err);
    }

    return null;
  });

  hemera.add({
    cmd: HemeraCmd.Scan,
    topic: topics.Utilization,
  }, async (args: any) => {
    try {
      const { namespace } = args.request;
      hemera.log.debug('Scanning workspace resources usage...', namespace);
      return await resources.collect(namespace);
    } catch (err) {
      hemera.log.error('Scanning was failed due to [%o]', err);
    }

    return null;
  });

  done();
}


module.exports = Hp(WorkspaceServicePlugin, {
  hemera: '>=2.0.0-0',
  name: require('../../package.json').name,
});
