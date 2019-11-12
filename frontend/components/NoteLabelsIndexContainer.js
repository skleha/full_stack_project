
import { connect } from 'react-redux';
import NoteLabelsIndex from './NoteLabelsIndex';
import { deleteAssignment } from '../actions/assignment_actions';

const mapStateToProps = state => ({
  labels: state.entities.labels,
  assignments: Object.values(state.entities.assignments)
});

const mapDispatchToProps = dispatch => ({
  deleteAssignment: assignmentId => dispatch(deleteAssignment(assignmentId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteLabelsIndex);

