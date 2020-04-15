import { Feature } from '@common-stack/server-core';
import module from './module';

export * from './errors';
export * from './graphql';
export default new Feature(module);
