
import React from 'react';
import { createAssignment } from '../actions/assignment_actions';
import LabelEditFormItem from './LabelEditFormItem';

class LabelEditForm extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
                  editMode: false,
                  name: "",
                  user_id: this.props.currentUserId,
                  note_id: this.props.noteId
                };
    this.turnOnEditMode = this.turnOnEditMode.bind(this);
    this.createAndAssign = this.createAndAssign.bind(this);
  }

  turnOnEditMode(e) {
    e.stopPropagation();
    this.setState({ editMode: true });
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  createAndAssign(e) {
    e.stopPropagation();
    this.props.createLabel(this.state)
      .then(label => this.props.createAssignment({
              note_id: this.state.note_id,
              label_id: label.label.id,
              }));
  }

  render() {

    const noteAssignments = this.props.assignments.filter(assignment => assignment.note_id === this.props.noteId)

    const checkIcon = this.state.editMode ? 
      ( <i className="fal fa-check" onClick={this.createAndAssign}></i> ) :
      ( null )

    return (
      <div className="label-edit-form">
        
        <div className="label-edit-form-title">
          Label note
        </div>

        <div className="label-edit-form-input-container">
          <input 
            type="text"
            className="label-edit-form-input"
            placeholder="Enter Label Name"
            onClick={this.turnOnEditMode}
            onChange={this.handleInput("name")}
          />
          { checkIcon }
        </div>

        <ul className="label-edit-form-ul">
          {this.props.labels.map(label =>
              <LabelEditFormItem
                key={label.id}
                label={label}
                noteId={this.props.noteId}
                noteLabels={noteAssignments.map(noteAssignment => noteAssignment.label_id)}
                currentUserId={this.props.currentUserId}
                createAssignment={this.props.createAssignment}
                deleteAssignment={this.props.deleteAssignment}
              />
          )}
        </ul>
      
      </div>
    )
  }
  
}

export default LabelEditForm;
