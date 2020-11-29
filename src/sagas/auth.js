import { call, put, takeEvery } from "redux-saga/effects";
import { startLogin, startLogout } from "../firebase/firebase";

function* authLogin(action) {
  try {
    console.log("INSIDE");
    const result = yield call(startLogin);
    console.log(result);
    // yield put({
    //   type: "LOGIN_SUCCEEDED",
    // });
  } catch (e) {
    yield put({ type: "LOGIN_FAILED", message: e.message });
  }
}

function* authLogout(action) {
  try {
    const result = yield call(startLogout);
    console.log(result);
    // yield put({
    //   type: "LOGOUT_SUCCEEDED",
    // });
  } catch (e) {
    yield put({ type: "LOGOUT_FAILED", message: e.message });
  }
}

export function* login() {
  yield takeEvery("START_LOGIN", authLogin);
}

export function* logout() {
  yield takeEvery("START_LOGOUT", authLogout);
}
