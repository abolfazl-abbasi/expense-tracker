import React, { useState, useEffect } from "react";
import styles from "./Components-style/Components.module.css";
import OverViewComponent from "./OverViewComponent";
import TransActionsComponent from "./TransActionsComponent";

const ExpenseApp = () => {
  const [transActions, setTransActions] = useState([]);
  const [showTransActions, setShowTransActions] = useState([...transActions]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const handleTransAction = (formValues) => {
    const data = { ...formValues, _id: Date.now().toString(16).slice(2, 10) };
    setTransActions([...transActions, data]);
  };
  const handleDelete = (e) => {
    setTransActions(transActions.filter((t) => t._id !== e._id));
  };
  const handleSearch = (e) => {
    const transActionUpdate = [...transActions];
    if (e.target.value === "") {
      return transActions;
    }
    setShowTransActions(transActionUpdate.filter((t) => (t.desc.toString() + t.value.toString()).includes(e.target.value)));
  };
  useEffect(() => {
    let exp = 0;
    let inc = 0;
    transActions.forEach((t) => {
      t.type === "expense" ? (exp += Number(t.value)) : (inc += Number(t.value));
    });
    setExpense(exp);
    setIncome(inc);
    setShowTransActions(transActions);
  }, [transActions]);
  return (
    <>
      <section className={`${styles.container}`}>
        <OverViewComponent addTransAction={handleTransAction} expense={expense} income={income} />
        <TransActionsComponent onSearch={handleSearch} transActions={showTransActions} onDelete={handleDelete} />
      </section>
    </>
  );
};

export default ExpenseApp;
