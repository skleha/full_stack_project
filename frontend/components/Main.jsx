
import React from 'react';
import NoteFormCreateContainer from './NoteFormCreateContainer';
import SearchBarContainer from './SearchBarContainer';
import NoteIndexContainer from './NoteIndexContainer';
import LabelIndexContainer from './LabelIndexContainer';


class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { showSidebar: true }
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar(e) {
    this.setState({ showSidebar: !this.state.showSidebar })
  }

  render() {

    const subheaderSidebar = (this.state.showSidebar) ? (
      <ul className="subheader-sidebar" onClick={this.props.deleteFilter}>
        <li className="subheader-sidebar-li">
          <i className="far fa-lightbulb fa-lg"></i>
          <h1 className="subheader-sidebar-all-notes">All Notes</h1>
        </li>
      </ul>
    ) : ( null )

    const mainSidebar = (this.state.showSidebar) ? (
      <div className="main-sidebar">
        <LabelIndexContainer />
      </div>
    ) : ( null )

    return (
      
      <div>

        <div className="header">

          <div className="header-left">
            <i className="fal fa-bars fa-lg" onClick={this.toggleSidebar}></i>
            <i className="fal fa-lightbulb fa-lg"></i>
            <h1 className="header-product">Keeper</h1>
          </div>
        
          <SearchBarContainer />
          
          <div className="header-logout" onClick={this.props.logout}>
            Logout
          </div>

        </div>

        <div className="subheader">
          
          { subheaderSidebar }

          <div className="subheader-note-form">
            <NoteFormCreateContainer />
          </div>

        </div>

        <div className="main">
          
          { mainSidebar }
            
          <div className="main-note-index">
            <NoteIndexContainer />
          </div>

        </div>

      </div>
    )
  }
}

export default Main;
