const ZipkinOpentracing = require('zipkin-javascript-opentracing');
import { config } from '../config';

const ZIPKIN_HOST_PORT = `${config.ZIPKIN_URL}`;


export const server = new ZipkinOpentracing({
    serviceName: 'graphql',
    endpoint: ZIPKIN_HOST_PORT,
    kind: 'server',
});


export const client = new ZipkinOpentracing({
    serviceName: 'graphql',
    endpoint: ZIPKIN_HOST_PORT,
    kind: 'client',
});

export const local = new ZipkinOpentracing({
    serviceName: 'graphql',
    endpoint: ZIPKIN_HOST_PORT,
    kind: 'local',
});
