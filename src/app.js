import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";

import { addExpense } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import moment from "moment";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();
store.dispatch(
  addExpense({
    description: "rent January",
    note: "This is my rent for the month of January",
    amount: 500,
    createdAt: moment().valueOf(),
  })
);
store.dispatch(
  addExpense({
    note: "This is my food expense for the month of January",
    description: "food January",
    amount: 600,
    createdAt: moment().valueOf(),
  })
);
// store.dispatch(setTextFilter("rent"));
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById("app")
);
