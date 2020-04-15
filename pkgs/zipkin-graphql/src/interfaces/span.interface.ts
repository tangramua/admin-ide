import { ESpanKind } from '../constants';

export interface IZipkinTag {
    key: string;
    value: string;
}

export interface IZipkinEndpoint {
    port: number;
    ipv6: string;
    ipv4: string;
    serviceName: string;
}

export interface IZipkinAnnotation {
    value: string;
    timestamp: number;
}

export interface ISpan {
    id: string;
    name: string;
    debug: Boolean;
    shared: Boolean;
    kind: ESpanKind;
    traceId: string;
    parentId: string;
    duration: number;
    timestamp: number;
    tags: IZipkinTag[];
    description: string;
    localEndpoint: IZipkinEndpoint;
    remoteEndpoint: IZipkinEndpoint;
    annotations: IZipkinAnnotation[];
}
