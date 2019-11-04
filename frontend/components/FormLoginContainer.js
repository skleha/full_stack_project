import { connect } from 'react-redux';
import FormLogin from './FormLogin';
import { login } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormLogin);
