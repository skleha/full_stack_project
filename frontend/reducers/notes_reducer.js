import { RECEIVE_ALL_NOTES, RECEIVE_NOTE, REMOVE_NOTE } from "../actions/note_actions";

const notesReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {

    case RECEIVE_ALL_NOTES:
      return action.notes;

    case RECEIVE_NOTE:
      debugger
      newState[action.note.id] = action.note;
      return newState;

    case REMOVE_NOTE:
      delete newState[action.noteId];
      return newState;

    default:
      return oldState;
  }
};

export default notesReducer;