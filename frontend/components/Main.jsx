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
          <i className="far fa-lightbulb fa-lg"></i>
          <h1 className="header-product">Keeper</h1>
        </div>   
      
      </div>

      <div className="subheader">

          <div className="subheader-sidebar">
            <h1>Notes</h1>
            <h1>Reminders</h1>
          </div>

          <div className="subheader-note-form">
            <NoteFormCreateContainer />
          </div>

      </div>

      <div className="main">
        
        <div className="main-sidebar">
          <LabelIndexContainer />
        </div>
          
        <div className="main-note-index">
          <NoteIndexContainer />
        </div>

      </div>

    </div>
  )
}

export default Main;
