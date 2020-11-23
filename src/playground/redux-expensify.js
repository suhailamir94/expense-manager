import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

// action generators

// ADD_EXPENSE
const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

//EDIT_EXPENSE
const removeExpense = ({ id }) => ({ type: "REMOVE_EXPENSE", id });

//REMOVE_EXPENSE
const editExpense = (id, updates) => ({ type: "EDIT_EXPENSE", id, updates });

// Expenses reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE_EXPENSE":
      return state.filter(e => e.id != action.id);
    case "EDIT_EXPENSE":
      return state.map(expense => {
        if (expense.id == action.id) return { ...expense, ...action.updates };
      });
    default:
      return state;
  }
};

// SET_TEXT

const setTextFilter = text => ({
  type: "SET_TEXT_FILTER",
  text,
});

const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT",
  sortBy: "amount",
});

const sortByDate = () => ({
  type: "SORT_BY_DATE",
  sortBy: "date",
});

const setStartDate = startDate => ({
  type: "SET_START_DATE",
  startDate,
});

const setEndDate = endDate => ({
  type: "SET_END_DATE",
  endDate,
});

// filter reducers
const filterReducerDefaultState = {
  text: "",
  sortBy: "date", // date or amount
  startDate: undefined,
  endDate: undefined,
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: action.sortBy };
    case "SORT_BY_DATE":
      return { ...state, sortBy: action.sortBy };
    case "SET_START_DATE":
      return { ...state, startDate: action.startDate };
    case "SET_END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

const filterExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof expense !== "number" || expense.createdAt >= startDate;
      const endDateMatch =
        typeof expense !== "number" || expense.createdAt >= endDate;
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") return a.createdAt < b.createdAt ? 1 : -1;
      if (sortBy === "amount") return a.amount < b.amount ? 1 : -1;
    });
};

// store creation

const store = createStore(
  combineReducers({ expenses: expensesReducer, filters: filterReducer })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = filterExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const id = store.dispatch(addExpense({}))["expense"]["id"];

store.dispatch(
  addExpense({
    note: "rent January",
    description: "This is my rent for the month of January",
    amount: 500,
    createdAt: 125,
  })
);
store.dispatch(
  addExpense({
    note: "food January",
    description: "This is my food expense for the month of January",
    amount: 200,
    createdAt: -125,
  })
);
// store.dispatch(editExpense(id, { amount: 500 }));
// store.dispatch(removeExpense({ id }));
// store.dispatch(setTextFilter("rent"));
store.dispatch(sortByAmount());
store.dispatch(setStartDate(125));
store.dispatch(setEndDate(150));
store.dispatch(sortByDate());
