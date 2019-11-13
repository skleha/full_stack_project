
import * as NoteAPIUtil from '../utils/note_api_util';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

const receiveNotes = notes => {
  return({
    type: RECEIVE_ALL_NOTES,
    notes
  })
};

const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

const removeNote = noteId => ({
  type: REMOVE_NOTE,
  noteId
});

export const fetchNotes = filter => dispatch => (
  NoteAPIUtil.fetchNotes(filter)
    .then(notes => dispatch(receiveNotes(notes)))
);

export const fetchNote = noteId => dispatch => (
  NoteAPIUtil.fetchNote(noteId)
    .then(note => dispatch(receiveNote(note)))
);

export const createNote = note => dispatch => (
  NoteAPIUtil.createNote(note)
    .then(note => dispatch(receiveNote(note)))
);

export const updateNote = note => dispatch => (
  NoteAPIUtil.updateNote(note)
    .then(note => dispatch(receiveNote(note)))
);

export const deleteNote = noteId => dispatch => (
  NoteAPIUtil.deleteNote(noteId)
    .then( () => dispatch(removeNote(noteId)))
);
