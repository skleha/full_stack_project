
import React from 'react';
import LabelIndexEditFormItem from './LabelIndexEditFormItem';


class LabelIndexEditForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {  name: "",
                    user_id: this.props.userId,
                    formToggle: false
                }
    this.toggleForm = this.toggleForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleForm(e) {
    this.setState({ formToggle: !this.state.formToggle })
  }

  handleInput(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    this.props.createLabel(this.state);
  }


  render() {

    let formIcon, formCheck;

    if (this.state.formToggle) {
      formIcon = (<i className="fal fa-times label-form-create-left-icon" onClick={this.toggleForm}></i>);
      formCheck = (<i className="fal fa-check label-form-create-right-icon" onClick={this.handleSubmit}></i>);
    } else {
      formIcon = (<i className="far fa-plus label-form-create-left-icon" onClick={this.toggleForm}></i>);
      formCheck = (<div></div>);
    }

    return (
      <div className="label-index-edit-form">
        
        <div className="label-index-edit-form-title">
          <h2>Edit Labels</h2>
        </div>

        <div className="label-index-edit-form-input">
         { formIcon }
         <input
            type="text"
            className="label-index-create-form-text-input"
            placeholder="Create New Label"
            onClick={this.toggleForm}
            onChange={this.handleInput("name")}
          />
         { formCheck }
        </div>  

        <ul className="label-index-edit-form-index">
          {this.props.labels.map(label => 
            <LabelIndexEditFormItem
              key={label.id}
              label={label}
              updateLabel={this.props.updateLabel}
              deleteLabel={this.props.deleteLabel}
            />)}
        </ul>  
        <div className="label-index-edit-form-done">
            <h2>Done</h2>
        </div>
      </div>
    )
  }
}

export default LabelIndexEditForm;
