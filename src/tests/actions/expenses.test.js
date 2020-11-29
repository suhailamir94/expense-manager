import { addExpense, editExpense, removeExpense } from "../../actions/expenses";

test("should setup remove expense action object", () => {
  const action = removeExpense({ id: "123abc" });
  expect(action).toEqual({ type: "REMOVE_EXPENSE", id: "123abc" });
});

test("should setup edit expense action object", () => {
  expect(editExpense("123abc", { description: "updated description" })).toEqual(
    {
      type: "EDIT_EXPENSE",
      id: "123abc",
      updates: { description: "updated description" },
    }
  );
});

test("should return add expense action object with provided values", () => {
  const expenseData = {
    description: "Rent",
    amount: 4000,
    createdAt: 1000,
    note: "This was last months rent",
  };

  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense: { ...expenseData },
  });
});

// test("should return add expense action object with default values", () => {
//   expect(addExpense({})).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       description: "",
//       note: "",
//       amount: 0,
//       createdAt: 0,
//       id: expect.any(String),
//     },
//   });
// });
