import React from "react";
import { shallow } from "enzyme";
import { ExpenseListFilters } from "../../components/ExpenseListFilters";
import { filters, altFilters } from "../fixtures/filters";

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render expense list filters correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render expense list filters with alt data correctly", () => {
  wrapper.setProps({ filters: altFilters });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value: altFilters.text },
    });
  expect(setTextFilter).toHaveBeenLastCalledWith(altFilters.text);
});

test("should sort by date", () => {
  wrapper.find("select").simulate("change", {
    target: { value: filters.sortBy },
  });
  expect(sortByDate).toBeCalled();
});

test("should sort by amount", () => {
  wrapper.find("select").simulate("change", {
    target: { value: altFilters.sortBy },
  });
  expect(sortByAmount).toBeCalled();
});

test("should handle date change", () => {
  wrapper.find("DateRangePicker").prop("onDatesChange")({
    startDate: altFilters.startDate,
    endDate: altFilters.endDate,
  });
  expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

test("should handle date focus change", () => {
  let calenderFocused = "startDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calenderFocused);
  expect(wrapper.state("calenderFocused")).toEqual(calenderFocused);
  calenderFocused = "endDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calenderFocused);
  expect(wrapper.state("calenderFocused")).toEqual(calenderFocused);
});
