export default expenses =>
  expenses.length
    ? expenses.reduce((total, expense) => total + Number(expense.amount), 0)
    : 0;
