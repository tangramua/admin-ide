export default `
    enum ESpanKind {
        CLIENT
        SERVER
        PRODUCER
        CONSUMER
    }

    input IZipkinTag {
        key: String
        value: String
    }

    input IZipkinEndpoint {
        port: Int
        ipv6: String
        ipv4: String
        serviceName: String
    }

    input IZipkinAnnotation {
        value: String
        timestamp: Int
    }

    input ISpanRequest {
        id: String
        name: String
        debug: Boolean
        duration: Int
        timestamp: Int
        shared: Boolean
        kind: ESpanKind
        traceId: String!
        parentId: String
        tags: [IZipkinTag]
        description: String
        localEndpoint: IZipkinEndpoint
        remoteEndpoint: IZipkinEndpoint
        annotations: [IZipkinAnnotation]
    }

    type Query {
        health: String
    }

    type Mutation {
        sendSpan(request: String): Boolean
        batchSpan(queue: [String]): Boolean
    }
`;
