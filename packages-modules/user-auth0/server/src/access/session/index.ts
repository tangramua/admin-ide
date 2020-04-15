import { Feature } from '@common-stack/server-core';

import { attachSession } from './middleware';

export default new Feature({
    middleware: app => {
        app.use((req, res, next) => {
            try {
                attachSession(req);
                next();
            } catch (e) {
                next(e);
            }
        });
    },
});
