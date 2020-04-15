
import { Feature } from '@common-stack/server-core';
import module from './module';

export * from './errors';
export * from './webhook';
export default new Feature(module);
