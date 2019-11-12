
import React from 'react';
import NoteLabelsIndexItem from './NoteLabelsIndexItem';

class NoteLabelsIndex extends React.Component {

  render() {

    const noteAssignments = this.props.assignments.filter(assignment => assignment.note_id === this.props.noteId);

    return (
      <ul className="note-labels-ul">
        {noteAssignments.map(assignment => 
          <NoteLabelsIndexItem
            key={assignment.label_id}
            label={this.props.labels[assignment.label_id]}
            assignmentId={assignment.id}
            deleteAssignment={this.props.deleteAssignment}
          />
        )}
      </ul>
    )
  }
}

export default NoteLabelsIndex;
