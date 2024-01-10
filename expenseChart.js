import React from "./component/chart/chart";


const ExpenseChart = (props) => {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "March", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "June", value: 0 },
    { label: "july", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];
  if (props.expense && Array.isArray(props.expense)) {
    for (let expense of props.expense) {
      const expenseMonth = expense.date.getMonth(); 
      chartDataPoints[expenseMonth].value += expense.amount;
    }
  } else {
    
    console.warn("props.expense is undefined or not an array");
    return null;
  }

  return <Chart datapoints={chartDataPoints} />;
};
export default ExpenseChart;
