
import * as _ from 'lodash';
import { resolve } from 'url';
import * as Logger from 'bunyan';
import Hemera from 'nats-hemera';
import { execSync } from 'child_process';
import { injectable, inject, tagged } from 'inversify';
import { RESTDataSource } from 'apollo-datasource-rest';

import { IMonocularService, IHelmSettings } from '../interfaces';
import { BASE_PATH, MONOCULAR_ROUTES, SELECTED_CHARTS } from '../constants';

export class MonocularApi extends RESTDataSource implements IMonocularService {
    public service;
    public baseURL = BASE_PATH;

    public routes = {
        [MONOCULAR_ROUTES.CHARTS]: () => `api/v1/charts`,
        [MONOCULAR_ROUTES.README]: ({ url }) => `/api/${url}`,
        [MONOCULAR_ROUTES.SEARCH]: ({ search }) => `api/v1/charts/search?name=${search}`,
        [MONOCULAR_ROUTES.CHART]: ({ repo, chart }) => `api/v1/charts/${repo}/${chart}`,
        [MONOCULAR_ROUTES.VERSIONS]: ({ chart }) =>
            `api/v1/charts/${_.get(chart, 'attributes.repo.name')}/${_.get(chart, 'attributes.name')}/versions`,
    };

    public endpoint(route, input, identity?) {
        const fn = this.routes[route];
        const api = fn(input, identity);
        return api;
    }

    public initialize(args) {
        this.service = args.context.monocularService;
        return (super.initialize as any)(args);
    }

    public headers(...data: any[]) {
        return {};
    }

    public async request(route, input, options = {} as any) {
        const endpoint = this.endpoint(route, input);

        try {
            const response = await this.get(endpoint, {}, { headers: this.headers(options) });
            return options.plain ? response : response.data;
        } catch (e) {
            console.error(e);
            return {};
        }
    }

    public values(chart) {
        return this.service.values(chart);
    }

    public icon(chart) {
        const icon = _.get(chart, 'relationships.latestChartVersion.data.icons[0].path', false);
        const url = icon ? resolve(this.baseURL, `api/${icon}`) : null;
        return url;
    }

    public async charts({ search = '', filtered = false }) {
        const endpoint = !search
            ? MONOCULAR_ROUTES.CHARTS
            : MONOCULAR_ROUTES.SEARCH;

        const stacks = await this.request(endpoint, { search, filtered });
        return !filtered
            ? stacks
            : _.filter(stacks, chart => _.includes(SELECTED_CHARTS, chart.attributes.name));
    }

    public async chart({ repo = '', chart = '' }) {
        return this.request(MONOCULAR_ROUTES.CHART, { repo, chart });
    }

    public async versions(chart) {
        return this.request(MONOCULAR_ROUTES.VERSIONS, { chart });
    }

    public async readme(chart) {
        const url = _.get(chart, 'relationships.latestChartVersion.data.readme', '');
        return await this.request(MONOCULAR_ROUTES.README, { url }, { plain: true });
    }
}
