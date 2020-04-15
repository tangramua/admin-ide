import { resolve } from 'url';
import * as qs from 'query-string';
import {  injectable } from 'inversify';
import Axios, { AxiosInstance } from 'axios';

import { REGISTRY_ROUTES } from "./constants";
import { ISearchRequest } from "../interfaces";

@injectable()
export class Registry {
    public http: AxiosInstance;

    constructor() {
        this.http = Axios.create();
    }

    public routes = {
        [REGISTRY_ROUTES.REGISTRY]: () => `/v2/_catalog`,
        [REGISTRY_ROUTES.CONTAINERS]: () => `/images/json`,
        [REGISTRY_ROUTES.TAGS]: ({ image }) => `/v2/${image}/tags/list`,
        [REGISTRY_ROUTES.SEARCH]: ({ request }) => `/images/search?${qs.stringify({ ...request, filters: qs.stringify(request.filters || {}) })}`,
    };

    public endpoint(url, route, input, identity?) {
        const fn = this.routes[route];
        const api = fn(input, identity);
        return resolve(url, api);
    }

    public headers(...data: any[]) {
        return {};
    }

    public async request(url, route, input, options = {} as any) {
        const endpoint = this.endpoint(url, route, input);

        try {
            const response = await this.http.get(endpoint, { headers: this.headers(options) })
                .then(({ data }) => data);

            return options.fetch ? options.fetch(response) : response;
        } catch (e) {
            console.error(e);
            return {};
        }
    }

    public async search(url: string, request: ISearchRequest) {
        return this.request(url, REGISTRY_ROUTES.SEARCH, { request });
    }

    public async registry(url: string) {
        return this.request(url, REGISTRY_ROUTES.REGISTRY, {});
    }

    public async imageTags(url: string, image: string) {
        return this.request(url, REGISTRY_ROUTES.TAGS, { image });
    }

    public async containers(url: string) {
        return this.request(url, REGISTRY_ROUTES.CONTAINERS, {});
    }
}
