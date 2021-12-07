import React, { useState } from "react";
import styles from "./Components-style/Components.module.css";
import TransActionForm from "./TransActionForm";

const OverViewComponent = ({ expense, income, addTransAction }) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <>
      <div className={`${styles.topSection}`}>
        <div
          className={`${income - expense > 0 ? styles.maxBalance : styles.minBalance} ${
            income - expense === 0 ? styles.balance : ""
          }`}
        >
          Balance : ${income - expense}
        </div>
        <button onClick={() => setIsShow((prev) => !prev)} className={`${styles.addBtn}`}>
          {isShow ? "Cancel" : "Add"}
        </button>
      </div>
      {isShow && <TransActionForm addTransAction={addTransAction} />}
      <div className={`${styles.resultSection}`}>
        <div className={`${styles.expense}`}>
          Expense <span>${expense}</span>
        </div>
        <div className={`${styles.income}`}>
          Income <span>${income}</span>
        </div>
      </div>
    </>
  );
};

export default OverViewComponent;
