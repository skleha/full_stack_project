
import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';
export const RECEIVE_CURRENT_NOTE_ID = "RECEIVE_CURRENT_NOTE_ID";
export const REMOVE_CURRENT_NOTE_ID = "REMOVE_CURRENT_NOTE_ID";

// regular actions

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user,
});

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

// clear session errors, regular action

export const clearErrors = () => ({
  type: CLEAR_SESSION_ERRORS
});


// store a current note id / remove a current note id

export const receiveCurrentNoteId = noteId => ({
  type: RECEIVE_CURRENT_NOTE_ID,
  noteId
})

export const removeCurrentNoteId = () => ({
  type: REMOVE_CURRENT_NOTE_ID
})



// thunk action creators

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((error) => dispatch(receiveErrors(error)))
);

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then((user) => dispatch(receiveCurrentUser(user)))
    .fail((error) => dispatch(receiveErrors(error)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(() => dispatch(logoutCurrentUser()))
);

