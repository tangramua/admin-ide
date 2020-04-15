export default `
scalar AnyObject
scalar Date
scalar Time
scalar DateTime

type FieldError {
  field: String!
  message: String!
}

type Query {
    dummy: Int
}

type Mutation {
    dummy: Int
}

type Subscription {
    dummy: Int
}

#interface Node {
#      id: ID!
#}


schema {
    query: Query
    mutation: Mutation
    subscription: Subscription
}`;
