
import React from 'react';

class LabelIndexItem extends React.Component {

  render() {

    return (
      <li key={this.props.label.id} className="label-index-item">
        <i className="fal fa-tag label-index-icon"></i>
        <h3>{this.props.label.name}</h3>
      </li>
    )
  }
}

export default LabelIndexItem;
