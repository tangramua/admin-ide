import { IUser } from '@adminide-stack/user-core';
import { IRedirectRoutes } from './redirectRoutes';

export namespace Store {
    export type Auth = {
        user: IUser,
        redirectRoutes: IRedirectRoutes,
    };
}
