import { connect } from 'react-redux';
import LabelIndexEditForm from './LabelIndexEditForm';
import { fetchLabels, createLabel, updateLabel, deleteLabel } from '../actions/label_actions';
import { closeModal } from '../actions/modal_actions';

const mapStateToProps = state => ({
  labels: Object.values(state.entities.labels),
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  fetchLabels: () => dispatch(fetchLabels()),
  createLabel: label => dispatch(createLabel(label)),
  updateLabel: label => dispatch(updateLabel(label)),
  deleteLabel: labelId => dispatch(deleteLabel(labelId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(LabelIndexEditForm);


