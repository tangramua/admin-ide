import * as _ from 'lodash';
import * as qs from 'query-string';
import { RESTDataSource, RequestOptions } from 'apollo-datasource-rest';

import { IDockerRegistryService, ISearchRequest, IFilterItem } from '../interfaces';

export enum REGISTRY_ROUTES {
    TAGS = 'tags',
    SEARCH = 'search',
    REGISTRY = 'registry',
    CONTAINERS = 'containers',
}

export class RegistryService extends RESTDataSource implements IDockerRegistryService {
    public baseURL = 'http://admin:PrepTrain2016@registery.dev.cdebase.com';

    public routes = {
        [REGISTRY_ROUTES.REGISTRY]: () => `/v2/_catalog`,
        [REGISTRY_ROUTES.CONTAINERS]: () => `/images/json`,
        [REGISTRY_ROUTES.TAGS]: ({ image }) => `/v2/${image}/tags/list`,
        [REGISTRY_ROUTES.SEARCH]: ({ request }) => `/images/search?${qs.stringify({ ...request, filters: qs.stringify(request.filters || {}) })}`,
    };

    public async resolveURL(request: RequestOptions): Promise<any> {
        return super.resolveURL(request);
    }

    public endpoint(route, input, identity?) {
        const fn = this.routes[route];
        const api = fn(input, identity);
        return api;
    }

    public headers(...data: any[]) {
        return {};
    }

    public async request(route, input, options = {} as any) {
        const endpoint = this.endpoint(route, input);

        try {
            const response = await this.get(endpoint, {}, { headers: this.headers(options) });
            return options.fetch ? options.fetch(response) : response;
        } catch (e) {
            console.error(e);
            return {};
        }
    }

    public async search(request: ISearchRequest) {
        return this.request(REGISTRY_ROUTES.SEARCH, { request })
    }

    public async registry() {
        return this.request(REGISTRY_ROUTES.REGISTRY, {})
    }

    public async imageTags(image: string) {
        return this.request(REGISTRY_ROUTES.TAGS, { image });
    }

    public async containers() {
        return this.request(REGISTRY_ROUTES.CONTAINERS, {});
    }
}
