import * as SessionAPIUtil from '../utils/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';


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
