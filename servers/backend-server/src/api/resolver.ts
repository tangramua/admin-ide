import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';
import { GraphQLDate, GraphQLTime, GraphQLDateTime } from 'graphql-iso-date';
import { GraphQLAnyObject } from './scalar';


export const resolvers = {
    AnyObject: GraphQLAnyObject,
    Date: GraphQLDate,
    Time: GraphQLTime,
    DateTime: GraphQLDateTime,
    JSON: GraphQLJSON,
    JSONObject: GraphQLJSONObject,
};
