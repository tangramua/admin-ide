import { resolve } from 'url';
import * as Logger from 'bunyan';
import * as qs from 'query-string';
import { config } from '../config';
import * as request from 'request-promise';
import { inject, injectable } from 'inversify';

import {
    IActivityRecord,
    IActivityStorage,
    IActivityCollector,
    IZipkinRequestOrder,
    IZipkinSearchRequest,
    IActivityZipkinService,
    IActivityCollectRequest,
} from '../interfaces';
import { EActivityScopes, TYPES as ActivityTypes } from '../constants';

export enum ZIPKIN_ROUTES {
    TAGS = 'tags',
    TRACE = 'trace',
    SPANS = 'spans',
    SEARCH = 'search',
    TRACES = 'traces',
    SERVICE = 'service',
}

@injectable()
export class ActivityZipkinService implements IActivityZipkinService, IActivityCollector {
    private logger: Logger;
    private baseURL = config.ZIPKIN_URL;

    public routes = {
        [ZIPKIN_ROUTES.SPANS]: () => `/api/v1/spans`,
        [ZIPKIN_ROUTES.SERVICE]: ({ serviceName }) => `/api/v2/spans?serviceName=${serviceName}`,
        [ZIPKIN_ROUTES.TAGS]: ({ image }) => `/v2/${image}/tags/list`,
        [ZIPKIN_ROUTES.SEARCH]: ({ request }) => `/api/v2/spans?${qs.stringify({ ...request },
            { sort: (m, n) => (IZipkinRequestOrder.indexOf(m) - IZipkinRequestOrder.indexOf(n)) })}`,
    };

    constructor(
        @inject('Logger') logger: Logger,
        @inject(ActivityTypes.ActivityStorage) protected storage: IActivityStorage,
    ) {
        this.logger = logger.child({ className: ActivityZipkinService });
    }

    public endpoint(route, input, identity?) {
        const fn = this.routes[route];
        const api = fn(input, identity);
        return resolve(this.baseURL, api);
    }

    public headers(...data: any[]) {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
    }

    public user({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.User, payload: args.payload } as any);
    }

    public team({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.Team, payload: args.payload } as any);
    }

    public organization({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.Organization, payload: args.payload } as any);
    }

    public workspace({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.Workspace, payload: args.payload } as any);
    }

    public cluster({ key, timestamp, ...args }) {
        this.collect({ target: key, timestamp, scope: EActivityScopes.Cluster, payload: args.payload } as any);
    }

    public active(scope: string) {
        return this.storage.active(scope);
    }

    public inactive(scope: string) {
        return this.storage.inactive(scope);
    }

    public search() {
        throw new Error('Not implemented!');
    }

    public async collect(request: IActivityCollectRequest) {
        this.logger.info('Collecting activity request %o', { request });

        try {
            const result = await this.request(ZIPKIN_ROUTES.SPANS, {}, {
                method: 'post',
                body: [request],
            });

            return true;
        } catch (e) {
            this.logger.error('Failed collecting request %o with error %o ', request, e);
            return false;
        }
    }

    public async request(route, input, options = {} as any) {
        const endpoint = this.endpoint(route, input);

        try {
            const response = await fetch(endpoint, {
                headers: this.headers(options),
                method: options.method || 'get',
                ...options, // can rewrite method and headers,
            });

            return options.fetch ? options.fetch(response) : response;
        } catch (e) {
            console.error('Error: ', e.error);
            return {};
        }
    }

    async get() {}
    unset = async () => true;
}
