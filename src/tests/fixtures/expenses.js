import moment from "moment";

const expenses = [
  {
    id: "1",
    description: "gum",
    amount: 195,
    createdAt: 0,
  },
  {
    id: "2",
    description: "rent",
    amount: 1950,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "credit card",
    amount: 1450,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];

export default expenses;
