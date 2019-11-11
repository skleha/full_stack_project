
import { RECEIVE_ALL_ASSIGNMENTS, RECEIVE_ASSIGNMENT, REMOVE_ASSIGNMENT } from "../actions/assignment_actions";

const assignmentsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    
    case RECEIVE_ALL_ASSIGNMENTS:
      return action.assignments;

    case RECEIVE_ASSIGNMENT:
      newState[action.assignment.id] = action.assignment;
      return newState;

    case REMOVE_ASSIGNMENT:
      delete newState[action.assignmentId];
      return newState;

    default:
      return oldState;
  }
};

export default assignmentsReducer;