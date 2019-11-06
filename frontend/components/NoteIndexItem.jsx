
import React from 'react';

class NoteIndexItem extends React.Component {

  constructor(props) {
    super(props)
  }


  renderForm() {
    return (
      <h1>does this work? </h1>
    )
  }

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