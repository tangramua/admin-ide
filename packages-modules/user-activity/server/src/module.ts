import * as _ from 'lodash';
import { TaggedType } from '@common-stack/core';
import { Feature } from '@common-stack/server-core';
import {  schema } from './graphql/schema';
import { resolver } from './graphql/resolvers';
import { TYPES } from './constants';
import { activityModule, activityModuleNats } from './containers';
import { interfaces } from 'inversify';
import { IActivityCollector } from './interfaces';
import { config } from './config';

const createActivityServiceFunc = (container: interfaces.Container) => {
    const environment = container.get('Environment');
    if (environment === 'development') {
        return {
            activityService: container.get<IActivityCollector>(TYPES.ActivityCollector),
        };
    } else {
        return {
            activityService: container.getNamed<IActivityCollector>(TYPES.ActivityCollector, TaggedType.MICROSERVICE),
        };
    }
};


export default new Feature({
    createContainerFunc: config.isDevelopment ? [activityModule] : [activityModule, activityModuleNats],
    createServiceFunc: createActivityServiceFunc,
    schema: schema,
    createResolversFunc: resolver,
    beforeware: [
        (app) => {
            app.use('/graphql', (req, res, next) => {
                const user = _.get(req.user, 'sub');
                if (req.services) {
                    req.services.activityService.user({ key: user, timestamp: Date.now() });
                }

                next();
            });
        },
    ],
});
