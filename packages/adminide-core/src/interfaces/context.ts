import { DataProxy } from 'apollo-cache';
import { ApolloClient } from 'apollo-client';

/**
 *
 * Context
 * @export
 * @interface MyContext
 */
export interface MyContext extends ClientContext, ServerContext {

}


export interface ClientContext {
  /**
   * Only application on the client side
   */
  cache: DataProxy;
  /**
   * Only application on the client side
   */
  getCacheKey: (options: {
    __typename: string;
    id?: string,
  }) => string;
  /**
   * Only applicable on the client side
   */
  apolloClient: ApolloClient<any>; // deprecated use `client` instead
  client: ApolloClient<any>;
}

export interface IDataSources  {
}

export interface ServerContext {

  /** Backend Datasource */
  dataSources: IDataSources;
}
