
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
    const pinned = notes.filter(ele => ele.pinned );
    const unpinned = notes.filter(ele => !ele.pinned );

    return (
      <div className="note-index">
        
        <ul className="note-index-ul">
          {pinned.map(note => (
            <NoteIndexItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              receiveCurrentNoteId={receiveCurrentNoteId}
              openModal={openModal}
            />
          ))}
        </ul>

        <ul className="note-index-ul">
          {unpinned.map(note => (
            <NoteIndexItem
              key={note.id}
              note={note}
              deleteNote={deleteNote}
              receiveCurrentNoteId={receiveCurrentNoteId}
              openModal={openModal}
            />
          ))}
        </ul>
        
      </div>
    );
  }
}

export default NoteIndex;
