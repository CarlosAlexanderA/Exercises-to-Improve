import {useGlobalState} from '../../context/globalState';
import {TransactionItem} from './TransactionItem';

export function TransactionList() {
  const {transactions} = useGlobalState();
  console.log(transactions);
  return (
    <>
      <h3 className=" text-slate-300 text-xl font-bold block">History</h3>
      <ul>
        {transactions.map((item) => (
          <TransactionItem transaction={item} key={item.id} />
        ))}
      </ul>
    </>
  );
}
