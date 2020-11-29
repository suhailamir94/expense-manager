import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenseListFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage = () => (
  <div className="container-column">
    <div className="container">
      <ExpenseListFilters />
      <ExpensesSummary />
      <ExpenseList />
    </div>
  </div>
);
export default ExpenseDashboardPage;
