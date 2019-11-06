import React from 'react';


class NoteForm extends React.Component {

  constructor(props)  {
    super(props);
    this.state = this.props.note
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
    }
  
  resetForm() {
    this.setState(this.props.note);
  }
  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger

    if (this.state.title === "" && this.state.body === "") {

    } else {
      this.props.createNote(this.state);
    }
  }

  render() {
    
    return (
      <div className="note-form">

        <div className="note-form-inputs">
          <input
            className="note-form-title"
            type="text"
            placeholder="Title"
            onChange={this.handleInput("title")}
            /> <br/>  
          <textarea 
            className="note-form-body"
            placeholder="Take a note..."
            onChange={this.handleInput("body")}
          />
        </div>

        <div className="note-form-bottom-tray">
          
          <h1>note form buttons</h1>
          
          <button
          className="note-form-button"
          onClick={this.handleSubmit}>
            Close
          </button>

        </div>

      </div>
    )
  }
}

export default NoteForm;