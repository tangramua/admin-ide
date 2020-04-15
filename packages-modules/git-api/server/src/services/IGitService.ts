import * as _ from 'lodash';
import { resolve } from 'url';
import { RESTDataSource } from 'apollo-datasource-rest';
import { IGitRepository, IBranch, IPullRequest, ICommit } from './IGitRepository';

export enum EProviderRoutes {
    USER = 'USER',
    COMMIT = 'COMMIT',
    SEARCH = 'SEARCH',
    BRANCHES = 'BRANCHES',
    REPOSITORIES = 'REPOSITORIES',
    PULL_REQUEST = 'PULL_REQUEST',
}

export interface IServiceInput {
    user: any;
    query?: String;
    commit?: String;
    branch?: String;
    provider?: String;
    repository?: String;
}

export interface IGitUser {
    id: string;
    name: string;
    email?: string;
}

export interface IGitTransform {
    user?(data: any, input?: IServiceInput): IGitUser;
    commit(data: any, input?: IServiceInput): ICommit;
    branch(data: any, input?: IServiceInput): IBranch;
    request(data: any, input?: IServiceInput): IPullRequest;
    repository(data: any, input?: IServiceInput): IGitRepository;
}

export interface IGitService {
    routes: any;
    basepath: String;
    transform: IGitTransform;
    options: IServiceProviderOptions;
    request(route: String, input: IServiceInput, options: any): Promise<any>;

    commit(input: IServiceInput, options: any, profile?: any): Promise<ICommit>;
    branches(input: IServiceInput, options: any, profile?: any): Promise<IBranch[]>;
    search(input: IServiceInput, options: any, profile?: any): Promise<IGitRepository[]>;
    requests(input: IServiceInput, options: any, profile?: any): Promise<IPullRequest[]>;
    repositories(input: IServiceInput, options: any, profile?: any): Promise<IGitRepository[]>;
}

export interface IServiceProviderOptions {
    headers: any;
    profile?: any;
    identity?: any;
}

export abstract class AbstractProvider extends RESTDataSource {
    public routes = {};
    public basepath = '';
    public transform: IGitTransform;
    public options: IServiceProviderOptions = {
        headers: {},
    };

    public endpoint(route, input, identity?, profile?) {
        const fn = this.routes[route];
        const api = fn(input, identity, profile);

        return resolve(this.basepath, api);
    }

    public nick(identity, input, profile) {
        const requested = input.user.nickname;
        const username = _.get(profile, 'username');

        console.log('username: ', { identity, profile });

        const nickname = _.get(identity, 'profileData.nickname');
        const userId = _.get(identity, 'profileData.user_id');
        const nodeId = _.get(identity, 'profileData.node_id');

        return requested || username || nickname || userId || nodeId;
    }

    public auth(options): any {
        throw new Error('Not implemented');
    }

    public headers(options) {
        return this.auth(options);
    }

    public async request(route, input, options, profile = {}) {
        const identity = _.find(
            options.profile.identities,
            record => record.connection.toLowerCase() === input.provider.toLowerCase());

        // Workaround for main identity objects
        if (!identity.nickname) {
            identity.profileData = {
                ...options.profile,
                nickname: options.profile.username,
            };
        }

        const endpoint = this.endpoint(route, input, identity, profile);

        try {
            return this.get(endpoint, {}, { headers: this.headers(options) });
        } catch (e) {
            console.error(e);
            return {};
        }
    }

    public async user(input, options, profile) {
        const identity = await this.request(EProviderRoutes.USER, input, options, profile);
        return _.map(identity, item => this.transform.user(item, input));
    }

    public async branches(input, options, profile) {
        const list = await this.request(EProviderRoutes.BRANCHES, input, options, profile);
        return _.map(list, item => this.transform.branch(item, input));
    }

    public async commit(input, options, profile) {
        const item = await this.request(EProviderRoutes.COMMIT, input, options, profile);
        return this.transform.commit(item, input);
    }

    public async repositories(input, options, profile) {
        const list = await this.request(EProviderRoutes.REPOSITORIES, input, options, profile);
        return _.map(list, item => this.transform.repository(item, input));
    }

    public async search(input, options, profile) {
        const list = await this.request(EProviderRoutes.SEARCH, input, options, profile);
        return _.map(list, item => this.transform.repository(item, input));
    }

    public async requests(input, options, profile) {
        const list = await this.request(EProviderRoutes.PULL_REQUEST, input, options, profile);
        return _.map(list, item => this.transform.request(item, input));
    }
}
