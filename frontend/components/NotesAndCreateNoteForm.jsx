import React from 'react';
import NoteFormCreateContainer from "./NoteFormCreateContainer";
import NoteIndexContainer from './NoteIndexContainer';

const NotesAndCreateNoteForm = () => {

  return (
    
    <div className="main">
      
      <div>
        <NoteFormCreateContainer />
      </div>

      <div>
        <NoteIndexContainer />
      </div>

    </div>
  )
}

export default NotesAndCreateNoteForm;
