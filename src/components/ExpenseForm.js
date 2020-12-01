import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

const now = moment();

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onAmountChange = this.onAmountChange.bind(this);
    this.onNoteChange = this.onNoteChange.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    console.log(props.expense);
    this.state = {
      description: props.expense ? props.expense.description : "",
      amount: props.expense ? props.expense.amount.toString() : "",
      note: props.expense ? props.expense.note : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calenderFocused: false,
      error: "",
    };
  }
  onDescriptionChange(e) {
    const description = e.target.value;
    this.setState(prevState => ({ ...prevState, description }));
  }
  onNoteChange(e) {
    const note = e.target.value;
    this.setState(prevState => ({ ...prevState, note }));
  }

  onAmountChange(e) {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}$/))
      this.setState(prevState => ({ ...prevState, amount }));
  }

  onDateChange(createdAt) {
    if (createdAt)
      this.setState(() => ({
        createdAt,
      }));
  }

  onFocusChange({ focused }) {
    this.setState(() => ({ calenderFocused: focused }));
  }
  onSubmit(e) {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: "Please provide description and amount" }));
    } else {
      this.state.error && this.setState(() => ({ error: "" }));
      this.props.onSubmit({
        description: this.state.description,
        amount: this.state.amount,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  }

  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          className="text-input"
          type="text"
          placeholder="Descreption"
          autoFocus
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          className="text-input"
          type="text"
          placeholder="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt} // momentPropTypes.momentObj or null
          onDateChange={this.onDateChange} // PropTypes.func.isRequired
          focused={this.state.calenderFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          className="textarea"
          placeholder="Add a note for for your expense (optional)"
          value={this.state.note}
          onChange={this.onNoteChange}
        ></textarea>
        <div className="button-container">
          <button className="button">Save Expense</button>
          {this.props.expense ? (
            <button
              className="button button__remove"
              onClick={() => {
                this.props.onClickRemove();
              }}
            >
              REMOVE
            </button>
          ) : (
            ""
          )}
        </div>
      </form>
    );
  }
}
