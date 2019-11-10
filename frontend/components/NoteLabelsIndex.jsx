
import React from 'react';
import NoteLabelsIndexItem from './NoteLabelsIndexItem';

class NoteLabelsIndex extends React.Component {

  render() {

    if (!this.props.labelIds) return null;
    
    return (
      <ul className="note-labels-ul">
        {this.props.labelIds.map(labelId => 
          <NoteLabelsIndexItem
            key={labelId}
            labelId={labelId}
            allLabels={this.props.allLabels} /> ) }
      </ul>
    )
  }
}

export default NoteLabelsIndex;
