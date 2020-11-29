import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

import { firebase } from "./firebase/firebase";
import { history } from "./routers/AppRouter";

const store = configureStore();

let hasRendered = false;
const renderApp = () => {
  console.log(hasRendered);
  if (!hasRendered) {
    ReactDOM.render(
      <Provider store={store}>
        <AppRouter />
      </Provider>,
      document.getElementById("app")
    );
    hasRendered = true;
  }
};

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    console.log("logged in");
    store.dispatch({
      type: "LOGIN_SUCCEEDED",
      uid: user.uid,
    });
    store.dispatch({ type: "GET_EXPENSES", userId: user.uid });
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    console.log("logged out");
    store.dispatch({
      type: "LOGOUT_SUCCEEDED",
    });
    renderApp();
    history.push("/");
  }
});
