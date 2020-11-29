import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense, removeExpense } from "../actions/expenses";

export const EditExpensePage = props => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={expense => {
          props.startEditExpense(props.expense.id, expense, props.userId);
          // this is how we redirect from one page to another through JS in React Router
          props.history.push("/dashboard");
        }}
      />
      <button
        onClick={() => {
          props.onClickRemove(props.expense.id, props.userId);
          // props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/dashboard");
        }}
      >
        REMOVE
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
  userId: state.auth.userId,
});

const mapDispatchToProps = dispatch => ({
  startEditExpense: (id, expense, userId) =>
    dispatch(editExpense(id, expense, userId)),
  onClickRemove: (id, userId) => dispatch(removeExpense({ id, userId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
