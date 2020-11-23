import filterReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values", () => {
  const state = filterReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({
    text: "",
    sortBy: "date", // date or amount
    startDate: moment().startOf("month"),
    endDate: moment().endOf("month"),
  });
});

test("should set sort by to amount", () => {
  const state = filterReducer(undefined, {
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  });
  expect(state.sortBy).toBe("amount");
});

test("should set sort by to date", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "amount",
  };
  const state = filterReducer(currentState, {
    type: "SORT_BY_DATE",
    sortBy: "date",
  });
  expect(state.sortBy).toBe("date");
});

test("should set text filter", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date",
  };
  const state = filterReducer(currentState, {
    type: "SET_TEXT_FILTER",
    text: "rent",
  });
  expect(state.text).toBe("rent");
});

test("should set start date filter", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date",
  };
  const state = filterReducer(currentState, {
    type: "SET_START_DATE",
    startDate: moment(0),
  });
  expect(state.startDate).toEqual(moment(0));
});

test("should set end date filter", () => {
  const currentState = {
    text: "",
    startDate: undefined,
    endDate: undefined,
    sortBy: "date",
  };
  const state = filterReducer(currentState, {
    type: "SET_END_DATE",
    endDate: moment(0),
  });
  expect(state.endDate).toEqual(moment(0));
});
