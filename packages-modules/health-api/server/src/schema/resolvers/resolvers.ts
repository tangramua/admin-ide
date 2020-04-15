import * as _ from 'lodash';
import * as Logger from 'bunyan';
import { IResolverOptions } from '@common-stack/server-core';
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';

import { IHealthService } from '../../interfaces';

export const resolver: any = (options: IResolverOptions) => ({
    IdeServicesHealth: {
        ide: (root, { workspaceId }, { healthService }: { healthService: IHealthService }) => healthService.health(workspaceId, 'ide'),
        git: (root, { workspaceId }, { healthService }: { healthService: IHealthService }) => healthService.health(workspaceId, 'git'),
        xterm: (root, { workspaceId }, { healthService }: { healthService: IHealthService }) => healthService.health(workspaceId, 'xterm'),
    },
    Query: {
        ideServices: () => null,
        serviceHealth: async (root, { request: { workspaceId, service } }, { user, ...ctx }) =>
            ctx.healthService.health(workspaceId, service),
    },
});

