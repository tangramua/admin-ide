import user, { onTokenError } from './module';
import { Feature } from '@common-stack/client-react';

export * from './graphql/gql';
export * from './redux/actions';
export * from './redux/reducers';
export * from './selectors';
export * from './containers';
export * from './helpers';
export * from './hooks';
export * from './guard';
// export * from './context';
export * from './constants';

export { onTokenError };
export default new Feature(user);
