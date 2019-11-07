import { connect } from 'react-redux';
import NoteFormUpdate from './NoteFormUpdate';
import { updateNote, deleteNote } from '../actions/note_actions';
import { closeModal } from '../actions/modal_actions';

const mapStateToProps = state => {
  return ({
  note: Object.values(state.entities.notes).filter(note => note.id === state.session.currentNoteId)[0]
  })
};

const mapDispatchToProps = dispatch => ({
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId)),
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormUpdate);
