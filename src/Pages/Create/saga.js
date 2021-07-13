import { put, takeLatest, call } from "redux-saga/effects";
import { CREATE } from "./constants";
import {  } from "./actions";
import ApiStore, { } from "../../utils/request";
import { push } from 'connected-react-router'


export function* taskCreateSaga(action) {
    try {
      yield ApiStore.task.post("/",action.values);
      yield put(push('/task'))
    } 
    catch (error) {
    }
}
  
export default function* createSaga() {
    yield takeLatest(CREATE,taskCreateSaga);
}
