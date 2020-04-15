import { Observable }from 'rxjs';
import { Auth0DecodedHash } from 'auth0-js';
import { IUserProfile } from '@adminide-stack/user-core';

/**
 * Auth0 authentication contract
 * @export
 * @interface IAuth0Authentication
 */
export interface IAuth0Authentication {
  state$: Observable<boolean>;

  /**
   * @property readonly
   * @type {boolean}
   * @memberof IAuth0Authentication
   */
  readonly isTokenExpired: boolean;

  /**
   * @property readonly
   * @type {boolean}
   * @memberof IAuth0Authentication
   * @description It is possible we can renew an expired token if 
   * it is under granted period to avoid the user to relogin.
   */
  readonly isExpiredTokenWithinGrantedPeriod: boolean;

  /**
   * @property readonly
   * @type {string}
   * @memberof IAuth0Authentication
   */
  readonly accessToken: string;

  /**
   * @property User profile
   * @type {UserProfile}
   * @memberof IAuth0Authentication
   */
  readonly userProfile: IUserProfile | null;

  /**
   * @property Access token
   * @type {Boolean}
   * @memberof IAuth0Authentication
   */
  link(to: string): Promise<Boolean>;

  /**
   * @property ID Token
   * @type {UserProfile}
   * @memberof IAuth0Authentication
   */
  readonly idToken: string | null;

  /**
   * @property Auth0 UserId
   * @type {UserProfile}
   * @memberof IAuth0Authentication
   */
  readonly auth0UserId: string;

  /**
   * Start autherization session
   * @memberof IAuth0Authentication
   */
  login(): void;

  unlink(provider, connection): Promise<any>;
  /**
   * Start authentication session with username password
   * @memberof IAuth0Authentication
   */
  loginWithPassword(user: string, password: string): Promise<any>;
  /**
   * Consume authentication results
   * @memberof IAuth0Authentication
   */
  handleAuthentication(): Promise<void>;
  /**
   * Get user profile
   * @returns {Promise<UserProfile>}
   * @memberof IAuth0Authentication
   */
  getProfile(): Promise<IUserProfile>;
  /**
   * Callback for authentication session
   * @param {Auth0DecodedHash} authResult
   * @memberof IAuth0Authentication
   */
  setSession(authResult: Auth0DecodedHash): void;
  /**
   * Destroy session
   * @memberof IAuth0Authentication
   */
  logout(): void;

  /**
   * Cleanup any failed state
   */
  cleanUp(): void;
  /**
   * Given a string with grants: `'read:messages write:messages'`
   * returns boolean if current scope matches passed ones
   * @param {Array<string>} scopes
   * @returns {boolean}
   * @memberof IAuth0Authentication
   */
  userHasScopes(scopes: string[]): boolean;

  /**
   * Executes a silent authentication transaction under the hood
   * in order to fetch a new tokens for the current session
   * @memberof IAuth0Authentication
   */
  renewToken(): Promise<any>;
}
