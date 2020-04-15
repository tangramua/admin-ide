import gql from 'graphql-tag';
import * as Logger from 'bunyan';
import { ApolloClient } from 'apollo-client';

const {
    jsonEncoder: { JSON_V1 },
  } = require('zipkin');

const EventEmitter = require('events').EventEmitter;

export interface IZipkinGraphqlLoggerOptions {
    logger?: Logger;
    timeout?: number;
    jsonEncoder?: any;
    httpInterval?: number;
    maxPayloadSize?: number;
    client: ApolloClient<any>;
}

const SEND_SPAN_MUTATION = gql`
    mutation batch($queue: [String]) {
        batchSpan(queue: $queue)
    }
`;

export class ZipkinGraphqlLogger extends EventEmitter {
    private client: ApolloClient<any>;
    private queue;
    private queueBytes;
    private errorListenerSet;
    private logger;
    private timeout;
    private maxPayloadSize;
    private httpInterval;
    private jsonEncoder;

    constructor({
        logger,
        client,
        timeout = 0,
        maxPayloadSize = 0,
        httpInterval = 1000,
        jsonEncoder = JSON_V1,
    }: IZipkinGraphqlLoggerOptions) {
        super();
        this.queue = [];
        this.client = client;
        this.queueBytes = 0;
        this.jsonEncoder = jsonEncoder;
        this.maxPayloadSize = maxPayloadSize;
        this.logger = logger || Logger.createLogger({ name: ZipkinGraphqlLogger.name });

        this.errorListenerSet = false;

        // req/res timeout in ms, it resets on redirect. 0 to disable (OS limit applies)
        // only supported by node-fetch; silently ignored by browser fetch clients
        // @see https://github.com/bitinn/node-fetch#fetch-options
        this.timeout = timeout;

        const timer = setInterval(() => {
            this.processQueue();
        }, httpInterval);
        
        // if (timer.unref) { // unref might not be available in browsers
        //     timer.unref(); // Allows Node to terminate instead of blocking on timer
        // }
    }

    public _getPayloadSize(nextSpan) {
        // Our payload is in format '[s1,s2,s3]', so we need to add 2 brackets and
        // one comma separator for each payload, including the next span if defined
        return nextSpan
            ? this.queueBytes + 2 + this.queue.length + nextSpan.length
            : this.queueBytes + 2 + Math.min(this.queue.length - 1, 0);
    }

    public on(...args) {
        const eventName = args[0];
        // if the instance has an error handler set then we don't need to
        // skips error logging
        if (eventName.toLowerCase() === 'error') {
            this.errorListenerSet = true;
        }
        super.on.apply(this, args);
    }

    public logSpan(span) {
        const encodedSpan = this.jsonEncoder.encode(span);
        if (this.maxPayloadSize && this._getPayloadSize(encodedSpan) > this.maxPayloadSize) {
            this.processQueue();
            if (this._getPayloadSize(encodedSpan) > this.maxPayloadSize) {
                // Payload size is too large even with an empty queue, can only drop
                const err = 'Zipkin span got dropped, reason: payload too large';
                if (this.errorListenerSet) {
                    this.emit('error', new Error(err));
                } else {
                    this.log.error(err);
                }
                return;
            }
        }
        this.queue.push(encodedSpan);
        this.queueBytes += encodedSpan.length;
    }

    public processQueue() {
        if (this.queue.length > 0) {
            this.client.mutate({ mutation: SEND_SPAN_MUTATION, variables: { queue: this.queue } });

            this.queue.length = 0;
            this.queueBytes = 0;
        }
    }
}
