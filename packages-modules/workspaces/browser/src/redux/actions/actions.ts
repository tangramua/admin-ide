import * as redux from 'redux';

export type Q<T> = { request: T };
export type S<T> = { response: T };
export type E = { error: Error };

export type QEmpty = Q<null>;
export type QValue = Q<{ value: number }>;

export type Action =
  // UI actions
  //    { type: 'INCREMENT_COUNTER', delta: number }
  // |  { type: 'RESET_COUNTER' }
  { type: 'BOX_CREATE', param: object };

// API Requests
// | ({ type: 'SAVE_COUNT_REQUEST' } & QValue)
// | ({ type: 'SAVE_COUNT_SUCCESS' } & QValue & S<{}>)
// | ({ type: 'SAVE_COUNT_ERROR'   } & QValue & E)

// | ({ type: 'LOAD_COUNT_REQUEST' } & QEmpty)
// | ({ type: 'LOAD_COUNT_SUCCESS' } & QEmpty & S<{ value: number }>)
// | ({ type: 'LOAD_COUNT_ERROR'   } & QEmpty & E)
