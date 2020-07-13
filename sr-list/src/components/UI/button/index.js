import React from "react";
import Aux from "../../hoc/Aux";
import styles from './index.module.css';


const Input = (props) => {
  let addClass = '';
  if(props.type){
    addClass = props.type;
  }
  return (
    <Aux>
      <button className={styles.btn + ' ' + styles[addClass]} >{props.children}</button>
    </Aux>
  );
 
};

export default Input;
