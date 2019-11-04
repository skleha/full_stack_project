import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store'
import { signup, login, logout } from "./actions/session_actions";

document.addEventListener("DOMContentLoaded", () => {
  const store = configureStore();
  const root = document.getElementById("root");

  // Testing begins
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  // Testing ends

  ReactDOM.render(<h1>You've got the root</h1>, root);
});

