import { ManagementClient, AuthenticationClient } from 'auth0';

import { config } from '../../config';
import { logger } from '@cdm-logger/server';
import { AuthenticationError } from 'apollo-server-errors';
import { Cache } from '@common-stack/cache-api-server';

/**
 * The Auth0 class configures and exposes Auth0's ManagementClient and AuthenticationClient classes.
 */
export class Auth0Client {

    private static instance: Auth0Client;
    /**
     * Auth0's management client class.
     * https://auth0.github.io/node-auth0/module-management.ManagementClient.html
     */
    public managementClient: ManagementClient;
    /**
     * Auth0's authentication client class.
     * https://auth0.github.io/node-auth0/module-auth.AuthenticationClient.html
     */
    public authenticationClient: AuthenticationClient;

    /**
     * The applications client id
     */
    public clientId: string;

    constructor() {
        this.managementClient = new ManagementClient({
            domain: config.AUTH0_DOMAIN,
            clientId: config.AUTH0_CLIENT_ID,
            clientSecret: config.AUTH0_CLIENT_SECRET,
            scope: 'read:users update:users update:users_app_metadata',
            tokenProvider: {
                enableCache: true,
                cacheTTLInSeconds: 10,
            },
            retry: {
                enabled: true,
            },
        });
        this.authenticationClient = new AuthenticationClient({
            domain: config.AUTH0_DOMAIN,
            clientId: config.AUTH0_CLIENT_ID,
            clientSecret: config.AUTH0_CLIENT_SECRET,
        });
    }

    private getTTL(exp) {
        const now = parseInt(`${Date.now() / 1000}`, null);
        return exp - now; // Time to live in cache in seconds.
    }

    public static get Instance() {
        return this.instance || (this.instance = new this());
    }

    /**
     * api call to auth0 to fetch user info by id
     *
     * @private
     * @param {string} userId
     * @returns {Promise<Auth0UserModel>}
     * @memberof Auth0AuthenticationService
     */
    public async getUserInfoFromAuth0(userId: string) {
        let user;
        try {
            logger.trace('(Auth0Client getUserInfoFromAuth0) pulling profile using api call for user [%s]', userId);
            user = await this.managementClient.getUser({ id: userId });
        } catch (err) {
            logger.error('Unable to fetch User [%s] data from Auth0 due to [%j]', userId, err);
            throw new AuthenticationError(err);
        }
        return user;
    }

    public async getProfile(userId: string, exp: number) {
        try {
            // Try to get user profile from cache
            const cacheResult = await Cache.Instance.get(userId);
            if (cacheResult) {
                logger.trace('(Auth0Client getProfile) got auth0 user profile from cache using userId: [%s]', userId);
                return cacheResult;
            }
        } catch (err) {
            logger.error('Redis Cache might have failed due to [%o]', err);
        }
        // If not in cache get user profile from auth0
        const profile = await this.getUserInfoFromAuth0(userId);
        try {
            Cache.Instance.set(userId, profile, { maxAge: this.getTTL(exp) } as any);
        } catch (err) {
            logger.error('Redis Cache might have failed due to [%o]', err);
        }

        return profile;
    }

    public async getClientProfile(accessToken) {
        let profile;
        try {
            profile = await this.authenticationClient.getProfile(accessToken);
        } catch (err) {
            logger.error('Unable to fetch Profile data from Auth0 due to [%j]', err);
            throw new AuthenticationError(err);
        }
        return profile;
    }
}
