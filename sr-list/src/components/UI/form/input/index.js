import React from "react";
import Aux from "../../../hoc/Aux";
import styles from "./index.module.css";


const Button = (props) => {
   let addClass = "";
   if (props.place) {
     addClass = props.place;
   }

  return (
    <Aux>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={ styles.input + ' ' + styles[addClass] }
      />
    </Aux>
  );
 
};

export default Button;
