import React, { useState } from "react";
import styles from "./Components-style/Components.module.css";

const TransActionForm = ({ addTransAction }) => {
  const [formValues, setFormValues] = useState({
    desc: "",
    value: "",
    type: "expense",
  });

  const handleValue = (e) => {
    if (typeof Number(formValues.value) !== "number") {
      alert("Please Enter Number in Your Input! 😉");
    }
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formValues.desc === "" || formValues.value === "" || formValues.type === "") {
      return alert("Please Field Any Inputs! 😄");
    }
    addTransAction(formValues);
    setFormValues({
      desc: "",
      value: "",
      type: "expense",
    });
  };

  return (
    <form className={`${styles.transActionForm}`} onSubmit={(e) => handleSubmit(e)}>
      <input
        placeholder="Description"
        className={`${styles.inputDesc}`}
        onChange={(e) => handleValue(e)}
        value={formValues.desc}
        type="text"
        name="desc"
      />
      <input
        placeholder="Amount"
        className={`${styles.inputValue}`}
        onChange={(e) => handleValue(e)}
        value={formValues.value}
        type="number"
        name="value"
      />
      <div className={`${styles.types}`}>
        <input
          checked={formValues.type === "expense"}
          onChange={(e) => handleValue(e)}
          type="radio"
          name="type"
          value="expense"
        />
        <label>Expense</label>
        <input checked={formValues.type === "income"} onChange={(e) => handleValue(e)} type="radio" name="type" value="income" />
        <label>Income</label>
      </div>
      <button className={`${styles.submitBtn}`} type="submit">
        Add Transaction
      </button>
    </form>
  );
};

export default TransActionForm;
