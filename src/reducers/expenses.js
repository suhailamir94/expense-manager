const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "GET_EXPENSES_SUCCEEDED":
      return [...action.expenses];
    case "ADD_EXPENSE_SUCCEEDED":
      return [...state, action.expense];
    case "REMOVE_EXPENSE_SUCCEEDED":
      return state.filter(e => e.id != action.id);
    case "EDIT_EXPENSE_SUCCEEDED":
      return state.map(expense =>
        expense.id === action.id ? { ...expense, ...action.updates } : expense
      );
    case "ADD_EXPENSE_FAILED":
      return state;
    case "GET_EXPENSES_FAILED":
      return state;
    case "EDIT_EXPENSE_FAILED":
      return state;
    case "REMOVE_EXPENSE_FAILED":
      return state;
    default:
      return state;
  }
};

export default expensesReducer;
