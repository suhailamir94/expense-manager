import React from "react";
import { shallow } from "enzyme";
import { ExpensesSummary } from "../../components/ExpensesSummary";

test("should render ExpenseSummary with 1 expense correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={1} expenseTotal={235} />
  );
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseSummary with multiple expenses correctly", () => {
  const wrapper = shallow(
    <ExpensesSummary expenseCount={10} expenseTotal={2350} />
  );
  expect(wrapper).toMatchSnapshot();
});
