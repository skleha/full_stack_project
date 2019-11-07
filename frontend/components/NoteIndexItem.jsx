
import React from 'react';

class NoteIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.receiveCurrentNoteId(this.props.note.id);
    this.props.openModal('editNoteForm');
  }

  render() {
    
    const { note } = this.props;
    
    return (
    
      <li key={note.id} onClick={this.handleClick} className="note-item">
        <h2 className="note-item-title">{note.title}</h2><br></br>
        <h3 className="note-item-body">{note.body}</h3>
      </li>
    )
  }

}

export default NoteIndexItem;