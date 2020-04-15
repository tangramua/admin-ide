
import { IMenuPosition } from '@common-stack/client-react';

export interface IPageStore {
    key: string;
    tab?: string;
    path: string;
    exact?: boolean;
    name?: string;
    component: any;
    position?: IMenuPosition;
}
