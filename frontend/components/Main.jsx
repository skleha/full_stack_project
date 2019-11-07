import React from 'react';
import NoteFormCreateContainer from "./NoteFormCreateContainer";
import NoteIndexContainer from './NoteIndexContainer';

const Main = () => {

  return (
    
    <div>

    <div className="header">
      <div className="header-left">
        <i className="fas fa-bars"></i>
        <i className="far fa-lightbulb"></i>
        <h1 className="header-product">Keeper</h1>
      </div>   
    </div>

    <div className="main">
      
      <div className="sidebar">
        <h1>labels go here</h1>
      </div>

      <div className="note-form-note-index">
        <div className="main-note-form">
          <NoteFormCreateContainer />
        </div>

        <div className="main-note-index">
          <NoteIndexContainer />
        </div>
      </div>

    </div>

    </div>
  )
}

export default Main;
