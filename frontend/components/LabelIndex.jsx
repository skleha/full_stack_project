
import React from 'react';
import LabelIndexItem from './LabelIndexItem';

class LabelIndex extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchLabels();
  }

  handleClick(e) {
    this.props.openModal('LabelIndexEditForm');
  }

  render () {

    const { labels } = this.props;

    return (
      <div className="labels-sidebar">
        <h3 className="labels-title">LABELS</h3>
        <ul className="labels-ul">
          {labels.map(label => 
            <LabelIndexItem
            key={label.id}
            label={label}
            updateFilter={updateFilter}         
            />)}
        </ul>
        <ul>
          <li className="label-index-item" onClick={this.handleClick}>
            <i className="fal fa-pencil  label-index-icon"></i>
            <h3>Edit Labels</h3>
          </li>
        </ul>

      </div>
    )
  }
}

export default LabelIndex;
