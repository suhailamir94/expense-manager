import moment from "moment";

import {
  setStartDate,
  setEndDate,
  setTextFilter,
  sortByAmount,
  sortByDate,
} from "../../actions/filters";

test("should genearte set start Date action object", () => {
  expect(setStartDate(moment(0))).toEqual({
    type: "SET_START_DATE",
    startDate: moment(0),
  });
});

test("should genearte set end Date action object", () => {
  expect(setEndDate(moment(0))).toEqual({
    type: "SET_END_DATE",
    endDate: moment(0),
  });
});

test("should genearte sort By Amount action object", () => {
  expect(sortByAmount()).toEqual({
    type: "SORT_BY_AMOUNT",
    sortBy: "amount",
  });
});

test("should genearte sort By Date action object", () => {
  expect(sortByDate()).toEqual({
    type: "SORT_BY_DATE",
    sortBy: "date",
  });
});

test("should genearte set Text Filter action object", () => {
  expect(setTextFilter("rent")).toEqual({
    type: "SET_TEXT_FILTER",
    text: "rent",
  });
});

test("should genearte set Text Filter action object", () => {
  expect(setTextFilter()).toEqual({
    type: "SET_TEXT_FILTER",
    text: "",
  });
});
