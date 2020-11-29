export const addExpense = (
  { description = "", note = "", amount = 0, createdAt = 0 },
  userId
) => ({
  type: "ADD_EXPENSE",
  expense: {
    description,
    note,
    amount,
    createdAt,
  },
  userId,
});

//EDIT_EXPENSE
export const removeExpense = ({ id, userId }) => ({
  type: "REMOVE_EXPENSE",
  id,
  userId,
});

//REMOVE_EXPENSE
export const editExpense = (id, updates, userId) => ({
  type: "EDIT_EXPENSE",
  id,
  updates,
  userId,
});
