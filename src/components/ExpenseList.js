import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => {
  return (
    <div className="content-container">
      <div class="list-header">
        <div className="show-for-mobile">Expenses</div>
        <div className="show-for-desktop">Expense</div>
        <div className="show-for-desktop">Amount</div>
      </div>
      <div className="list-body">
        {props.expenses.length ? (
          props.expenses.map(expense => (
            <ExpenseListItem key={expense.id} {...expense} />
          ))
        ) : (
          <div className="list-item list-item--message">
            <span>No Expenses</span>
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};
export default connect(mapStateToProps)(ExpenseList);