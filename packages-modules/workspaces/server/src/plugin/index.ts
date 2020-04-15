const Hp = require('hemera-plugin');
const HemeraJoi = require('hemera-joi');
import { NatsPubSub } from 'graphql-nats-subscriptions';
import * as Hemera from 'nats-hemera';
import { WorkspaceServiceCommands, NATS_HEMERA_ADMINIDE_WORKSPACE_UPDATER } from '@adminide-stack/core';
import { Container } from 'inversify';
import * as ILogger from 'bunyan';
import { IWorkspaceService } from '../interfaces';
import { TYPES } from '../constants';
import { adminideServerCoreModule } from '../containers';
import { workspaceRepositoryModule } from '../store';

function WorkspaceServicePlugin(hemera: Hemera<any, any>, options: { settings: any, client: any }, done) {

  const { settings, client } = options;
  const topic = `${NATS_HEMERA_ADMINIDE_WORKSPACE_UPDATER}/${settings.subTopic}`;

  const pubsub = new NatsPubSub({ client, logger: hemera.log });

  /// somewhere here take confinguration from settings and build the configurationService
  ////
  let container = new Container();
  container.load(adminideServerCoreModule({}));
  container.load(workspaceRepositoryModule(settings));
  container.bind<ILogger>('Logger').toConstantValue(hemera.log);
  container.bind('Settings').toConstantValue(settings).whenTargetTagged('microservices', true);
  container.bind('Settings').toConstantValue(settings).whenTargetTagged('default', true);
  container.bind('PubSub').toConstantValue(pubsub);

  const workspacePostService = container.get<IWorkspaceService>(TYPES.IWorkspacePostService);
  hemera.add({
    // pubsub$: true,
    topic,
    cmd: WorkspaceServiceCommands.CREATE_WORKSPACE,
  }, async (args: any) => {
    try {
      hemera.log.debug('Created Workspace Service', args);
      await workspacePostService.createWorkspace(args.request);
    } catch (err) {
      hemera.log.error('Create workspace service was failed due to [%o]', err);
    }

    return null;
  });

  hemera.add({
    // pubsub$: true,
    topic,
    cmd: WorkspaceServiceCommands.REMOVE_WORKSPACE,
  }, async (args: any) => {
    hemera.log.debug('Remove Workspace Service', args);
    await workspacePostService.removeWorkspace(args.request);
    return null;
  });

  hemera.add({
    // pubsub$: true,
    topic,
    cmd: WorkspaceServiceCommands.GET_NAMESPACES,
  }, async (args: any) => {
    hemera.log.debug('Get namespaces Workspace Service', args);
    return await workspacePostService.getNamespaces();
  });
  hemera.add({
    // pubsub$: true,
    topic,
    cmd: WorkspaceServiceCommands.ADD_PROJECT_TO_WORKSPACE,
  }, async (args: any) => {
    hemera.log.debug('Add Project to Worksapce', args);
    await workspacePostService.addProject(args.workspaceId, args.project);
    return null;
  });

  hemera.add({
    // pubsub$: true,
    topic,
    cmd: WorkspaceServiceCommands.ADD_STACKS_TO_WORKSPACE,
  }, async (args: any) => {
    hemera.log.debug('Add Stacks to Worksapce', args);
    await workspacePostService.addStacks(args.workspaceId, args.stacks);
    return null;
  });

  hemera.add({
    // pubsub$: true,
    topic,
    cmd: WorkspaceServiceCommands.UPDATE_WORKSPACE,
  }, async (args: any) => {
    hemera.log.debug('Update Workspace Service', args);
    await workspacePostService.updateWorkspace(args.request);
    return null;
  });

  hemera.add({
    // pubsub$: true,
    topic,
    cmd: WorkspaceServiceCommands.START_WORKSPACE,
  }, async (args: any) => {
    hemera.log.debug('Start Workspace Service', args);
    await workspacePostService.startWorkspace(args.request);
    return null;
  });

  hemera.add({
    // pubsub$: true,
    topic,
    cmd: WorkspaceServiceCommands.STOP_WORKSPACE,
  }, async (args: any) => {
    hemera.log.debug('Stop Workspace Service', args);
    await workspacePostService.stopWorkspace(args.request);
    return null;
  });

  done();
}


module.exports = Hp(WorkspaceServicePlugin, {
  hemera: '>=2.0.0-0',
  name: require('../../package.json').name,
});
