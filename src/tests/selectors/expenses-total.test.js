import expenses from "../fixtures/expenses";
import totalExpenses from "../../selectors/expenses-total";

test("should handle empty expense", () => {
  const result = totalExpenses([]);
  expect(result).toBe(0);
});

test("should handle single expense", () => {
  const result = totalExpenses([expenses[0]]);
  expect(result).toBe(195);
});

test("should handle  multiple expenses ", () => {
  const result = totalExpenses(expenses);
  expect(result).toBe(3595);
});
