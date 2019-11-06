
import React from 'react';

class NoteIndexItem extends React.Component {


  render() {
    
    const { note, updateNote, deleteNote } = this.props;
    
    return (
      <li className="note-item">
        <h2 className="note-item-title">{note.title}</h2><br></br>
        <h3 className="note-item-body">{note.body}</h3>
      </li>
    )
  }


}


export default NoteIndexItem;