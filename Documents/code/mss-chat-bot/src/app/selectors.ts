export const tokenSelector = (state: any) => {
  return state.appReducer.get('token');
};

export const currentUserSelector = (state: any) => {
  return state.appReducer.get('currentUser');
};

export const isHomePageSelector = (state: any) => {
  return state.appReducer.get('isHomePage');
};

export const buildDataSelector = (state: any) => {
  return state.appReducer.get('builData').toJS();
};
