import { v4 as uuidv4 } from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuidv4(),
    description,
    note,
    amount,
    createdAt,
  },
});

//EDIT_EXPENSE
export const removeExpense = ({ id }) => ({ type: "REMOVE_EXPENSE", id });

//REMOVE_EXPENSE
export const editExpense = (id, updates) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
});