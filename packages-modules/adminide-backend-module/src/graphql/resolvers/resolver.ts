

import { IResolverOptions } from '@common-stack/server-core';


export const resolver = (options: IResolverOptions) => ({

    Query: {
        services: (root, args, context) => {
            return context;
        },
    },
});
