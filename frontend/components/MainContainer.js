
import { connect } from 'react-redux';
import Main from './Main';
import { logout } from '../actions/session_actions';
import { deleteFilter} from '../actions/filter_actions';

const mapStateToProps = state => ({
  
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  deleteFilter: () => dispatch(deleteFilter())
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

