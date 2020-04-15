import { IResolverOptions } from '@common-stack/server-core';
import { IActivityCollector } from '../../interfaces';


export const resolver: any = (options: IResolverOptions) => ({

    Mutation: {
        collect: (root, { request }, context: { activityService: IActivityCollector }) => {
            if (context && context.activityService) {
                context.activityService.collect(request);
            }
        },
    },
});
