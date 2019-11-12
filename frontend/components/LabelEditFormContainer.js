
import { connect } from 'react-redux';

import LabelEditForm from './LabelEditForm';
import { createLabel } from '../actions/label_actions';
import { fetchAssignments, createAssignment, deleteAssignment } from '../actions/assignment_actions';

const mapStateToProps = state => ({
  labels: Object.values(state.entities.labels),
  assignments: Object.values(state.entities.assignments),
  currentUserId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createLabel: label => dispatch(createLabel(label)),
  fetchAssignments: () => dispatch(fetchAssignments()),
  createAssignment: assignment => dispatch(createAssignment(assignment)),
  deleteAssignment: assignmentId => dispatch(deleteAssignment(assignmentId))
})

export default connect(mapStateToProps, mapDispatchToProps)(LabelEditForm);
