import React from "react";
import styles from "./index.module.css";

const StatisticsCard = ({type, title, count}) => {
  return (
    <div className={styles.single}>
        <div className={styles[type.replace(' ', '-')]}></div>
      <h3>
      <span className={styles.counter}>{count}</span>
      </h3>
      <h6 className={styles.headline}>{title}</h6>
    </div>
  );
};

export default StatisticsCard;
