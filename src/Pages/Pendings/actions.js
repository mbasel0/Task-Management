import {  DELETE_TASK, DELETE_TASK_COMPLETED, GET_PENDING_TASKS, SET_PENDING_TASKS, } from "./constants";

export function getPendingTasks() {
  return {
    type: GET_PENDING_TASKS,
  };
}

export function setPendingTasks(values) {
  return {
    type: SET_PENDING_TASKS,
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