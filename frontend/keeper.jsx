
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import autosize from 'autosize';


document.addEventListener("DOMContentLoaded", () => {
  
  let store;

  // bootstrap the current_user; see also root.html.erb
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // Testing begins
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // Testing ends

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  // using autosize library to make text area auto-resizing
  const textArea = document.querySelector('.note-form-body');
  autosize(textArea);

});




// Session testing
// import { signup, login, logout } from './actions/session_actions';
// window.signup = signup;
// window.login = login;
// window.logout = logout;

// Note API Testing
// import * as NoteAPIUtil from './utils/note_api_util'
// window.fetchNotes = NoteAPIUtil.fetchNotes;
// window.fetchNote = NoteAPIUtil.fetchNote;
// window.createNote = NoteAPIUtil.createNote;
// window.updateNote = NoteAPIUtil.updateNote;
// window.deleteNote = NoteAPIUtil.deleteNote;

// Actions API Testing
// import { fetchNotes, fetchNote, createNote, updateNote, deleteNote } from './actions/note_actions';
// window.fetchNotes = fetchNotes;
// window.fetchNote = fetchNote;
// window.createNote = createNote;
// window.updateNote = updateNote;
// window.deleteNote = deleteNote;