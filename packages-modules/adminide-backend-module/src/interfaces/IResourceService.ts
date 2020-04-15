export interface IResourceService {
    scan(): any;
    collect(data: any): any;
}

export interface IResourceServiceSettings {
    UTILIZATION_INTERVAL?: number;
}
