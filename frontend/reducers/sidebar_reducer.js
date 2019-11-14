
import { TOGGLE_SIDEBAR } from '../actions/sidebar_actions';

const sidebarReducer = (oldState = true, action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return !oldState;

    default:
      return oldState;
  }

}

export default sidebarReducer;