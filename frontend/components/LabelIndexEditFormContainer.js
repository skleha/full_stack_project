import { connect } from 'react-redux';
import LabelIndexEditForm from './LabelIndexEditForm';
import { fetchLabels, createLabel, updateLabel, deleteLabel } from '../actions/label_actions';


const mapStateToProps = state => ({
  labels: Object.values(state.entities.labels)
});

const mapDispatchToProps = dispatch => ({
  fetchLabels: () => dispatch(fetchLabels()),
  createLabel: label => dispatch(createLabel(label)),
  updateLabel: label => dispatch(updateLabel(label)),
  deleteLabel: labelId => dispatch(deleteLabel(labelId))
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndexEditForm);


