import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import {
  addExpenseFirebase,
  getAllExpensesFirebase,
  editExpenseFirebase,
  removeExpenseFirebase,
} from "../firebase/firebase";

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* addExpenseAsync(action) {
  try {
    const id = yield call(addExpenseFirebase, [action.expense, action.userId]);
    yield put({
      type: "ADD_EXPENSE_SUCCEEDED",
      expense: { id, ...action.expense },
    });
  } catch (e) {
    yield put({ type: "ADD_EXPENSE_FAILED", message: e.message });
  }
}
function* editExpenseAsync({ id, updates, userId }) {
  try {
    yield call(editExpenseFirebase, [id, updates, userId]);
    yield put({
      type: "EDIT_EXPENSE_SUCCEEDED",
      id,
      updates,
    });
  } catch (e) {
    yield put({ type: "ADD_EXPENSE_FAILED", message: e.message });
  }
}
function* removeExpenseAsync({ id, userId }) {
  try {
    yield call(removeExpenseFirebase, [id, userId]);
    yield put({
      type: "REMOVE_EXPENSE_SUCCEEDED",
      id,
    });
  } catch (e) {
    yield put({ type: "REMOVE_EXPENSE_FAILED", message: e.message });
  }
}
function* getExpensesAsync(action) {
  try {
    const expenses = yield call(getAllExpensesFirebase, action.userId);
    yield put({
      type: "GET_EXPENSES_SUCCEEDED",
      expenses,
    });
  } catch (e) {
    yield put({ type: "GET_EXPENSES_FAILED", message: e.message });
  }
}
/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/

export function* getAllExpensesSaga() {
  yield takeEvery("GET_EXPENSES", getExpensesAsync);
}

export function* addExpenseSaga() {
  yield takeEvery("ADD_EXPENSE", addExpenseAsync);
}

export function* editExpenseSaga() {
  yield takeEvery("EDIT_EXPENSE", editExpenseAsync);
}

export function* removeExpenseSaga() {
  yield takeEvery("REMOVE_EXPENSE", removeExpenseAsync);
}
