import React from 'react';


class NoteForm extends React.Component {

  constructor(props)  {
    super(props);
    this.state = this.props.note
    
    }
  
  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
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
          <h1>Note form buttons</h1>
          <h1>Close</h1>
        </div>
      </div>
    )
  }
}

export default NoteForm;