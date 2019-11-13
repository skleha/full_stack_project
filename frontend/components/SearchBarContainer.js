
import { connect } from 'react-redux';
import SearchBar from './SearchBar';
import { noteSearch } from '../actions/note_actions';
import { fetchNotes } from '../actions/note_actions';

const mapStateToProps = state => ({
  notes: Object.values(state.entities.notes),
});

const mapDispatchtoProps = dispatch => ({
  noteSearch: searchResult => dispatch(noteSearch(searchResult)),
  fetchNotes: () => dispatch(fetchNotes())
});

export default connect(mapStateToProps, mapDispatchtoProps)(SearchBar);
