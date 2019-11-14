
import React from 'react';
import LabelEditFormContainer from './LabelEditFormContainer';
import autosize from 'autosize';

class NoteFormUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.note
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.toggleLabelForm = this.toggleLabelForm.bind(this);
  }

  componentWillUnmount() {
    this.props.removeCurrentNoteId();
  }

  componentDidMount() {
    this.setState({ labelFormShow: false });
  }

  toggleLabelForm(e) {
    this.setState({ labelFormShow: !this.state.labelFormShow });
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleDelete(e) {
    this.props.deleteNote(this.state.id);
    this.props.closeModal();
  }

  handleSubmit(e) {
      this.props.updateNote(this.state);
      this.props.closeModal();
  }

  render() {

    const labelForm = this.state.labelFormShow ? (
      <LabelEditFormContainer noteId={this.state.id} toggleLabelForm={this.toggleLabelForm} />
    ) : (null);

    return (
      <div className="note-update">

        <div className="note-update-inputs">
          <input
            className="note-update-title"
            type="text"
            placeholder="Title"
            onChange={this.handleInput("title")}
            value={this.state.title}
          />

        <textarea
          className="note-update-body"
          placeholder="Take a note..."
          onChange={this.handleInput("body")}
          value={this.state.body}
        />

      </div>

        <div className="note-update-bottom-tray">

          <div className="note-update-actions">
            <i className="fas fa-tag tray-item" onClick={this.toggleLabelForm}></i>
            <i className="far fa-trash-alt tray-item" onClick={this.handleDelete}></i>
          </div>

          <button
            className="note-update-button"
            onClick={this.handleSubmit}>
            Close
          </button>

        </div>

        <div className="note-form-update-edit-labels-container">
          { labelForm }
        </div>

      </div>
    )
  }
}

export default NoteFormUpdate;