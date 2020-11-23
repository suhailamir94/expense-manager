import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should setup default expense values", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense id id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-1",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add expense ", () => {
  const action = {
    type: "ADD_EXPENSE",
    expense: {
      id: "4",
      description: "food",
      amount: 950,
      createdAt: 100,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, action.expense]);
});

test("should add expense ", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "3",
    updates: {
      ...expenses[2],
      description: "food",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[1], action.updates]);
});

test("should add expense ", () => {
  const action = {
    type: "EDIT_EXPENSE",
    id: "4",
    updates: {
      ...expenses[2],
      description: "food",
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
