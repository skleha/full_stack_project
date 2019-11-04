import { connect } from 'react-redux';
import FormSignup from './FormSignup';
import { signup } from '../actions/session_actions';

const mapStateToProps = (state, ownProps) => ({
  errors: state.errors.session,
});

const mapDispatchToProps = dispatch => ({
  processForm: (user) => dispatch(signup(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FormSignup);
