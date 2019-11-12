
import React from 'react';
import { timingSafeEqual } from 'crypto';

class LabelEditFormItem extends React.Component {

  constructor(props) {
    super(props);
    this.noteAssignment = this.props.noteAssignments.filter(noteAssignment => noteAssignment.label_id === this.props.label.id)
    const checked = (this.noteAssignment.length > 0) ? true : false;
    this.state = { isLabel: checked }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    e.stopPropagation();
    this.setState({ isLabel: !this.state.isLabel })
    this.handleAssignmentChange();
  }

  handleAssignmentChange() {
    if (this.state.isLabel) {
      this.props.deleteAssignment(this.noteAssignment[0].id);  
    } else {
      this.props.createAssignment({note_id: this.props.noteId, label_id: this.props.label.id});
    }
  }


  render() {
    
    return (
      <li className="label-edit-form-item">

        <input
          className="label-edit-form-item-checkbox"
          type="checkbox"
          checked={this.state.isLabel}
          onChange={this.handleChange}
          onClick={e => e.stopPropagation()}
        />
        
        <h3 className="label-edit-form-item-name">{this.props.label.name}</h3>

      </li>
    )
  }

}

export default LabelEditFormItem;