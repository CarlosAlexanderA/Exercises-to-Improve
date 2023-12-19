import {VictoryPie, VictoryLabel} from 'victory';
import {useGlobalState} from '../../context/globalState';
export function ExpenseChart() {
  const {transactions} = useGlobalState();
  const totalIncome = transactions
    .filter((item) => item.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0);
  const totalExpense =
    transactions
      .filter((item) => item.amount < 0)
      .reduce((acc, item) => acc + item.amount, 0) * -1;

  const totalExpensePercentage = Math.round((totalExpense / totalIncome) * 100);
  const totalIncomePercentage = 100 - totalExpensePercentage;
  return (
    <VictoryPie
      colorScale={['#e74c3c', '#2ecc71']}
      data={[
        {x: 'Expense', y: totalExpensePercentage},
        {x: 'Incomes', y: totalIncomePercentage},
      ]}
      animate={{duration: 500}}
      labels={({datum}) => `${datum.y}%`}
      labelComponent={<VictoryLabel angle={0} style={{fill: 'white'}} />}
    />
  );
}
