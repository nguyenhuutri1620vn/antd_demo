import { createSelector } from 'reselect';
import { parseRouterQuery } from './utils';

export const routerLocationSelector = (state: any) => state.router.location;

export const queryObjectSelector = createSelector(routerLocationSelector, location => {
  const queryObject = parseRouterQuery(location.search);
  return queryObject;
});
