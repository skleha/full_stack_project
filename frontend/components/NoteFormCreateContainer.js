import { connect } from 'react-redux';
import NoteFormCreate from './NoteFormCreate';
import { createNote } from '../actions/note_actions';

const mapStateToProps = state => ({
  note: { title: "",
          body: "",
          author_id: state.session.id,
          pinned: false,
          color: "",
          img_url: "",
          reminder: "",
          archived: false,
          open: false
        },
  userId: state.session.id
});

const mapDispatchToProps = dispatch => ({
  createNote: note => dispatch(createNote(note)),
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteFormCreate);
