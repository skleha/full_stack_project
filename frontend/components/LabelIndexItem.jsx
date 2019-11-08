
import React from 'react';

class LabelIndexItem extends React.Component {

  render() {

    return (
      <li key={this.props.label.id} className="label-item">
        <h3>{this.props.label.name}</h3>
      </li>
    )
  }
}

export default LabelIndexItem;