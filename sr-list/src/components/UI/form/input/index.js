import React, { Fragment } from "react";
import styles from "./index.module.css";

const Button = (props) => {
  let addClass = "";
  if (props.place) {
    addClass = props.place;
  }
  let error = null;
  if ( !props.isValid ) {
    error = <span className={styles.error}>{props.errorMessage}</span>;
  }

  return (
    <Fragment>
      {error}
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={styles.input + " " + styles[addClass]}
        onChange={props.changed}
        onMouseLeave={props.blurred}
      />
    </Fragment>
  );
};

export default Button;
