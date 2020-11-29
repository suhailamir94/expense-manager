import { all, fork } from "redux-saga/effects";

import * as expenseSagas from "./expenses";
import * as authSagas from "./auth";

export default function* rootSaga() {
  yield all(
    [...Object.values(expenseSagas), ...Object.values(authSagas)].map(fork)
  );
}
