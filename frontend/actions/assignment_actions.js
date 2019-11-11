
import * as AssignmentAPIUtil from '../utils/assignment_api_util';
import { REMOVE_LABEL } from './label_actions';

export const RECEIVE_ALL_ASSIGNMENTS = 'RECEIVE_ALL_ASSIGNMENTS';
export const RECEIVE_ASSIGNMENT = 'RECEIVE_ASSIGNMENT';
export const REMOVE_ASSIGNMENT = 'REMOVE_ASSIGNMENT';

const receiveAssignments = assignments => {
  return ({
    type: RECEIVE_ALL_ASSIGNMENTS,
    assignments
  })
};

const receiveAssignment = assignment => ({
  type: RECEIVE_ASSIGNMENT,
  assignment
});

const removeAssignment = assignmentId => ({
  type: REMOVE_ASSIGNMENT,
  assignmentId
});

export const fetchAssignments = () => dispatch (
  AssignmentAPIUtil.fetchAssignments()
    .then(assignments => dispatch(receiveAssignments(assignments)))
)

export const fetchAssignment = assignmentId => dispatch (
  AssignmentAPIUtil.fetchAssignment(assignmentId)
    .then(assignment => dispatch(receiveAssignment(assignment)))
)

export const createAssignment = assignment => dispatch (
  AssignmentAPIUtil.createAssignment(assignment)
    .then(assignment = dispatch(receiveAssignment(assignment)))
)

export const deleteAssignment = assignmentId => dispatch (
  AssignmentAPIUtil.deleteAssignment(assignmentId)
    .then(() => dispatch(removeAssignment(assignmentId)))
)

