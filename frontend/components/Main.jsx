
import React from 'react';
import NoteFormCreateContainer from "./NoteFormCreateContainer";
import NoteIndexContainer from './NoteIndexContainer';
import LabelIndexContainer from './LabelIndexContainer';

const Main = props => {

  return (
    
    <div>

      <div className="header">

        <div className="header-left">
          <i className="fal fa-bars fa-lg"></i>
          <i className="fal fa-lightbulb fa-lg"></i>
          <h1 className="header-product">Keeper</h1>
        </div>
      
        <div className="header-search">
          
          <input
            className="header-search-input"
            type="text"
            placeholder="Search"/>
          
          <i className="far fa-search fa-lg"></i>
        
        </div>

        <div className="header-logout" onClick={props.logout}>
          Logout
        </div>

      </div>

      <div className="subheader">

          <ul className="subheader-sidebar" onClick={props.deleteFilter}>
            <li className="subheader-sidebar-li">
              <i className="far fa-lightbulb fa-lg"></i>
              <h1 className="subheader-sidebar-all-notes">All Notes</h1>
            </li>
          </ul>

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
