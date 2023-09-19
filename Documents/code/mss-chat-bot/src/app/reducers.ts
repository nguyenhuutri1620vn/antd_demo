import { fromJS } from 'immutable';
import * as types from './constants';

export const initState = (): any => {
  return (
    fromJS({
      token: '',
      currentUser: null,
      isHomePage: true,
      menuHeader: '',
      builData: {
        modalBuild: false,
        typeBuild: false
      }
    }) as any
  ).set('currentUser', {});
};

export default function reducer(state = initState(), action: any) {
  switch (action.type) {
    case types.SET_TOKEN:
      return state.set('token', action.payload);
    case types.SET_CURRENT_USER:
      return state.set('currentUser', action.payload);
    case types.SET_HOME_PAGE:
      return state.set('isHomePage', action.payload);
    case types.SET_BUILD_DATA:
      return state.set('builData', fromJS(action.payload));
    // case types.RESET:
    //   return initState();
    default:
      return state;
  }
}
