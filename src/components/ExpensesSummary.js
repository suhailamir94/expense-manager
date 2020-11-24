import React from "react";
import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import totalExpense from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount ? "expenses" : "expense";
  return (
    <div>
      <h1>
        Viewing {expenseCount} {expenseWord} totalling &#x20B9;{expenseTotal}
      </h1>
    </div>
  );
};
const mapStateToProps = state => {
  const expenses = selectExpenses(state.expenses, state.filters);
  return {
    expenseCount: expenses.length,
    expenseTotal: totalExpense(expenses),
  };
};
export default connect(mapStateToProps)(ExpensesSummary);
