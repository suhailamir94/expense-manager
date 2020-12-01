import React from "react";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import selectExpenses from "../selectors/expenses";
import totalExpense from "../selectors/expenses-total";

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount ? "expenses" : "expense";
  return (
    <div className="page-header">
      <div className="content-container">
        <h1 className="page-header__title">
          Viewing <span>{expenseCount}</span> {expenseWord} totalling{" "}
          <span>&#x20B9;{expenseTotal}</span>
        </h1>
        <div className="page-header__action">
          <Link to="/create" className="button">
            Add Expense
          </Link>
        </div>
      </div>
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
