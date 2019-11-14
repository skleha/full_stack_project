
import { connect } from 'react-redux';
import Greeting from './Greeting';
import { logout, login } from '../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id]
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  login: () => dispatch(login({username: "demoUser", password: "password"}))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);

