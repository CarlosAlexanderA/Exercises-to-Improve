import {useGlobalState} from '../context/globalState';

export function Balance() {
  const {transactions} = useGlobalState();
  const amounts = transactions.map((item) => item.amount);
  const total = amounts.reduce((acc, item) => acc + item, 0).toFixed(2);
  return (
    <div className="flex justify-between">
      <h3>Your Balance</h3>
      <h1 className="text-2xl font-bold">${total}</h1>
    </div>
  );
}
