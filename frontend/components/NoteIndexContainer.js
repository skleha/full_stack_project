
import { connect } from 'react-redux';
import NoteIndex from './NoteIndex';
import { fetchNotes } from '../actions/note_actions';
import { fetchAssignments } from '../actions/assignment_actions';
import { receiveCurrentNoteId } from '../actions/session_actions';
import { openModal } from '../actions/modal_actions';

const mapStateToProps = state => ({
  notes: Object.values(state.entities.notes),
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  receiveCurrentNoteId: noteId => dispatch(receiveCurrentNoteId(noteId)),
  fetchAssignments: () => dispatch(fetchAssignments()),
  openModal: component => dispatch(openModal(component))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
