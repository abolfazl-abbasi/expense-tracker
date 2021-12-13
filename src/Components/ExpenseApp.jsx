import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./Components-style/Components.module.css";
import OverViewComponent from "./OverViewComponent";
import TransActionsComponent from "./TransActionsComponent";

const ExpenseApp = () => {
  const [transActions, setTransActions] = useState([]);
  const [showTransActions, setShowTransActions] = useState([...transActions]);
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    handleStart();
  }, []);

  const handleStart = async () => {
    const { data } = await axios.get("/transactions");
    setTransActions([...data]);
  };

  const handleTransAction = async (formValues) => {
    const trans = await { ...formValues, id: Math.round(Math.random() * 1000) };
    await axios.post("/transactions", trans);
    const { data } = await axios.get("/transactions");
    setTransActions([...data]);
    setTransactionId(trans.id);
  };
  const handleDelete = async (e) => {
    await axios.delete(`/transactions/${e.id}`);
    setTransActions(transActions.filter((t) => t.id !== e.id));
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
        <TransActionsComponent
          onStart={handleStart}
          onSearch={handleSearch}
          transActions={showTransActions}
          onDelete={handleDelete}
        />
      </section>
    </>
  );
};

export default ExpenseApp;
