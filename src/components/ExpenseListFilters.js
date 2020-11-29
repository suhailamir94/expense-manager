import React from "react";
import { connect } from "react-redux";

import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate,
} from "../actions/filters";
import { DateRangePicker } from "react-dates";

export class ExpenseListFilters extends React.Component {
  constructor(props) {
    super(props);
    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onSortChange = this.onSortChange.bind(this);
    this.state = { calenderFocused: null };
  }

  onDatesChange({ startDate, endDate }) {
    this.props.setStartDate(startDate);
    this.props.setEndDate(endDate);
  }
  onFocusChange(calenderFocused) {
    this.setState(() => ({ calenderFocused }));
  }

  onTextChange(e) {
    this.props.setTextFilter(e.target.value);
  }
  onSortChange(e) {
    e.target.value === "amount"
      ? this.props.sortByAmount()
      : this.props.sortByDate();
  }
  render() {
    return (
      <div className="filter-list-container">
        <input
          type="text"
          value={this.props.filters.text}
          onChange={this.onTextChange}
        />
        <select
          defaultValue={this.props.filters.sortBy}
          onChange={this.onSortChange}
        >
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calenderFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters,
  };
};

const mapDispatchToProps = dispatch => ({
  setTextFilter: text => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: startDate => dispatch(setStartDate(startDate)),
  setEndDate: endDate => dispatch(setEndDate(endDate)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
