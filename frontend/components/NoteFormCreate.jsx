
import React from 'react';


class NoteFormCreate extends React.Component {

  constructor(props)  {
    super(props);
    this.state = this.props.note
    this.handleSubmit = this.handleSubmit.bind(this);
    this.togglePanel = this.togglePanel.bind(this);
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
      <div className="note-create">
        
        <div className="note-create-inputs">
        
        {this.state.open ? (
          <input
            className="note-create-title"
            type="text"
            placeholder="Title"
            onChange={this.handleInput("title")}
            value={this.state.title}
            />
        ) : null }

          <textarea 
            className="note-create-body"
            placeholder="Take a note..."
            onClick={this.togglePanel}
            onChange={this.handleInput("body")}
            value={this.state.body}
          />
        </div>

      {this.state.open ? (

        <div className="note-create-bottom-tray">
          
          <h1 className="note-create-actions">note form buttons</h1>
          
          <button
          className="note-create-button"
          onClick={this.handleSubmit}>
            Close
          </button>

        </div>

        ) : null }

      </div>
    )
  }
}

export default NoteFormCreate;