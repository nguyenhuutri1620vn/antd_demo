import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';

const mapStateToProps = (state: any) => {
  return {
    location: state.router.location,
  };
};

export default connect(mapStateToProps, null)(Switch);
