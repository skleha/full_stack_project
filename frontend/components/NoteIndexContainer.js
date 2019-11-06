
import { connect } from 'react-redux';
import NoteIndex from './NoteIndex';
import { fetchNotes, updateNote, deleteNote } from '../actions/note_actions';

const mapStateToProps = state => ({
  notes: Object.values(state.entities.notes)
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
  updateNote: note => dispatch(updateNote(note)),
  deleteNote: noteId => dispatch(deleteNote(noteId))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
