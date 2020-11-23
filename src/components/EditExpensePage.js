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
          props.onSubmit(props.expense.id, expense);
          // this is how we redirect from one page to another through JS in React Router
          props.history.push("/");
        }}
      />
      <button
        onClick={() => {
          props.onClickRemove(props.expense.id);
          // props.dispatch(removeExpense({ id: props.expense.id }));
          props.history.push("/");
        }}
      >
        REMOVE
      </button>
    </div>
  );
};

const mapStateToProps = (state, props) => ({
  expense: state.expenses.find(expense => expense.id === props.match.params.id),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (id, expense) => dispatch(editExpense(id, expense)),
  onClickRemove: id => dispatch(removeExpense({ id })),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);
