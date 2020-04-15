import * as _ from 'lodash';
import { interfaces } from 'inversify';
import { logger } from '@common-stack/server-core';
import { Feature } from '@common-stack/server-core';
import { jwtVerifyRS256Middleware, profileMiddleware, skipErrorMiddleware } from './middlewares';

import access from './access';
import auth0 from './auth/auth0';
import { config } from './config';
import { schema, resolver, authRS256directive, authHeaderContext, userContext } from './graphql';

import { ssh, stripe } from './federation-services';

export default new Feature({
    schema: schema as any,
    federation: [ssh, stripe],
    createResolversFunc: resolver,
    createDirectivesFunc: authRS256directive,
    createContextFunc: [authHeaderContext, userContext],
    beforeware: [
        (app) => app.use('/graphql', jwtVerifyRS256Middleware, profileMiddleware, skipErrorMiddleware),
    ],
} as any, access, auth0);
