
import { connect } from 'react-redux';
import LabelIndex from './LabelIndex';
import { fetchLabels } from '../actions/label_actions';
import { openModal } from '../actions/modal_actions';
import { updateFilter } from '../actions/filter_actions';

const mapStateToProps = state => ({
  labels: Object.values(state.entities.labels)
});

const mapDispatchToProps = dispatch => ({
  fetchLabels: () => dispatch(fetchLabels()),
  openModal: component => dispatch(openModal(component)),
  updateFilter: filter => dispatch(updateFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndex);
