
import React from 'react';
import NoteFormUpdateContainer from './NoteFormUpdateContainer';
import LabelIndexEditFormContainer from './LabelIndexEditFormContainer';


const Modal = ({ modal, closeModal }) => {
  
  // if modal not defined, return null, nothing is rendered
  if (!modal) {
    return null;
  }

  // modal is defined, meaning it was passed in, meaning we'll render something
  // first, identify component to be used in conjunction with modal
  let component;
  
  switch (modal) {
  
    case 'editNoteForm':
      component = <NoteFormUpdateContainer />;
      break;

    case 'LabelIndexEditForm':
      component = <LabelIndexEditFormContainer />;
      break;
  
      default:
      return null;
  }


  // render the modal (css will take it from there), render component
  // Stop propagation so that clicking anywhere on the component doesn't kill the modal
  return (

    <div className="modal-background" onClick={closeModal}>
    
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    
    </div>
  );
}

export default Modal;