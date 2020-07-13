import React from "react";
import DocFrag from "../../../hoc/docFrag";
import styles from "./index.module.css";


const Button = (props) => {
   let addClass = "";
   if (props.place) {
     addClass = props.place;
   }

  return (
    <DocFrag>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        className={ styles.input + ' ' + styles[addClass] }
      />
    </DocFrag>
  );
 
};

export default Button;
