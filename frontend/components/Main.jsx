import React from 'react';
import NoteFormCreateContainer from "./NoteFormCreateContainer";
import NoteIndexContainer from './NoteIndexContainer';
import LabelIndexContainer from './LabelIndexContainer';

const Main = () => {

  return (
    
    <div>

    <div className="header">
      <div className="header-left">
        <i className="fas fa-bars fa-lg"></i>
        <i className="far fa-lightbulb fa-2x"></i>
        <h1 className="header-product">Keeper</h1>
      </div>   
    </div>

    <div className="main">
      
      <div className="sidebar">
        <LabelIndexContainer />
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
