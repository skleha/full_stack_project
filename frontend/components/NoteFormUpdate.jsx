
import React from 'react';


class NoteFormUpdate extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.note
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentWillUnmount() {
    this.props.removeCurrentNoteId();
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
            <i className="far fa-trash-alt" onClick={this.handleDelete}></i>
          </div>

          <button
            className="note-update-button"
            onClick={this.handleSubmit}>
            Close
          </button>

        </div>

      </div>
    )
  }
}

export default NoteFormUpdate;