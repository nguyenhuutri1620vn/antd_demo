import { connect } from 'react-redux';
import { Replace, Push } from 'connected-react-router';
import { History, LocationState } from 'history';
import { Object } from '../../types';
import { push, replace } from '../actions';

import { routerLocationSelector, queryObjectSelector } from '../selectors';

export type IWithRouter = {
  location: History<LocationState>;
  queryObject: Object<any>;
  push: Push;
  replace: Replace;
};

const mapStateToProps = (state: any) => {
  return {
    location: routerLocationSelector(state),
    queryObject: queryObjectSelector(state),
  };
};

const mapDispatchToProps = {
  push,
  replace,
};

const withRouter = connect(mapStateToProps, mapDispatchToProps);

export default withRouter;
