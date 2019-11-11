
import React from 'react';

class LabelEditForm extends React.Component {

  constructor(props)  {
    super(props);
    this.state = { editMode: false };
    this.turnOnEditMode = this.turnOnEditMode.bind(this);
  }

  turnOnEditMode(e) {
    e.stopPropagation();
    this.setState({ editMode: true });
  }

  render() {

    const checkIcon = this.state.editMode ? 
      ( <i className="fal fa-check"></i> ) :
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
          />
          { checkIcon }

        </div>
      
      
      </div>
    )
  }
  
}

export default LabelEditForm;