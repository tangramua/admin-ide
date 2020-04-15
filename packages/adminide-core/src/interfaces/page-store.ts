
import { IMenuPosition } from '@common-stack/client-core';

export interface IPageStore {
    key: string;
    tab?: string;
    path: string;
    exact?: boolean;
    name?: string;
    /**
     * When `exact: false` we may not have an component
     */
    component?: any;
    position?: IMenuPosition;
}
