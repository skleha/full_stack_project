
import React from 'react';
import { Link } from 'react-router-dom';
import NoteIndexItem from './NoteIndexItem';

class NoteIndex extends React.Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
   
    const { notes, updatePost, deletePost } = this.props;
    
    return (
      <div className="note-index">
        <ul className="note-index-ul">
          { notes.map(note => <NoteIndexItem key={note.id} note={note} updateNote={updateNote} deleteNote={deleteNote} />) }
        </ul>
      </div>
    )
  }


}

export default NoteIndex;

