import { put, takeLatest, } from "redux-saga/effects";
import { setMyTasks,  deleteTaskCompleted ,} from "./actions";
import { GET_MY_TASKS, DELETE_TASK } from "./constants";
import ApiStore, { } from "../../utils/request";



export function* getMyTasksSaga(action) {
  try {
    const response = yield ApiStore.task.get("/my-tasks");
    yield put(setMyTasks(response.data.payload));
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
  yield takeLatest(GET_MY_TASKS, getMyTasksSaga);
}
