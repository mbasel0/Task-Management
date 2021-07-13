import { GET_TASK_BY_ID, SET_TASK_BY_ID, UPTADE_TASK } from "./constants";

export function getTaskById(id) {
  return {
    type: GET_TASK_BY_ID,
    id,
  };
}


export function setTaskById(values) {
  return {
    type: SET_TASK_BY_ID,
    values,
  };
}

export function uptadeTask(id, values) {
  return {
    type: UPTADE_TASK,
    values, id
  }
}