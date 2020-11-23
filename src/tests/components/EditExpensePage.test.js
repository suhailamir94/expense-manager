import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let onSubmitSpy, onClickRemoveSpy, history, wrapper;

beforeEach(() => {
  onSubmitSpy = jest.fn();
  onClickRemoveSpy = jest.fn();
  history = { push: jest.fn() };
  wrapper = shallow(
    <EditExpensePage
      onSubmit={onSubmitSpy}
      history={history}
      onClickRemove={onClickRemoveSpy}
      expense={expenses[0]}
    />
  );
});

test("should render EditExpensepage correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should handle onSubmit", () => {
  wrapper.find("ExpenseForm").prop("onSubmit")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onSubmitSpy).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test("should handle onClickRemove", () => {
  wrapper.find("button").prop("onClick")(expenses[0]);
  expect(history.push).toHaveBeenLastCalledWith("/");
  expect(onClickRemoveSpy).toHaveBeenLastCalledWith(expenses[0].id);
});
