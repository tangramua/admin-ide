

import { ContainerModule, interfaces } from 'inversify';
import {
    ISubscriptionRepository,
} from '../interfaces';
import { TYPES } from '../constants';
import { SubscriptionRepository } from '../store';
import { IMongoDBSettings } from '@common-stack/store-mongo';

export const organizationModule: (settings: any, pubsub) => interfaces.ContainerModule =
    (settings: IMongoDBSettings) => new ContainerModule((bind: interfaces.Bind) => {

        bind<ISubscriptionRepository>(TYPES.ISubscriptionRepository).to(SubscriptionRepository);

    });
