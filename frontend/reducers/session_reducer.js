import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER, RECEIVE_CURRENT_NOTE_ID } from '../actions/session_actions';

const _nullSession = {
  id: null,
  currentNoteId: null
};

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);

  switch (action.type) {

    case RECEIVE_CURRENT_USER:
      debugger
      newState["id"] = action.user.id;
      return newState;

    case LOGOUT_CURRENT_USER:
      return _nullSession;

    case RECEIVE_CURRENT_NOTE_ID:
      newState["currentNoteId"] = action.noteId;
      return newState;

    default:
      return state;
  }
};

export default sessionReducer;
