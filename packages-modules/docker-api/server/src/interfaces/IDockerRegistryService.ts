import { IDockerSearchImageObject, IDockerListItem, IRegistryCatalog, IImageTags } from '@adminide-stack/common';

export interface IFilterItem {
    prop: string;
    value: string[];
}

export interface ISearchRequest {
    term: string;
    limit: number;
    filters: IFilterItem[];
}

export interface IDockerRegistryService {
    registry(): Promise<IRegistryCatalog>;
    containers(): Promise<IDockerListItem[]>;
    imageTags(image: string): Promise<IImageTags>;
    search(request: ISearchRequest): Promise<IDockerSearchImageObject[]>;
}
