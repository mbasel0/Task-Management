import { GET_MY_TASKS, SET_MY_TASKS, DELETE_TASK, DELETE_TASK_COMPLETED, } from "./constants";

export function getMyTasks() {
  return {
    type: GET_MY_TASKS,
  };
}

export function setMyTasks(values) {
  return {
    type: SET_MY_TASKS,
    values,
  };
}

export function deleteTask(values) {
  return {
    type: DELETE_TASK,
    values,
  };
}

export function deleteTaskCompleted(id) {
  return {
    type: DELETE_TASK_COMPLETED,
    id,
  }
};