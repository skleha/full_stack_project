
import { connect } from 'react-redux';
import NoteIndex from './NoteIndex';
import { fetchNotes } from '../actions/note_actions';

const mapStateToProps = state => ({
  notes: Object.values(state.entities.notes),
});

const mapDispatchToProps = dispatch => ({
  fetchNotes: () => dispatch(fetchNotes()),
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);
