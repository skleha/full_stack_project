
import { connect } from 'react-redux';
import LabelIndex from './LabelIndex';
import { fetchLabels } from '../actions/label_actions';

const mapStateToProps = state => ({
  labels: Object.values(state.entities.labels)
});

const mapDispatchToProps = dispatch => ({
  fetchLabels: () => dispatch(fetchLabels())
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndex);



