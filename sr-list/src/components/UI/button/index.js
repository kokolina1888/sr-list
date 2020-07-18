import React, { Fragment } from "react";
import styles from './index.module.css';


const Input = (props) => {
  let addClass = '';
  if(props.type){
    addClass = props.type;
  }
  return (
    <Fragment>
      <button className={styles[addClass]}>
        {props.children}
      </button>
      {/* <button className={styles.btn + " " + styles[addClass]}> */}
        {/* {props.children} */}
      {/* </button> */}
    </Fragment>
  );
 
};

export default Input;
