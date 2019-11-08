
import * as LabelAPIUtil from '../utils/label_api_util';

export const RECEIVE_ALL_LABELS = 'RECEIVE_ALL_LABELS';
export const RECEIVE_LABEL = 'RECEIVE_LABEL';
export const REMOVE_LABEL = 'REMOVE_LABEL';

const receiveLabels = labels => {
  return ({
    type: RECEIVE_ALL_LABELS,
    labels
  })
};

const receiveLabel = label => ({
  type: RECEIVE_LABEL,
  label
});

const removeLabel = labelId => ({
  type: REMOVE_LABEL,
  labelId
});

export const fetchLabels = () => dispatch => (
  LabelAPIUtil.fetchLabels()
    .then(labels => dispatch(receiveLabels(labels)))
);

export const fetchLabel = labelId => dispatch => (
  LabelAPIUtil.fetchLabel(labelId)
    .then(label => dispatch(receiveLabel(label)))
);

export const createLabel = label => dispatch => (
  LabelAPIUtil.createLabel(label)
    .then(label => dispatch(receiveLabel(label)))
);

export const updateLabel = label => dispatch => (
  LabelAPIUtil.updateLabel(label)
    .then(label => dispatch(receiveLabel(label)))
);

export const deleteLabel = labelId => dispatch => (
  LabelAPIUtil.deleteLabel(labelId)
    .then(() => dispatch(removeLabel(labelId)))
);

