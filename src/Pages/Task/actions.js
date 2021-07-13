import {GET_TASKS,SET_TASKS,DELETE_TASK, DELETE_TASK_COMPLETED,COMPLETE_TASK,SET_TASK_COMPLETED, REJECT_TASK} from "./constants";

export function getTasks() {
  return {
    type: GET_TASKS,
  };
}

export function setTasks(values) {
  return {
    type: SET_TASKS,
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
  };
}

export function completeTask(id){
return{
  type: COMPLETE_TASK,
  id,
  };
}

export function setTaskCompleted(values){
  return{
    type: SET_TASK_COMPLETED,
    values,
  }
}

export function rejectTask(id){
  return{
    type: REJECT_TASK,
    id,
    };
  }
  


