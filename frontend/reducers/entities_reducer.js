import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import notesReducer from './notes_reducer';
import labelsReducer from './labels_reducer';
import assignmentsReducer from './assignments_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  notes: notesReducer,
  labels: labelsReducer,
  assignments: assignmentsReducer
});

export default entitiesReducer;
