
import React from 'react';
import NoteIndexItem from './NoteIndexItem';

class NoteIndex extends React.Component {

  componentDidMount() {
    // did fetch notes here, but take care of in search bar
    // this.props.fetchNotes();
    this.props.fetchAssignments();
  }

  render() {
   
    const { notes, deleteNote, receiveCurrentNoteId, openModal } = this.props;
    
    return (
      <div className="note-index">
        <ul className="note-index-ul">
          {notes.map(note => 
            <NoteIndexItem 
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              receiveCurrentNoteId={receiveCurrentNoteId}
              openModal={openModal} />) }
        </ul>
      </div>
    )
  }
}

export default NoteIndex;
