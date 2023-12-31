import {useGlobalState} from '../../context/globalState';

export function TransactionItem({transaction}) {
  const {deleteTransaction} = useGlobalState();
  // console.log(transaction);
  return (
    <li className=" bg-zinc-600 text-white px-3 py-1 rounded-lg mb-2 w-full flex justify-between">
      <p>${transaction.description}</p>
      <span>{transaction.amount} </span>
      <button
        onClick={() => {
          deleteTransaction(transaction.id);
        }}
      >
        X
      </button>
    </li>
  );
}
