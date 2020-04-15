import * as zipkin from 'zipkin';
import * as opentracing from 'opentracing';
import { HttpLogger } from 'zipkin-transport-http';
import * as ZipkinOpentracing from 'zipkin-javascript-opentracing';


export const tracer = new ZipkinOpentracing({
    ctxImpl: new zipkin.ExplicitContext(),
    recorder: new zipkin.BatchRecorder({
        logger: new HttpLogger({
            jsonEncoder: zipkin.jsonEncoder.JSON_V2,
            endpoint: `${process.env.ZIPKIN_URL}/api/v2/spans`,
            // headers: {'Authorization': 'secret'} // optional custom HTTP headers
        }),
    }),
    sampler: new zipkin.sampler.CountingSampler(100),
    kind: 'client',
    serviceName: 'frontend',
});

opentracing.initGlobalTracer(tracer);
