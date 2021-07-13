import { put, takeLatest } from "redux-saga/effects";
import { GET_TASK_BY_ID, UPTADE_TASK } from "./constants";
import { setTaskById } from "./actions";
import ApiStore, { } from "../../utils/request";
import { } from 'connected-react-router'
import { push } from 'connected-react-router'


export function* getTaskByIdSaga(action) {
  try {
    const response = yield ApiStore.task.get(`/${action.id}`);
    yield put(setTaskById(response.data.payload));
  }
  catch (error) {
  }
}

export function* uptadeTaskSaga(action){
  try {
   yield ApiStore.task.put(`/${action.id}`,action.values)
   yield put(push('/task'));
  }
  catch(error) {

  }
}


export default function* homeSaga() {
  yield takeLatest(GET_TASK_BY_ID, getTaskByIdSaga);
  yield takeLatest(UPTADE_TASK,uptadeTaskSaga);
}