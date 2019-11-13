
import { RECEIVE_FILTER, REMOVE_FILTER } from '../actions/filter_actions';


const filterReducer = (oldState = null, action) => {
  Object.freeze(oldState);

  switch (action.type) {

    case RECEIVE_FILTER:
      return action.filter;

    case REMOVE_FILTER:
      return null;

    default: 
      return oldState;
  }
}

export default filterReducer;