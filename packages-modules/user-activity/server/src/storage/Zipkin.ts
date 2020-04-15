import * as _ from 'lodash';
import { resolve } from 'url';
import * as Logger from 'bunyan';
import * as qs from 'query-string';
import { injectable, inject, tagged } from 'inversify';

import { config } from '../config';
import { MODELS, ACTIVITY_DEBOUNCE, EActivityScopes } from '../constants';
import { ActivityRecord } from '../classes/ActivityRecord';
import { IActivityStorage, IZipkinRequestOrder, IActivityRecord } from '../interfaces';

export enum ZIPKIN_ROUTES {
    TAGS = 'tags',
    SERVICE = 'service',
    TRACE = 'trace',
    TRACES = 'traces',
    SPANS = 'spans',
    SEARCH = 'search',
}

const NAMESPACES_QUERY = (debounce = 21600000, limit = 100000) =>
    `limit=${limit}&lookback=${debounce * Math.pow(10, 6)}&serviceName=frontend&annotationQuery=type=ns`;

const TRACE_QUERY = (namespace, debounce = 21600000) =>
    `?annotationQuery=namespace=${namespace}&limit=1&lookback=${debounce * Math.pow(10, 6)}&serviceName=frontend`;

@injectable()
export class ZipkinStorage implements IActivityStorage {
    private logger: Logger;
    private baseURL = config.ZIPKIN_URL;

    public routes = {
        [ZIPKIN_ROUTES.SPANS]: () => `/api/v1/spans`,
        [ZIPKIN_ROUTES.TAGS]: ({ image }) => `/v2/${image}/tags/list`,
        [ZIPKIN_ROUTES.TRACES]: (query?) => `/api/v2/traces?${NAMESPACES_QUERY()}`,
        [ZIPKIN_ROUTES.TRACE]: (namespace?) => `/api/v2/traces?${TRACE_QUERY(namespace)}`,
        [ZIPKIN_ROUTES.SERVICE]: ({ serviceName }) => `/api/v2/spans?serviceName=${serviceName}`,
        [ZIPKIN_ROUTES.SEARCH]: ({ request }) => `/api/v2/spans?${qs.stringify({ ...request },
            { sort: (m, n) => IZipkinRequestOrder.indexOf(m) >= IZipkinRequestOrder.indexOf(n) as any })}`,
    };

    constructor(
        @inject('Logger') logger: Logger,
    ) {
        this.logger = logger.child({ className: ZipkinStorage });
    }

    private __stringify(record: IActivityRecord) {
        return JSON.stringify(record);
    }

    private __parse(str: string) {
        return JSON.parse(str);
    }

    public endpoint(route, input, identity?) {
        const fn = this.routes[route];
        const api = fn(input, identity);
        return resolve(this.baseURL, api);
    }

    private async __hash() {
        const data = await this.request(ZIPKIN_ROUTES.TRACES, {});

        return _
            .reduce(data, (acc, els) => acc.concat(els), [])
            .map(el => {
                return ({ id: el.id, tags: el.tags, namespace: el.tags.namespace, timestamp: el.timestamp });
            })
            .filter(el => el.timestamp)
            .reduce((acc, el) =>
                Object.assign(acc, {
                    [el.namespace]: el.timestamp > ((acc[el.namespace] || {}).timestamp || 0) ? el : acc[el.namespace],
                }), {});
    }

    public headers(...data: any[]) {
        return {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        };
    }

    public async active(scope: string): Promise<any> {
        const now = Date.now();
        const hash = await this.__hash();
        return _
            .map(hash, (el: any, ns: number) =>
                new ActivityRecord({ _id: el.id, status: true, target: EActivityScopes.Workspace, timestamp: el.timestamp }))
            .filter((value: any) => !this.expired(value, now));
    }

    private expired(record: IActivityRecord, now: number = Date.now()) {
        return now - record.timestamp > ACTIVITY_DEBOUNCE;
    }

    public async inactive(scope: string): Promise<any> {
        const now = Date.now();
        const hash = await this.__hash();

        return  _
            .map(hash, (el: any, ns: number) => {
                return new ActivityRecord({
                    status: true,
                    _id: el.tags.connectionId,
                    target: EActivityScopes.Workspace,
                    timestamp: parseInt((el.timestamp / Math.pow(10, 6) as any), null),
                });
            })
            .filter((value: any) => this.expired(value, now));
    }

    public async get(id: string) {
        return this.request(ZIPKIN_ROUTES.TRACE, { namespace: id }, {});
    }

    public async delete(id: string): Promise<any> {
        throw new Error('Not supported!');
    }

    public async set(record: IActivityRecord): Promise<any> {
        throw new Error('Not supported!');
    }

    public async request(route, input, options = {} as any) {
        const endpoint = this.endpoint(route, input);

        try {
            const response = await fetch(endpoint, {
                headers: this.headers(options),
                method: options.method || 'get',
                ...options, // can rewrite method and headers,
            });

            return options.fetch ? options.fetch(await response.json()) : await response.json();
        } catch (e) {
            console.error('Error: ', e.error);
            return {};
        }
    }
}
