import repository from './module';
import { Feature } from '@common-stack/client-react';

export * from './gql';
export * from './components';

export default new Feature(repository);
