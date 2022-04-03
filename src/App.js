import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from 'react';

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Könyv",
    amount: 3300,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "Csoki", amount: 340, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Biztosítás",
    amount: 56000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Játék",
    amount: 19900,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
