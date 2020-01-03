
import React from 'react';

class LabelIndexItem extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.updateFilter(this.props.label.name);
  }

  render() {

    return (
      <li
        key={this.props.label.id}
        className="label-index-item"
        onClick={this.handleClick}>
        
        <i className="fal fa-tag label-index-icon"></i>
        
        <h3>{this.props.label.name}</h3>
      
      </li>
    )
  }
}

export default LabelIndexItem;
