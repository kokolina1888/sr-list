import React from "react";
import DocFrag from "../../hoc/docFrag";
import styles from './index.module.css';


const Input = (props) => {
  let addClass = '';
  if(props.type){
    addClass = props.type;
  }
  return (
    <DocFrag>
      <button className={styles[addClass]}>
        {props.children}
      </button>
      {/* <button className={styles.btn + " " + styles[addClass]}> */}
        {/* {props.children} */}
      {/* </button> */}
    </DocFrag>
  );
 
};

export default Input;
