
import { RECEIVE_ALL_LABELS, RECEIVE_LABEL, REMOVE_LABEL } from "../actions/label_actions";

const labelsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {

    case RECEIVE_ALL_LABELS:
      return action.labels;

    case RECEIVE_LABEL:
      newState[action.label.id] = action.label;
      return newState;

    case REMOVE_LABEL:
      delete newState[action.labelId];
      return newState;

    default:
      return oldState;
  }
}

export default labelsReducer;
