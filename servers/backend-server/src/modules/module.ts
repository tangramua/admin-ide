import { ContainerModule, interfaces } from 'inversify';
import { Feature } from '@common-stack/server-core';
import GitModule from '@adminide-stack/git-api-server';
import AuthModule from '@adminide-stack/user-auth0-server';
import MonocularModule from '@adminide-stack/monocular-api-server';
import SubscriptionModule from '@adminide-stack/subscription-stripe-server';
import WorkspaceModule, { IAdminSettings} from '@adminide-stack/workspaces-server';
import OrganizationModule from '@adminide-stack/account-api-server';
import MailingModule from '@adminide-stack/mailing-api-server';
import DockerModule from '@adminide-stack/docker-api-server';
// import BillingModule from '@adminide-stack/billing-api-server';
import BackendModule from '@adminide-stack/backend-module';
import SSHModule from '@container-stack/ssh-keygen-server-module';
import UserActivityModule, { IActivitySettings } from '@adminide-stack/user-activity-server';
import { logger } from '@cdm-logger/server';
import { hemeraGen } from './nats-connection';
import { pubsubGen } from './pubsub';
import * as Hemera from 'nats-hemera';
import * as MG from 'nodemailer-mailgun-transport';
import * as nodemailer from 'nodemailer';
import { generateMongo } from '@common-stack/store-mongo';
import { config } from '../config';

export const settings: IAdminSettings & IActivitySettings = {
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
        bind('MongoDBConnection').toConstantValue(settings.mongoConnection);
        // bind('SshKeyDBConnection').toConstantValue(settings.mongoConnection); // Backward compatibility with released @container-stack

        bind('Environment').toConstantValue(process.env.NODE_ENV || 'development');
        bind('Settings').toConstantValue(settings).whenTargetTagged('default', true);
        bind('Settings').toConstantValue(settings).whenTargetTagged('microservice', true);
        bind('PubSub').toConstantValue(pubsubGen());
        bind('IMongoDBSettings').toConstantValue(settings);
        bind('MongoOptions').toConstantValue({});

        if (process.env.NODE_ENV !== 'development') {
            bind('Hemera').toConstantValue(hemeraGen());
        }
    });

const DefaultFeature = new Feature({
    createContainerFunc: [defaultModule],
});
export default new Feature(
    SSHModule,
    DefaultFeature,
    MailingModule,
    DockerModule,
    // BillingModule,
    AuthModule,
    WorkspaceModule,
    SubscriptionModule,
    MonocularModule,
    UserActivityModule,
    GitModule,
    BackendModule,
    OrganizationModule,
);
