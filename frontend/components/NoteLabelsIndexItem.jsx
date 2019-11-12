import React from 'react';


const NoteLabelsIndexItem = props => {

  return (
    <li className="note-label-index-item">
      {props.label.name}
      <i className="fas fa-times fa-lg note-label-icon"></i>
    </li>
  )
}

export default NoteLabelsIndexItem;



