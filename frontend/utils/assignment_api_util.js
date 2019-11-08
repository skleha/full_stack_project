
export const fetchAssignment = assignmentId => {
  return $.ajax({
    url: `/api/assignments/${assignmentId}`,
    method: 'GET',
  });
};

export const createAssignment = assignment => {
  return $.ajax({
    url: `/api/assignments/`,
    method: 'POST',
    data: { assignment }
  });
};

export const deleteAssignment = assignmentId => {
  return $.ajax({
    url: `/api/assignments/${assignmentId}`,
    method: 'DELETE'
  });
};

