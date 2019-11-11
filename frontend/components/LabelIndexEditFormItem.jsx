
import React from 'react';

class LabelIndexEditFormItem extends React.Component {

  constructor(props)  {
    super(props);
    this.state = {
                    id: this.props.label.id,
                    name: this.props.label.name,
                    user_id: this.props.label.user_id,
                    deleteMode: false,
                    editMode: false
                    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editOn = this.toggleEdit.bind(this);
    this.toggleDelete = this.toggleDelete.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  toggleDelete(e) {
    this.setState({ deleteMode: !this.state.deleteMode })
  }

  toggleEdit(e) {
    this.setState({ editMode: !this.state.deleteMode })
  }

  editOn(e) {
    this.setState({ editMode: true })
  }
 
  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleDelete(e) {
    this.props.deleteLabel(this.state.id);
  }

  handleUpdate(e) {
    this.props.updateLabel(this.state);
    this.setState({ editMode: !this.state.editMode });
  }

  render() {
    
    let leftIcon;

    if (this.state.deleteMode) {
      leftIcon = (
      <i 
        className="fas fa-trash-alt label-form-edit-left-icon"
        onMouseLeave={this.toggleDelete}
        onClick={this.handleDelete}
      ></i>);
    } else {
      leftIcon = (
      <i
        className="fas fa-tag label-form-edit-left-icon"
        onMouseEnter={this.toggleDelete}  
      ></i>)
    }

    let rightIcon;

    if (this.state.editMode) {
      rightIcon = (
        <i
          className="fal fa-check label-form-create-right-icon"
          onClick={this.handleUpdate}>
        </i>);
    } else {
      rightIcon = (
        <i
          className="fas fa-pencil label-form-edit-right-icon"
          onClick={this.toggleEdit}>
        </i>)
    }

    return (
      <li className="label-index-form-edit-item">
        { leftIcon }
        <input
          type="text"
          className="label-index-edit-form-text-input"
          value={this.state.name}
          onChange={this.handleInput("name")}
          onClick={this.editOn}
        />
        { rightIcon }
      </li>
    )
  }
}

export default LabelIndexEditFormItem;
