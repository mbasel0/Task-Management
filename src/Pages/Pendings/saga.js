import { put, takeLatest, } from "redux-saga/effects";
import {  deleteTaskCompleted, setPendingTasks ,} from "./actions";
import { GET_PENDING_TASKS, DELETE_TASK } from "./constants";
import ApiStore, { } from "../../utils/request";



export function* getPendingsSaga(action) {
  try {
    const response = yield ApiStore.task.get("/pendings");
    yield put(setPendingTasks(response.data.payload));
  }
  catch (error) {
  }
}

export function* delTaskSaga(action) {
  console.log(action.values)
  try {
    const response = yield ApiStore.task.delete(`/${action.values}`);
    yield put(deleteTaskCompleted(response.data.payload.id));
  }
  catch (error) {
  }
}








export default function* homeSaga() {
  yield takeLatest(DELETE_TASK, delTaskSaga);
  yield takeLatest(GET_PENDING_TASKS, getPendingsSaga);
}
