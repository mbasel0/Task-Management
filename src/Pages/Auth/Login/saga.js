import { put, takeLatest } from "redux-saga/effects";
import { LOGIN } from "./constants";
import { setUser } from "./actions";
import ApiStore, { setTokenService } from "../../../utils/request";
import { push } from 'connected-react-router'

export function* loginSaga(action) {
  try {
    var response = yield ApiStore.auth.post("/login", action.values);
    setTokenService(response.data.payload.jwtToken);
    localStorage.setItem("token", response.data.payload.jwtToken);
    yield put(setUser(response.data.payload));
    yield put(push("/task"))
  }
  catch (error) {
  }
}



export default function* homeSaga() {
  yield takeLatest(LOGIN, loginSaga);
}
