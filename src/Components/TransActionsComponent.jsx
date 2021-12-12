import React from "react";
import styles from "./Components-style/Components.module.css";

const TransActionComponent = ({ transActions, onDelete, onSearch }) => {
  return (
    <>
      <div className={`${styles.transactions}`}>
        <h3>Transactions</h3>
        <input onChange={(e) => onSearch(e)} placeholder="Search" type="search" className={`${styles.transactionsSearch}`} />
        {transActions.map((t) => {
          return (
            <section
              onDoubleClick={() => onDelete(t)}
              className={`${t.type === "expense" ? styles.expSections : styles.incSections}`}
              key={t.id}
            >
              <div className={`${t.type === "expense" ? styles.expSectionDesc : styles.incSectionDesc}`}>{t.desc}</div>
              <div className={`${t.type === "expense" ? styles.expSectionValue : styles.incSectionValue}`}>${t.value}</div>
            </section>
          );
        })}
      </div>
    </>
  );
};

export default TransActionComponent;
