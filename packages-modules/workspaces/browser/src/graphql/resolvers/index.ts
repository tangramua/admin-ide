import { merge } from 'lodash';
import  { resolvers as wsResolvers } from './workspace';

export const resolvers = merge(wsResolvers);
