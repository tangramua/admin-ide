import * as _ from 'lodash';

export const resolver: any = (options: any) => ({
    Query: {
        chart: async (root, args, { dataSources }) => dataSources.monocular.chart(args),
        charts: async (root, args: { filtered: boolean, search: string }, { dataSources }) => dataSources.monocular.charts(args),

        getMonocularRegistry: (root, { _id }, context) => {
            return context.monocularRegistryManager.find(_id);
        },

        registryCharts: async (root, { registry, filtered, search}, context) => {
            const obj = await context.monocularRegistryManager.find(registry);
            if (!obj) {
                throw new Error('Registry not found');
            }
            return context.monocularRegistry.charts(obj.url, { filtered, search });
        },

        getRegistryChart: async (root, { registry, ...args }, context) => {
            const obj = await context.monocularRegistryManager.find(registry);
            if (!obj) {
                throw new Error('Registry not found');
            }
            return context.monocularRegistry.chart(obj.url, args);
        },

        allMonocularRegistries: (root, args, context) => {
            const owner_id = _.get(context.user, 'sub');
            return context.monocularRegistryManager.list(owner_id);
        },

        getRegistryChartReadme: async (root, { registry, ...args }, context) => {
            const obj = await context.monocularRegistryManager.find(registry);
            if (!obj) {
                throw new Error('Registry not found');
            }
            return context.monocularRegistry.readme(obj.url, args);
        },
        getRegistryChartValues: async (root, { registry, ...args }, context) => {
            const obj = await context.monocularRegistryManager.find(registry);
            if (!obj) {
                throw new Error('Registry not found');
            }

            return context.monocularRegistry.values(obj.url, args);
        },
        getRegistryChartVersions: async (root, { registry, ...args }, context) => {
            const obj = await context.monocularRegistryManager.find(registry);
            if (!obj) {
                throw new Error('Registry not found');
            }
            return context.monocularRegistry.versions(obj.url, args);
        },

        testMonocularRegistry: (root, { payload }, { monocularRegistryManager }) =>
            monocularRegistryManager.test(payload),
    },

    Mutation: {
        createMonocularRegistry: (root, { payload }, { monocularRegistryManager, user }) =>
            monocularRegistryManager.create({ ...payload, owner_id: user.sub }),
        updateMonocularRegistry: (root, { _id, payload }, { monocularRegistryManager }) =>
            monocularRegistryManager.update(_id, payload),
        removeMonocularRegistry: (root, { _id }, { monocularRegistryManager }) =>
            monocularRegistryManager.remove(_id),
    },
});
