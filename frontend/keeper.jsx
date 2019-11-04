import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/Root';
import { signup, login, logout } from './actions/session_actions';

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
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // Testing ends

  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root);
});
