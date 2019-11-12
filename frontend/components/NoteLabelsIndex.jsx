
import React from 'react';
import NoteLabelsIndexItem from './NoteLabelsIndexItem';

class NoteLabelsIndex extends React.Component {

  render() {

    const noteAssignments = this.props.assignments.filter(assignment => assignment.note_id === this.props.noteId);
    const noteLabelIds = noteAssignments.map(assignment => assignment.label_id);
    const noteLabels = this.props.labels.filter(label => noteLabelIds.includes(label.id));

    return (
      <ul className="note-labels-ul">
        {noteLabels.map(label => 
          <NoteLabelsIndexItem
            key={label.id}
            label={label}
          />
        )}
      </ul>
    )
  }
}

export default NoteLabelsIndex;
