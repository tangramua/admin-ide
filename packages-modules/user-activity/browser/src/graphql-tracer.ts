import * as Logger from 'bunyan';
import { client } from './apollo-client';
import { ZipkinGraphqlLogger } from './classes/ZipkinGraphqlLogger';

import * as zipkin from 'zipkin';
import * as opentracing from 'opentracing';
import { HttpLogger } from 'zipkin-transport-http';
import ZipkinOpentracing from 'zipkin-javascript-opentracing';

export const tracer = new ZipkinOpentracing({
    ctxImpl: new zipkin.ExplicitContext(),
    recorder: new zipkin.BatchRecorder({
        logger: new ZipkinGraphqlLogger({
            client,
        }),
    }),
    kind: 'client',
    serviceName: 'frontend',
    sampler: new zipkin.sampler.CountingSampler(100),
});
