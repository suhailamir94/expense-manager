import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { addExpense } from "../actions/expenses";

export const AddExpensePage = props => (
  <div>
    <h1>Add Expense</h1>
    <ExpenseForm
      onSubmit={expense => {
        props.startAddExpense(expense); // this onSubmit is passed to props by the mapDispatchToProps method defined below
        // this is how we redirect from one page to another through JS in React Router
        props.history.push("/dashboard");
      }}
    />
  </div>
);

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(addExpense(expense)),
});
export default connect(undefined, mapDispatchToProps)(AddExpensePage);
