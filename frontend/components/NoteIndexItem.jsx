
import React from 'react';
import NoteLabelsIndexContainer from './NoteLabelsIndexContainer';
import LabelEditFormContainer from './LabelEditFormContainer';

class NoteIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.note;
    this.toggleLabelForm = this.toggleLabelForm.bind(this);
    this.togglePinned = this.togglePinned.bind(this);
    this.showNote = this.showNote.bind(this);
    this.deleteThisNote = this.deleteThisNote.bind(this);
  }

  componentDidMount() {
    this.setState({ labelFormShow: false });
  }

  toggleLabelForm(e) {
    e.stopPropagation();
    this.setState({ labelFormShow: !this.state.labelFormShow }); 
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  togglePinned(e) {
    e.stopPropagation();
    this.setState({ labelFormShow: !this.state.pinned });
    this.props.updateNote(this.state);
  }

  showNote(e) {
    this.props.receiveCurrentNoteId(this.props.note.id);
    this.props.openModal('editNoteForm');
  }

  deleteThisNote(e) {
    e.stopPropagation();
    this.props.deleteNote(this.props.note.id);
  }

  render() {
  
    const { note } = this.props;

    const pinType = note.pinned ? (
      <i className="fas fa-thumbtack"></i>
      ) : (
      <i className="fal fa-thumbtack"></i>
    );

    const labelForm = this.state.labelFormShow ? (  
      <LabelEditFormContainer noteId={note.id} toggleLabelForm={this.toggleLabelForm}/>
    ) : ( null );

    return (
      <li key={note.id} onClick={this.showNote} className="note-item">
        <div className="note-item-title-pin">
          <h2 className="note-item-title">{note.title}</h2>
          { pinType }
        </div>

        <h3 className="note-item-body">{note.body}</h3>

        <div className="note-item-label-tray">
          <NoteLabelsIndexContainer noteId={note.id} />
        </div>

        <div className="note-item-action-tray">
          <i
            className="fas fa-tag tray-item"
            onClick={this.toggleLabelForm}
          ></i>
          <i
            className="far fa-trash-alt tray-item"
            onClick={this.deleteThisNote}
          ></i>
        </div>

        <div className="note-item-label-edit-form-container">{labelForm}</div>
      </li>
    );
  }

}

export default NoteIndexItem;
