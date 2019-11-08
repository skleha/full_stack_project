
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import autosize from 'autosize';
import { fetchAssignment, createAssignment, deleteAssignment } from '../frontend/utils/assignment_api_util';


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
  window.fetchAssignment = fetchAssignment;
  window.createAssignment = createAssignment;
  window.deleteAssignment = deleteAssignment;
  // Testing ends

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);

  // using autosize library to make text area in note forms auto-resizing
  const textArea1 = document.querySelector('.note-create-body');
  const textArea2 = document.querySelector('.note-update-body');
  autosize(textArea1);
  autosize(textArea2);
});
