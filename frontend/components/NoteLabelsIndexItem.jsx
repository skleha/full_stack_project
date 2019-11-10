import React from 'react';


const NoteLabelsIndexItem = props => {

  const labelObj = props.allLabels[props.labelId];

  return (
    <li className="note-label-index-item">
      {labelObj["name"]}
      <span className="note-label-icon"><i className="fas fa-times fa-lg"></i></span>
    </li>
  )
}

export default NoteLabelsIndexItem;



