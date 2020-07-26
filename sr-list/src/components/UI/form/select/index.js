import React from "react";
import styles from "./index.module.css";

const Select = (props) => {

  let addClass = "";
  let selectOptions = "";
  if (props.place) {
    addClass = props.place;
  }

  selectOptions = props.ops.map((opt) => {
   
    return (
      <option key={opt.id} value={opt.id +'--'+ opt.name}>
        {opt.name}
      </option>
    );
  });

  return (
    <select
      className={styles.select + " " + styles[addClass]}
      name={props.name}
      onChange={props.changed}
    >
      <option>-- {props.placeholder} --</option>
      {selectOptions}
    </select>
  );
};

export default Select;
