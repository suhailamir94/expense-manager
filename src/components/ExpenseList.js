import React from "react";
import { connect } from "react-redux";

import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../selectors/expenses";

export const ExpenseList = props => {
  return (
    <div>
      <h2>Expense List</h2>
      {props.expenses.length ? (
        props.expenses.map(expense => (
          <ExpenseListItem key={expense.id} {...expense} />
        ))
      ) : (
        <p>No Expenses Found!!</p>
      )}
    </div>
  );
};
const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters),
  };
};
export default connect(mapStateToProps)(ExpenseList);
