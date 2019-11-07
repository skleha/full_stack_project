import React from 'react';


class NoteForm extends React.Component {

  constructor(props)  {
    super(props);
    this.state = this.props.note
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
    }
  
  resetForm() {
    this.setState(this.props.note);
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    if (this.state.title === "" && this.state.body === "") {
      this.setState({ open: false })
    } else {
      this.props.createNote(this.state);
      this.setState(this.props.note);
    }
  }

  togglePanel(e) {
    this.setState({ open: !this.state.open })
  }

  render() {

    return (
      <div className="note-form">
        
        <div className="note-form-inputs">
        
        {this.state.open ? (
          <input
            className="note-form-title"
            type="text"
            placeholder="Title"
            onChange={this.handleInput("title")}
            value={this.state.title}
            />
        ) : null }

          <textarea 
            className="note-form-body"
            placeholder="Take a note..."
            onClick={this.togglePanel}
            onChange={this.handleInput("body")}
            value={this.state.body}
          />
        </div>

      {this.state.open ? (

        <div className="note-form-bottom-tray">
          
          <h1 className="note-form-actions">Note Form buttons</h1>
          
          <button
          className="note-form-button"
          onClick={this.handleSubmit}>
            Close
          </button>

        </div>

        ) : null }

      </div>
    )
  }
}

export default NoteForm;