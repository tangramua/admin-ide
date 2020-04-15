import { IZipkinClient, ISpan } from '../interfaces';

export const createResolvers = (client: IZipkinClient) => ({
    Query: {
        health: () => 'ok',
    },
    Mutation: {
        batchSpan: (root, { queue }, context) => client.queue(queue),
        sendSpan: (root: any, { request }: { request: ISpan }, context: any) => client.span(request),
    },
});
