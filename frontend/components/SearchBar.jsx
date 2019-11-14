
import React from 'react';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);
    this.filterFunc = this.filterFunc.bind(this);
  }

  componentDidMount() {
    // previously called fetch notes in Note Index, but doing it here
    // so that the state of this component has something in it.
    // if not here, the state here will be empty.

    this.props.fetchNotes()
      .then(() => this.setState({ initialNotes: this.props.notes }))
  }

  filterFunc(e) {
    
    let filteredNotes;

    if (e.currentTarget.value === "") {
      filteredNotes = this.state.initialNotes.slice();
    } else {
      filteredNotes = this.state.initialNotes.slice();
      filteredNotes = filteredNotes.filter(note => {
        return (note.body.toLowerCase().search(e.currentTarget.value.toLowerCase()) !== -1 ||
                note.title.toLowerCase().search(e.currentTarget.value.toLowerCase()) !== -1);
      })
    }

    const normalizedNotes = filteredNotes.reduce((acc, ele) => {
      acc[ele.id] = ele;
      return acc;
    }, {});
    
    this.props.noteSearch(normalizedNotes);
  }


  render() {

    return (
      <div className="search">

        <input
          className="search-input"
          type="text"
          placeholder="Search"
          onChange={this.filterFunc}
        />

        <i className="far fa-search fa-lg"></i>

      </div>
    )
  }

}

export default SearchBar;
