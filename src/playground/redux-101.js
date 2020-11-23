import { createStore } from "Redux";

// Reducers
// 1. Reducers are pure functions.
// 2. Never change state of action.

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.incrementBy };
    case "DECREMENT":
      return { count: state.count - action.decrementBy };
    case "RESET":
      return { count: 0 };
    case "SET":
      return { count: action.count };
    default:
      return state;
  }
};

const store = createStore(countReducer);

// Action generators are finctions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: "INCREMENT",
  incrementBy,
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: "DECREMENT",
  decrementBy,
});

const resetCount = () => ({
  type: "RESET",
});

const setCount = ({ count }) => ({
  type: "SET",
  count,
});
const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// Actions - Are objects that get sent to store to do a specific task.

// Task 1 - I would like to increment the count

store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(incrementCount({ incrementBy: 2 }));

store.dispatch(decrementCount({ decrementBy: 2 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 10 }));
