import { all, put, takeLatest, } from "redux-saga/effects";
import { GET_TASKS, DELETE_TASK, COMPLETE_TASK, REJECT_TASK } from "./constants";
import { setTasks,  deleteTaskCompleted,setTaskCompleted } from "./actions";
import ApiStore, { } from "../../utils/request";
import { findAllInRenderedTree } from "react-dom/test-utils";



export function* getTaskSaga(action) {
  try {
    const response = yield ApiStore.task.get("/");
    yield put(setTasks(response.data.payload));
  }
  catch (error) {
  }
}

export function* delTaskSaga(action) {

  try {
    const response = yield ApiStore.task.delete(`/${action.values}`);
    yield put(deleteTaskCompleted(response.data.payload.id));
  }
  catch (error) {
 
  }
}

export function* completeTaskSaga(action) {
  try {
    const response = yield ApiStore.task.get(`/complete/${action.id}`);
    yield put(setTaskCompleted(response.data.payload));  
  }
  catch (error) {
    alert("Sadece kendi departmanınıza ait ve beklemede olan taskleri tamamlayabilirsiniz.")
  }
}


export function* rejectTaskSaga(action) {
  console.log(action.values)
  try {
    const response = yield ApiStore.task.get(`/reject/${action.id}`);
    yield put(setTaskCompleted(response.data.payload));  
  }
  catch (error) {
    alert("Sadece kendi departmanınıza ait ve beklemede olan taskleri reddedebilirsiniz.")
  }
}







export default function* homeSaga() {
  yield takeLatest(DELETE_TASK, delTaskSaga);
  yield takeLatest(GET_TASKS, getTaskSaga);
  yield takeLatest(COMPLETE_TASK,completeTaskSaga);
  yield takeLatest(REJECT_TASK,rejectTaskSaga);
}
