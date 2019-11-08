
export const fetchLabels = () => {
  return $.ajax({
    url: '/api/labels',
    method: 'GET'
  });
};

export const fetchLabel = labelId => {
  return $.ajax({
    url: `/api/labels/${labelId}`,
    method: 'GET'
  });
};

export const createLabel = label => {
  return $.ajax({
    url: '/api/labels',
    method: 'POST',
    data: { label }
  });
};

export const updateLabel = label => {
  return $.ajax({
    url: `/api/labels/${label.id}`,
    method: 'PATCH',
    data: { label }
  });
};

export const deleteLabel = labelId => {
  return $.ajax({
    url: `/api/labels/${labelId}`,
    method: 'DELETE'
  });
};
