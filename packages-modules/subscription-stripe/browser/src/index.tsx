import repository from './module';
import { Feature } from '@common-stack/client-react';

// export * from './interfaces';
export * from './constants';
export * from './graphql';
export default new Feature(repository);
