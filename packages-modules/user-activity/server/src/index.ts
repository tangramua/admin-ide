import { Feature } from '@common-stack/server-core';
import module from './module';

export * from './interfaces';
export * from './constants';
export default new Feature(module);
