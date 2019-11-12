import React from 'react';


const NoteLabelsIndexItem = props => {

  return (
    <li className="note-label-index-item">
      
      {props.label.name}
      
      <i className="fas fa-times fa-lg note-label-icon" onClick={(e) => {
          e.stopPropagation();
          props.deleteAssignment(props.assignmentId);
        }}
        ></i>

    </li>
  )
}

export default NoteLabelsIndexItem;



