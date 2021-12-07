import React from "react";
import ExpenseApp from "../Components/ExpenseApp";
import styles from "./App.jsx-style/App.module.css";

const App = () => {
  return (
    <div className={`${styles.app}`}>
      <header>
        <h2>Expense Tracker</h2>
      </header>
      <ExpenseApp />
    </div>
  );
};

export default App;
