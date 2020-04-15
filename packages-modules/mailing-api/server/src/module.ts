import * as _ from 'lodash';
import { interfaces } from 'inversify';
import { Feature } from '@common-stack/server-core';

import { Types } from './constants';
import { moduleFunc } from './containers';

const createServiceFunc = (container: interfaces.Container) => ({
    mailer: container.get(Types.MailerService),
});

export default new Feature({
    schema: [],
    createServiceFunc,
    createContainerFunc: [moduleFunc],
});
