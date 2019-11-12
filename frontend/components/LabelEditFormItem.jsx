
import React from 'react';

class LabelEditFormItem extends React.Component {

  render() {
    
    const checked = (this.props.noteLabels.includes(this.props.label.id)) ? "checked" : ""

    return (
      <li className="label-edit-form-item">

        <input className="label-edit-form-item-checkbox" type="checkbox" checked={checked} />
        <h3 className="label-edit-form-item-name">{this.props.label.name}</h3>

      </li>
    )
  }

}

export default LabelEditFormItem;