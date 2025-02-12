import ExpenseItem from "./components/ExpenseItem";

function App() {
  const DUMMY_EXPENSES = [
    { id: "el1", title: "Toilet paper", price: 2, date: new Date(2020, 5, 10) },
    { id: "el2", title: "online course", price: 30000, date: new Date(2020, 6, 15) },
    { id: "el3", title: "Toilet paper", price: 4, date: new Date(2020, 5, 10) },
    { id: "el4", title: "Toilet paper", price: 2, date: new Date(2020, 5, 10) },
  ];

  return (
    <div className="App">
      <ExpenseItem title = {DUMMY_EXPENSES[0].title} date = {DUMMY_EXPENSES[0].date} price={DUMMY_EXPENSES[0].price}/>
    </div>
  );
}

export default App;
