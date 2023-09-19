import * as constTypes from './constants';
import * as types from './types';

export const checkToken = () => ({
  type: constTypes.CHECK_TOKEN,
});
export const saveToken = (token: string) => ({
  type: constTypes.SET_TOKEN,
  payload: token,
});