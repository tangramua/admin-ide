


export enum SortOrder {
    'NewestFirst' = 'timestamp-desc',
    'LogestFirst' = 'duration-desc',
    'ShortestFirst' = 'duration-asc',
    'OldestFirst' = 'timestamp-asc',
    'ServicePercent_ShortestFirst' = 'service-percentage-asc',
    'ServicePercent_LongestFirst' = 'service-percentage-desc',
}

export const IZipkinRequestOrder = ['serviceName', 'spanName', 'startTs', 'endTs', 'annotationQuery', 'minDuration', 'limit', 'sortOrder'];
export interface IZipkinSearchRequest {
    serviceName: string;
    spanName: string;
    startTs?: string;
    endTs?: number;
    annotationQuery?: string;
    minDuration?: string;
    limit?: number;
    sortOrder?: SortOrder;
}

export interface IActivityZipkinService {

    // service(): any;
    search(request: IZipkinSearchRequest): any;
}
