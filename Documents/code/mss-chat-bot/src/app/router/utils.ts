import queryString, { StringifyOptions } from 'query-string';
import { Object } from '../types';

const queryOrders: Object<number> = {
  //   a: 0,
  //   b: 1,
};

const defaultParseOptions = {
  arrayFormat: 'bracket',
};

const defaultStringifyOptions: StringifyOptions = {
  arrayFormat: 'bracket',
  sort: (m: string, n: string): number => queryOrders[m] - queryOrders[n],
};

export const parseRouterQuery = (searchStr = '') => {
  const query = queryString.parse(searchStr, defaultParseOptions as any);

  return query || {};
};

export const stringifyQuery = (query = {}) => {
  const searchStr = queryString.stringify(query, defaultStringifyOptions);
  return searchStr;
};
