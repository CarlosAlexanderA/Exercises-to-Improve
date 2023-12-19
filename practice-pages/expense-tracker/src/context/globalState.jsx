import {createContext, useContext, useEffect, useReducer} from 'react';
import {AppReducer} from './AppReducer';

export const Context = createContext();

const initialState = {transactions: []};
export function useGlobalState() {
  const context = useContext(Context);
  return context;
}

export function GlobalProvider({children}) {
  const [state, dispatch] = useReducer(AppReducer, initialState, () => {
    const data = localStorage.getItem('transactions');
    return data ? JSON.parse(data) : initialState;
  });
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(state));
  }, [state]);
  const addTransaction = (transaction) => {
    dispatch({
      type: 'ADD_TRANSACTION',
      payload: transaction,
    });
  };
  const deleteTransaction = (id) => {
    dispatch({
      type: 'DELETE_TRANSACTION',
      payload: id,
    });
  };
  return (
    <Context.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
      }}
    >
      {children}
    </Context.Provider>
  );
}
