
import * as _ from 'lodash';
import { resolve } from 'url';
import * as Logger from 'bunyan';
import Hemera from 'nats-hemera';
import { execSync } from 'child_process';
import Axios, { AxiosInstance } from 'axios';
import { injectable, inject, tagged } from 'inversify';
import { RESTDataSource } from 'apollo-datasource-rest';

import { IMonocularService, IHelmSettings } from '../interfaces';
import { BASE_PATH, MONOCULAR_ROUTES, SELECTED_CHARTS, TYPES } from '../constants';

@injectable()
export class Monocular {
    public baseURL = BASE_PATH;

    public http: AxiosInstance;

    constructor(
        @inject (TYPES.IMonocularService) private service: IMonocularService,
    ) {
        this.http = Axios.create();
    }

    public routes = {
        [MONOCULAR_ROUTES.CHARTS]: () => `/api/chartsvc/v1/charts`,
        [MONOCULAR_ROUTES.README]: ({ url }) => `/api/chartsvc/${url}`,
        [MONOCULAR_ROUTES.SEARCH]: ({ search }) => `/api/chartsvc/v1/charts/search?name=${search}`,
        [MONOCULAR_ROUTES.CHART]: ({ repo, chart }) => `/api/chartsvc/v1/charts/${repo}/${chart}`,
        [MONOCULAR_ROUTES.VERSIONS]: ({ chart }) =>
            `/api/chartsvc/v1/charts/${_.get(chart, 'attributes.repo.name')}/${_.get(chart, 'attributes.name')}/versions`,
    };

    public endpoint(url, route, input, identity?) {
        const fn = this.routes[route];
        const api = fn(input, identity);
        return resolve(url, api);
    }

    public headers(...data: any[]) {
        return {};
    }

    public async request(url: string, route: string, input, options = {} as any) {
        const endpoint = this.endpoint(url, route, input);

        try {
            const response = await this.http.get(endpoint, { headers: this.headers(options) })
                .then(({ data }) => data)
                .then((res) => res.data || res); // get data field from response

            return options.fetch ? options.fetch(response) : response;
        } catch (e) {
            return {};
        }
    }

    public async values(url, args) {
        const chart = await this.chart(url, args);
        const values = await this.service.values(chart);

        return values ? values.toString() : '';
    }

    public icon(chart) {
        const icon = _.get(chart, 'relationships.latestChartVersion.data.icons[0].path', false);
        const url = icon ? resolve(this.baseURL, `api/${icon}`) : null;
        return url;
    }

    public async charts(url, { search = '', filtered = false }) {
        const endpoint = !search
            ? MONOCULAR_ROUTES.CHARTS
            : MONOCULAR_ROUTES.SEARCH;

        const stacks = (await this.request(url, endpoint, { search, filtered }));

        if (!stacks) {
            return [];
        }

        return !filtered
            ? stacks
            : _.filter(stacks, chart => _.includes(SELECTED_CHARTS, chart.attributes.name));
    }

    public async chart(url, { repo = '', chart = '' }) {
        return this.request(url, MONOCULAR_ROUTES.CHART, { repo, chart });
    }

    public async versions(url, args) {
        const chart = await this.chart(url, args);
        return this.request(url, MONOCULAR_ROUTES.VERSIONS, { chart });
    }

    public async readme(repo, args) {
        const chart = await this.chart(repo, args);

        const url = _.get(chart, 'relationships.latestChartVersion.data.readme', '');
        const readme = await this.request(repo, MONOCULAR_ROUTES.README, { url }, { plain: true });

        return readme ? readme.toString() : '';
    }
}
