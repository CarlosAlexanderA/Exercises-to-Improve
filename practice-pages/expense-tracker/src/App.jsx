import {Balance} from './components/Balance';
import {Header} from './components/Header';
import {ExpenseChart} from './components/transactions/ExpenseChart';
import {IncomeExpenses} from './components/transactions/IncomeExpenses';
import {TransactionForm} from './components/transactions/TransactionForm';
import {TransactionList} from './components/transactions/TransactionList';

function App() {
  return (
    <div className="bg-zinc-900 text-white h-screen flex justify-center items-center">
      <div className=" container mx-auto w-3/6">
        <div className="bg-zinc-800 p-10 rounded-lg flex gap-x-2">
          <div>
            <Header />
            <IncomeExpenses />
            <Balance />
            <TransactionForm />
          </div>
          <div className="flex flex-col flex-1">
            <TransactionList />
            <ExpenseChart />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
