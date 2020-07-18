import React, { Fragment } from "react";
import styles from "./index.module.css";


const Button = (props) => {
   let addClass = "";
   if (props.place) {
     addClass = props.place;
   }

  return (
    <Fragment>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={ styles.input + ' ' + styles[addClass] }
      />
    </Fragment>
  );
 
};

export default Button;
