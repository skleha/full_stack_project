import { fetchNotes } from './note_actions';

export const RECEIVE_FILTER = 'RECEIVE_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const receiveFilter = filter => ({
  type: RECEIVE_FILTER,
  filter
});

const removeFilter = () => ({
  type: REMOVE_FILTER
});


export const updateFilter = filter => (dispatch, getState) => {
  dispatch(receiveFilter(filter));
  return fetchNotes(getState().ui.filter)(dispatch);
};

export const deleteFilter = () => dispatch => {
  dispatch(removeFilter());
  return fetchNotes()(dispatch);
};
