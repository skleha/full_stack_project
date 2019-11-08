
import React from 'react';
import LabelIndexItem from './LabelIndexItem';

class LabelIndex extends React.Component {

  componentDidMount() {
    this.props.fetchLabels();
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
            />)}
        </ul>
      </div>
    )
  }
}

export default LabelIndex;
