import { call, put, select, takeEvery } from 'redux-saga/effects';
// import Config from 'app/config';
import queryString from 'query-string';
// import axios from 'axios';
import { localStorage } from '../utils';
import pollingAuth from './pollingAuth';
import * as routerAction from '../../app/router/actions';
// import * as appActions from '../actions';
import * as routerSelector from '../../app/router/selectors';

import * as appTypes from '../constants';
// import * as checkUser from 'app/services/tokenUser';
// import * as appSelectors from '../selectors';
// import * as appActions from '../actions';
// import paths from 'src/paths/pathsVSR';
import Cookies from 'js-cookie';

export function* checkToken(): any {
  const queryObject = yield select(routerSelector.queryObjectSelector);
  const token_url: string = queryObject.token || Cookies.get('_token');
  // || localStorage.getItem('token');
  // localStorage.getItem('token');
  // Cookies.get('_token');

  let flag: boolean = true;
  const user_id: string = localStorage.getItem('user_id') || '';
  const org_id: string = localStorage.getItem('org_id') || '';

  if (queryObject.token) {
    const queryObject = yield select(routerSelector.queryObjectSelector);
    delete queryObject.token;

    const replaceUrl = queryString.stringifyUrl({
      url: window.location.pathname,
      query: queryObject,
    });
    flag = true;
    // if (queryObject.filter_id === undefined) {
    yield put(routerAction.replace(replaceUrl));
    // }
  } else if (Cookies.get('_token')) {
    // Cookies.get('_token')
    // localStorage.getItem('token')
    localStorage.removeItem('token');
    flag = false;
  }
  yield call([pollingAuth, pollingAuth.pollTask], token_url, user_id, org_id, flag);
}

export default function* rootSaga() {
  yield takeEvery(appTypes.CHECK_TOKEN, checkToken);
}
