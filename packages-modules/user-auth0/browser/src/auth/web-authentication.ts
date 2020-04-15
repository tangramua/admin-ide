import { BehaviorSubject } from 'rxjs';
import { of } from 'rxjs/observable/of';
import { timer } from 'rxjs/observable/timer';
import { mergeMap } from 'rxjs/operators';

import { Auth0DecodedHash, Auth0Error, WebAuth } from 'auth0-js';
import { IUserProfile } from '@adminide-stack/user-core';
import { IAuth0Authentication } from '../interfaces';
import jwtDecode from 'jwt-decode';
import { logger } from '@cdm-logger/client';
import { config } from '../config';
import { AuthErrors } from '@adminide-stack/common';

interface IAuthStatic {
    readonly Instance: IAuth0Authentication & { state$?: any };
}

export enum EAuthStatus {
    Expired = 'expired',
    EmptyToken = 'empty_token',
    Authenticated = 'authenticated',
}

export interface IAuthStatus {
    token?: string;
    status: EAuthStatus;
}

/**
 * Web based Auth0 authentication
 *
 * @export default
 * @class WebAuthentication
 * @implements {Auth0Authentication}
 */
export const Auth: IAuthStatic = class WebAuthentication implements IAuth0Authentication {
    public state$ = new BehaviorSubject(this.isAuthenticated);

    private static instance: WebAuthentication;

    /**
     * @property
     * @type {number}
     * @memberof WebAuthentication
     */
    // tslint:disable-next-line:no-any
    // private tokenRenewalTimeout: number;

    // private tick$ = Observable.interval(3000);
    // private status$ = this.tick$.map(() => this.status);
    // private scheduler$ = this.status$
    //     .filter((status: IAuthStatus) => status.status === EAuthStatus.Expired)
    //     .flatMap(() => this.renewToken());

    // get status(): IAuthStatus {
    //     const now = Date.now();
    //     const token = localStorage.getItem('access_token');
    //     const expiresAt = localStorage.getItem('expires_at') as any;

    //     if (!token) {
    //         return { status: EAuthStatus.EmptyToken };
    //     }

    //     const delay = expiresAt - now;

    //     if (delay > 0) {
    //         return { status: EAuthStatus.Expired, token };
    //     } else {
    //         logger.warn('scheduler not able to renew the token as the token expired by [%s]', delay);
    //     }

    //     return { status: EAuthStatus.Authenticated, token };
    // }

    /**
     * Creates instance of web authentication using Auth0
     */
    constructor() {
        this.handleAuthentication = this.handleAuthentication.bind(this);
        // this.scheduleRenewal();
        (window as any).renewToken = this.renewToken.bind(this);
        if (this.accessToken || this.accessToken !== '') {
            if (this.isTokenExpired) {
                // Attempt to renew tokens, which if successful will call setSession() and scheduleTokenRenewal()
                this.renewToken().catch(error => logger.error('Token renewal error', error));
            } else {
                this.scheduleTokenRenewal();
            }
        }
    }

    public static get Instance() {
        if (typeof window !== 'undefined') {
            return this.instance || (this.instance = new this());
        } else {
            return {} as any;
        }
    }
    /**
     * @property
     * @readonly
     * @memberof WebAuthentication
     */
    get accessToken() {
        const accessToken = localStorage.getItem('access_token');
        if (!accessToken) {
            return '';
        }
        return accessToken;
    }

    /**
     * @property
     * @readonly
     * @memberof WebAuthentication
     */
    get idToken() {
        const idToken = localStorage.getItem('id_token');
        if (!idToken) {
            return '';
        }
        return idToken;
    }

    get auth0UserId() {
        const token = this.idToken;
        if (!token || token === 'undefined') {
            return '';
        }

        try {
            const decoded = jwtDecode(token);
            return decoded.sub;
        } catch(e) {
            return null;
        }
    }

    /**
     * @private
     * @memberof WebAuthentication
     */
    private requestedScopes = 'openid offline_access app_metadata user_metadata profile read:current_user read:messages write:messages update:users update:current_user_identities';

    private _refreshSubscription: any;

    /**
     * @property
     * @private
     * @type {WebAuth}
     * @memberof WebAuthenticationManager
     */
    public auth0: WebAuth = new WebAuth({
        domain: config.AUTH0_DOMAIN,
        clientID: config.AUTH0_CLIENT_ID,
        redirectUri: config.REDIRECT_URL,
        audience: config.AUTH0_API_AUDIENCE,
        responseType: 'token id_token',
        scope: this.requestedScopes,
    });

    public async unlink(provider, connection) {
        const user = await this.getProfile() as any;
        const accessToken = localStorage.getItem('access_token');

        if (user) {
            const endpoint = `https://${config.AUTH0_DOMAIN}/api/v2/users/${user.sub}/identities/${provider}/${connection}`;
            const response = await fetch(endpoint, {
                method: 'DELETE',
                headers: { Authorization: `Bearer ${accessToken}` },
            });

            return response.json();
        } else {
            return Promise.reject(false);
        }
    }

    public async link(link_with) {
        logger.trace('linking account with [%s]', link_with);
        const body = new FormData();
        const user = await this.getProfile();
        const accessToken = localStorage.getItem('access_token');

        body.append('link_with', link_with);

        if (user) {
            const endpoint = `https://${config.AUTH0_DOMAIN}/api/v2/users/${user.sub}/identities`;
            return fetch(endpoint, {
                body,
                method: 'POST',
                headers: { Authorization: `Bearer ${accessToken}` },
            }).then(res => {
                localStorage.setItem('auth_link_state', null);
                return res.json();
            }).catch(err => {
                localStorage.setItem('auth_link_state', null);
                alert('Linking failed');
            });
        } else {
            return Promise.resolve(false);
        }
    }

    get isAuthenticated() {
        return this.accessToken && !this.isTokenExpired;
    }

    get isTokenExpired(): boolean {
        // Check whether the current time is past the
        // access token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() >= parseInt(expiresAt);
    }

    get isExpiredTokenWithinGrantedPeriod(): boolean {
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        if (!expiresAt) {
            return false;
        }
        return new Date().getTime() >= (expiresAt + config.AUTH0_TOKEN_GRANTED_TIME);
    }


    /**
     * @property
     * @type {UserProfile}
     * @memberof WebAuthentication
     */
    public userProfile: IUserProfile | null;


    /**
     * Get user profile from local storage
     *
     * @returns {Promise<UserProfile>}
     * @memberof WebAuthentication
     */
    public getProfile(): Promise<IUserProfile> {
        logger.debug('pulling profile info');
        return new Promise((resolve, reject) => {
            let accessToken = this.accessToken;
            if (!accessToken || this.isTokenExpired) {
                if (this.isTokenExpired) {
                    throw new Error('token is expired');
                }
                logger.error('accessToken is null before we pull profile');
                throw new Error('no token found');
            }
            this.auth0.client.userInfo(
                accessToken,
                (error: Auth0Error, profile: IUserProfile) => {
                    if (error) {
                        reject(error);
                    } else {
                        this.userProfile = profile;
                        logger.debug('profile: [%j]', profile);
                        resolve({ ...this.userProfile, accessToken: this.accessToken } as any);
                    }
                },
            );
        });
    }

    public login(): void {
        this.auth0.authorize();
    }

    public loginWithPassword(username, password) {
        return new Promise((resolve, reject) => {
            this.auth0.login(
                { realm: config.AUTH0_REALM, username, password },
                (err, authResult) => {
                    if (err) {
                        logger.error('loginWithPassword failed due to [%j]', err);
                        return reject(err);
                    }
                    this.setSession(authResult);
                    return resolve(authResult);
                },
            );
        });
    }

    public handleAuthentication(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.auth0.parseHash((e: Auth0Error, result: Auth0DecodedHash) => {
                if (result && result.accessToken && result.idToken) {
                    if (localStorage.getItem('auth_link_state') === '__linking__') {
                        logger.debug('linking the account...');
                        // The "Link Account" method first saves the "linking" item and then authenticates
                        // We identify that flow here, so after each subsequent log-in, we link the accounts
                        // https://auth0.com/docs/link-accounts/user-initiated-linking
                        localStorage.setItem('auth_link_state', null);
                        this.link(result.idToken);
                    } else {
                        this.setSession(result);
                    }
                    logger.trace('tokenPayload [%j]', result);
                    return resolve(result);
                } else if (e) {
                    console.error(e);
                    return reject(e);
                }
            });
        });
    }

    public setSession(authResult: Auth0DecodedHash): void {
        logger.debug('storing the session to localstorage');
        const { accessToken, expiresIn, idToken, scope } = authResult;
        // Set the time that the access token will expire at
        let expiresAt = JSON.stringify(expiresIn! * 1000 + new Date().getTime());
        // If there is a value on the `scope` param from the authResult,
        // use it to set scopes in the session for the user. Otherwise
        // use the scopes as requested. If no scopes were requested,
        // set it to nothing
        // tslint:disable-next-line:no-string-literal
        const scopes = scope || this.requestedScopes || '';
        // const scopes = authResult.scope || this.requestedScopes || '';
        localStorage.setItem('access_token', accessToken!);
        localStorage.setItem('id_token', idToken!);
        localStorage.setItem('expires_at', expiresAt);
        localStorage.setItem('scopes', JSON.stringify(scopes));
        // navigate to the home route

        this.state$.next(this.isAuthenticated);

        this.scheduleTokenRenewal();
    }

    public logout(): void {
        // Clear access token and ID token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        localStorage.removeItem('auth_link_state');
        this.userProfile = null;
        // clearTimeout(this.tokenRenewalTimeout);

        this.state$.next(false);

        this.unscheduleTokenRenewal();

    }

    /**
     * Useful to clear any state in the localstorage that during the
     * redirection got failed.
     */
    public cleanUp(): void {
        localStorage.setItem('auth_link_state', null);
    }

    /**
     * @see {@link Auth0Authentication#renewToken}
     * @memberof WebAuthentication
     */
    public renewToken(): Promise<any> {
        logger.debug('token renewal request');
        if (this.isExpiredTokenWithinGrantedPeriod) {
            return new Promise((resolve, reject) => {
                this.auth0.checkSession(
                    {
                        // Will get the parameters that are provided when webAuth was initialized.
                    },
                    (err: Auth0Error, result: Auth0DecodedHash) => {
                        console.log(result);
                        if (err) {
                            logger.error('silentAuthentication failed', err);
                            return reject(err);
                        } else {
                            this.setSession(result);
                            return resolve(result);
                        }
                    },
                );
            });
        }
        throw new Error(AuthErrors.UserLoginNeeded);
    }

    // Add back, otherwise not working
    /**
     * @see {@link Auth0Authentication#renewToken}
     * @memberof WebAuthentication
     */
    public silentAuthentication(): void {
        this.auth0.checkSession(
            {
                // Will get the parameters that are provided when webAuth was initialized.
            },
            (err: Auth0Error, result: Auth0DecodedHash) => {
                if (err) {
                    console.error(
                        `Could not get a new token using silent authentication (${
                        err.error
                        }).`,
                    );
                } else {
                    this.setSession(result);
                    console.log(`Successfully renewed auth!`);
                }
            },
        );
    }

    public userHasScopes(scopes: string[]): boolean {
        const grantedScopes = JSON.parse(localStorage.getItem('scopes')!).split(
            ' ',
        );
        return scopes.every(scope => grantedScopes.includes(scope));
    }

    /**
     * Reschedule token reneval
     * @private
     * @memberof WebAuthentication
     */
    private scheduleTokenRenewal() {
        // logger.debug('AuthService', '#scheduleTokenRenewal()');
        this.unscheduleTokenRenewal();

        const tokenExpiry$ = of(JSON.parse(localStorage.getItem('expires_at'))).pipe(
            mergeMap(
                tokenExpiry => {
                    const now = Date.now();
                    // Use timer to track delay until expiration to run the refresh at the proper time
                    return timer(Math.max(1, tokenExpiry - now));
                },
            ),
        );

        // Once the delay time from above is reached, get a new JWT and schedule additional refreshes
        this._refreshSubscription = tokenExpiry$.subscribe(() => this.renewToken());
    }

    private unscheduleTokenRenewal() {
        if (!this._refreshSubscription) {
            return;
        }
        this._refreshSubscription.unsubscribe();
    }
};
