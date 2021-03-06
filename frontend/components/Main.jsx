
import React from 'react';
import NoteFormCreateContainer from './NoteFormCreateContainer';
import SearchBarContainer from './SearchBarContainer';
import NoteIndexContainer from './NoteIndexContainer';
import LabelIndexContainer from './LabelIndexContainer';


class Main extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { showSidebar: "show" }
    this.toggleSidebar = this.toggleSidebar.bind(this);
  }

  toggleSidebar(e) {
    const css = (this.state.showSidebar === "show") ? "hidden" : "show";
    this.setState({ showSidebar: css })
  }

  render() {

    const filterDisplay = (this.props.currentFilter) ? (
      <h1 className="header-left-title">{this.props.currentFilter}</h1>
    ) : (
      <div className="header-left-title-display">
        <i className="fal fa-lightbulb fa-lg"></i>
        <h1 className="header-left-title">Keeper</h1>
      </div>
    )

    return (
      
      <div>

        <div className="header">

          <div className="header-left">
            <i id="toggleSidebar" className="fal fa-bars fa-lg" onClick={this.toggleSidebar}></i>
            {filterDisplay}
          </div>
        
          <SearchBarContainer />
          
          <div className="header-logout" onClick={this.props.logout}>
            Logout
          </div>

        </div>

        <div className="subheader">
          
          <ul className={"subheader-sidebar " + this.state.showSidebar} onClick={this.props.deleteFilter}>
            <li className="subheader-sidebar-li">
              <i className="far fa-lightbulb fa-lg"></i>
              <h1 className="subheader-sidebar-all-notes">All Notes</h1>
            </li>
          </ul>

          <div className={"subheader-note-form " + this.state.showSidebar}>
            <NoteFormCreateContainer />
          </div>

        </div>

        <div className="main">
          
          <div className={"main-sidebar " + this.state.showSidebar}>
            <LabelIndexContainer />
          </div>
            
          <div className={"main-note-index " + this.state.showSidebar}>
            <NoteIndexContainer />
          </div>

        </div>

      </div>
    )
  }
}

export default Main;
